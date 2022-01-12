/**
 * @description
 *
 * These are storybook utils for creating a dynamic demo.
 *
 * @internal
 */
export type CheckboxSelection = true | false | 'indeterminate';

export class TreeItem {
  open = false;
  show = false;
  expanded: false;
  expandable: false;
  parent: TreeItem | null = null;
  nodes: TreeItem[] = [];

  private _selected: CheckboxSelection = false;

  set selected(value: CheckboxSelection) {
    if (value !== this._selected) {
      this._selected = value;

      if (value !== 'indeterminate') {
        this.nodes.forEach(n => (n.selected = value));
      }

      if (this.parent && this.parent.selected !== this.selected) {
        const selectedItems = this.parent.nodes.filter(n => n.selected === true || n.selected === 'indeterminate');

        if (selectedItems?.length > 0 && selectedItems?.length < this.parent.nodes.length) {
          this.parent.selected = 'indeterminate';
        } else if (selectedItems?.length === 0) {
          this.parent.selected = false;
        } else {
          this.parent.selected = true;
        }
      }
    }
  }

  get selected() {
    return this._selected;
  }

  constructor(public id: string) {}
}

export function createItems(parent?: any, length = 0): TreeItem[] {
  const nodes: TreeItem[] = [];
  for (let i = 0; i < length; i++) {
    const node = new TreeItem(`${parent?.id ? `${parent.id}-` : ''}${i}`);
    node.parent = parent;
    nodes.push(node);
  }
  return nodes;
}
