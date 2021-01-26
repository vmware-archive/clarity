import { TSESLint } from '@typescript-eslint/experimental-utils';
import { InvalidTestCase } from '@typescript-eslint/experimental-utils/dist/ts-eslint';

import * as path from 'path';
interface Location {
  line: number;
  column: number;
}

interface TestOptions {
  code: string;
  output?: string;
  locations?: Array<Location>;
}

const parser = '@typescript-eslint/parser';

type RuleTesterConfig = Omit<TSESLint.RuleTesterConfig, 'parser'> & {
  parser: string;
};

export function getHtmlRuleTester() {
  return new RuleTester({
    parserOptions: {
      sourceType: 'module',
      ecmaVersion: 2015,
    },
    parser: '../src/html-parser',
  });
}

export function getTsRuleTester() {
  return new RuleTester({
    parserOptions: {
      sourceType: 'module',
      ecmaVersion: 2015,
    },
    parser: '@typescript-eslint/parser',
  });
}

class RuleTester extends TSESLint.RuleTester {
  private filename: string | undefined = undefined;

  // as of eslint 6 you have to provide an absolute path to the parser
  // but that's not as clean to type, this saves us trying to manually enforce
  // that contributors require.resolve everything
  constructor(options: RuleTesterConfig) {
    super({
      ...options,
      parser: require.resolve(options.parser),
    });

    if (options.parserOptions && options.parserOptions.project) {
      this.filename = path.join(getFixturesRootDir(), 'file.ts');
    }
  }

  // as of eslint 6 you have to provide an absolute path to the parser
  // If you don't do that at the test level, the test will fail somewhat cryptically...
  // This is a lot more explicit
  // tslint:disable-next-line:array-type
  run<TMessageIds extends string, TOptions extends Readonly<unknown[]>>(
    name: string,
    rule: TSESLint.RuleModule<TMessageIds, TOptions>,
    tests: TSESLint.RunTests<TMessageIds, TOptions>
  ): void {
    const errorMessage = `Do not set the parser at the test level unless you want to use a parser other than ${parser}`;

    if (this.filename) {
      (tests as any).valid = tests.valid.map(test => {
        if (typeof test === 'string') {
          return {
            code: test,
            filename: this.filename,
          };
        }

        return test;
      });
    }

    tests.valid.forEach((test: any) => {
      if (typeof test !== 'string') {
        if (test.parser === parser) {
          throw new Error(errorMessage);
        }
        if (!test.filename) {
          test.filename = this.filename;
        }
      }
    });
    tests.invalid.forEach((test: any) => {
      if (test.parser === parser) {
        throw new Error(errorMessage);
      }
      if (!test.filename) {
        test.filename = this.filename;
      }
    });

    super.run(name, rule, tests);
  }
}

export function getInvalidTestFactory(messageId: string) {
  return ({ code, output, locations }: TestOptions) =>
    getInvalidTest(code, output, locations, Array(locations?.length).fill(messageId));
}

function getFixturesRootDir(): string {
  return path.join(process.cwd(), 'tests/fixtures/');
}

function getInvalidTest(
  code: string,
  output?: string,
  locations: Array<Location> = [],
  messageIds: Array<string> = []
): InvalidTestCase<any, any> {
  return {
    code,

    errors: messageIds.map((messageId, index) => ({
      messageId,
      line: locations[index]?.line || 1,
      column: locations[index]?.column || 1,
    })),

    // Set the output property if provided as argument
    ...(output ? { output } : {}),
  };
}
