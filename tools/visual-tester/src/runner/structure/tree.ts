export class Block<T> {
  id: number;
  content: T;
  left: Block<T> | null;
  right: Block<T> | null;

  constructor(id: any, content: T) {
    this.id = id;
    this.content = content;
    this.left = null;
    this.right = null;
  }
}

export type LinkedListBlock = {
  value: any;
  next: LinkedListBlock | null;
};
export class LinkedList {
  public head: LinkedListBlock | null = null;

  *[Symbol.iterator]() {
    let current = this.head;
    for (; current !== null; current = current.next) {
      yield current.value;
    }
  }

  static create(content: any) {
    return {
      value: content,
      next: null,
    };
  }
}

export class Tree<T> {
  private tree: Block<T> | null = null;

  public get workTree() {
    return this.tree;
  }

  public addBlock(id: any, content: T) {
    const newBlock = new Block<T>(id, content);
    if (!this.tree) {
      this.tree = newBlock;
    } else {
      this.insertBlock(this.tree, newBlock);
    }
  }

  private insertBlock(parent: Block<T>, block: Block<T>) {
    if (block.id < parent.id) {
      if (parent.left === null) {
        parent.left = block;
      } else {
        this.insertBlock(parent.left, block);
      }
    } else {
      if (parent.right === null) {
        parent.right = block;
      } else {
        this.insertBlock(parent.right, block);
      }
    }
  }

  drop(id: number) {
    this.tree = this.dropBlock(this.tree, id);
  }

  dropBlock(tree: Block<T> | null, id: number): Block<T> | null {
    if (tree === null) {
      return null;
    }

    if (id < tree.id) {
      tree.left = this.dropBlock(tree.left, id);
      return tree;
    }

    if (id > tree.id) {
      tree.right = this.dropBlock(tree.right, id);
      return tree;
    }

    if (tree.left === null && tree.right === null) {
      return null;
    }

    if (tree.left === null) {
      return tree.right;
    }

    if (tree.right === null) {
      return tree.left;
    }

    return tree;
  }

  // Run left then right
  // This must result in something like 1,2,3,4
  inorder(block?: Block<T> | null) {
    const result: any = [];
    // Here I use `any` because if I want to cover it with types
    // I need to rework a lot of my super minimal code - I don't want to do that!
    // I'm pretty sure what will be pass to this function  so..
    function t(node: any) {
      if (node === null) {
        return;
      }
      node.left && t(node.left);
      result.push(node.content);
      node.right && t(node.right);
    }
    t(block || this.tree);
    return result;
  }

  findById(id: number) {
    return this.find(this.tree, id);
  }

  find(tree: Block<T> | null, id: number): any {
    if (tree === null) return null;

    if (id < tree.id) {
      return this.find(tree.right, id);
    }
    if (id > tree.id) {
      return this.find(tree.left, id);
    }
    return tree;
  }

  toLinkedList() {
    if (this.tree === null) {
      return null;
    }

    const list: any = this.inorder();
    const linked = new LinkedList();

    linked.head = LinkedList.create(list[0]);
    let current = linked.head;
    for (let i = 1; i < list.length; i++) {
      current.next = LinkedList.create(list[i]);
      current = current.next;
    }

    return linked;
  }
}
