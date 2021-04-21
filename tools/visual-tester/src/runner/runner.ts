import path from 'path';
import { CallbackMethod, Context, DescribeBlock, Hook } from './context';

// @TODO: to be able to run multiple spec at the same time this variable must be move into another
// scope, so it won't be overwritten from other files.
let spec: Context;

/**
 * Main method to start parsing and executing tests
 *
 * @param _spec Context
 */
export async function runSpec(_spec: Context) {
  spec = _spec;
  require(path.resolve(spec.filename));
  await executeBlocks(spec.blocks);
}

/**
 * Execute root DescribeBlock one by one and start searching for more tests
 *
 * @param blocks DescribeBlock[]
 */
async function executeBlocks(blocks: DescribeBlock[]) {
  const blocksLength = blocks.length;
  for (let blockIndex = 0; blockIndex < blocksLength; blockIndex++) {
    const block = blocks[blockIndex];
    spec.reporter.describe(block.name);
    await executeBlock(block);
    await runHooks('afterAll', block);
  }
}

/**
 * Execute Describe block
 *
 * @param block DescribeBlock
 */
async function executeBlock(block: DescribeBlock) {
  await runHooks('beforeAll', block);

  const testLength = block.tests.length;
  for (let testIndex = 0; testIndex < testLength; testIndex++) {
    const test = block.tests[testIndex];
    let initialTime;
    try {
      await runHooks('beforeEach', block);
      initialTime = new Date().getTime();
      // @ts-ignore
      await test.method.apply(this, [test]);
      spec.reporter.success(test.name, { startTime: initialTime });
    } catch (error) {
      spec.reporter.fail(test, { error, startTime: initialTime });
    }
    await runHooks('afterEach', block);
  }
}

/**
 * Attach hook to block
 *
 * @param hookName Hook
 * @param block DescribeBlock
 */
async function runHooks(hookName: Hook, block: DescribeBlock): Promise<any> {
  const hooks = (block.hooks as any).filter((hook: any) => {
    return hook.name === hookName;
  });

  const hooksLength = hooks.length;
  for (let hookIndex = 0; hookIndex < hooksLength; hookIndex++) {
    const hook = hooks[hookIndex];
    // @ts-ignore
    await hook.method.apply(this);
  }
}

/** Global API Methods */

function describe(description: string, method: CallbackMethod) {
  spec.addDescribe(description, method);
}

function fdescribe(description: string, method: CallbackMethod) {
  spec.addDescribe(description, method, true);
}

function ignoreCode(_description: string, _method: CallbackMethod) {
  // This code won't be evaluated at all.
}

function it(description: string, method: CallbackMethod) {
  spec.addTest(description, method);
}

function fit(description: string, method: CallbackMethod) {
  spec.addTest(description, method, true);
}

function beforeAll(method: CallbackMethod) {
  spec.hooks('beforeAll', method);
}
function afterAll(method: CallbackMethod) {
  spec.hooks('afterAll', method);
}
function beforeEach(method: CallbackMethod) {
  spec.hooks('beforeEach', method);
}
function afterEach(method: CallbackMethod) {
  spec.hooks('afterEach', method);
}

function expect(test: any) {
  return {
    toBe: (expectation: any) => {
      if (test !== expectation) {
        throw new Error(`${test} is not equal to ${expectation}`);
      }
    },
    toBeArrayWithLength: (expectation: number) => {
      if (test.length !== expectation) {
        throw new Error(`Expected to get array with length of ${expectation} but got ${test.length}`);
      }
    },
  };
}

global.describe = describe;
global.xdescribe = ignoreCode;
global.fdescribe = fdescribe;
global.it = it;
global.fit = fit;
global.xit = ignoreCode;
global.expect = expect;
global.beforeAll = beforeAll;
global.beforeEach = beforeEach;
global.afterAll = afterAll;
global.afterEach = afterEach;
