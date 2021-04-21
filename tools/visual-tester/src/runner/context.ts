import { Block, Tree } from '../runner/structure/tree';

export type DescribeBlock = {
  id: number;
  name: string;
  method: () => void;
  hooks: {
    name: string;
    method: () => void;
  }[];
  focused?: boolean;
  tests: {
    id: string;
    name: string;
    method: () => void;
    focused?: boolean;
  }[];
};

export type CallbackMethod = () => void;
export type Hook = 'beforeAll' | 'beforeEach' | 'afterEach' | 'afterAll';

/**
 * Spec Context
 */
export class Context {
  private describeCounter = 0;
  private testCounter = 0;
  private _currentBlock!: DescribeBlock;

  private tree = new Tree<DescribeBlock>();

  private _filename = '';

  private _reporter: any;

  constructor(filename: string) {
    this._filename = filename;
  }

  get filename() {
    return this._filename;
  }

  set reporter(reporter: any) {
    this._reporter = reporter;
  }

  get reporter() {
    return this._reporter;
  }

  get workTree(): Block<DescribeBlock> | null {
    return this.tree.workTree;
  }

  get blocks(): DescribeBlock[] {
    // @TODO if there is focused describe block we need to drop everything else and
    // run only focused blocks
    // @TODO not sure how optimal will be this - cause we need to parse describe blocks
    // before we could find every block and know what to run or not ?

    // @TODO: there is a possibility to run in parallel multiple parts of the tree
    const linked: any = this.tree.toLinkedList();
    return [...linked].filter((i: any) => i !== undefined);
  }

  public addDescribe(description: string, method: CallbackMethod, focused = false): void {
    this.describeCounter = this.describeCounter + 1;
    this.testCounter = 0;

    this._currentBlock = {
      // @TODO let me create tree based on this ID
      id: this.describeCounter,
      name: description,
      method: method,
      hooks: [],
      focused: focused,
      tests: [],
    };

    this.tree.addBlock(this._currentBlock.id, this._currentBlock);

    // @NOTE execute describe block so we could find more blocks inside
    // kind of inception !?
    method.apply(this);
  }

  public addTest(description: string, method: CallbackMethod, focused = false): void {
    this._currentBlock.tests.push({
      // let me locate parent describe block without the need of another ID like parent
      id: `${this.describeCounter}-${this.testCounter}`,
      name: description,
      focused: focused,
      method: method,
    });
    this.testCounter++;
  }

  // @TODO unhandled case is when you try to register more than one `beforeAll` and `afterAll`
  // in this case you could have more than one method, not sure even about the order of execution.
  public hooks(hook: Hook, method: CallbackMethod): void {
    this._currentBlock.hooks.push({
      name: hook,
      method: method,
    });
  }
}
