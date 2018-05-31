/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component, Input, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { ClrIfExpandModule } from '../../utils/expand/if-expand.module';

import { ClrTreeNode } from './tree-node';
import { ClrTreeViewModule } from './tree-view.module';

export default function(): void {
  'use strict';
  describe('Tree Node', () => {
    let fixture: ComponentFixture<any>;
    let compiled: any;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [ClrTreeViewModule, ClrIfExpandModule, NoopAnimationsModule],
        declarations: [
          BasicTreeNodeTestComponent,
          TreeNodeAlternateSyntaxTestComponent,
          TreeNodeExpandedTestComponent,
          BasicTreeNodeSelectionTestComponent,
          RecursiveSelectableStructureTestComponent,
          RecursiveSelectableTreeTest,
          BasicTreeNodeIndeterminateNodeTest,
        ],
      });
    });

    describe('Tree Node Basics', () => {
      beforeEach(() => {
        fixture = TestBed.createComponent(BasicTreeNodeTestComponent);
        fixture.detectChanges();
        compiled = fixture.nativeElement;
      });

      afterEach(() => {
        fixture.destroy();
      });

      describe('View', () => {
        it('projects only root when root not expanded', () => {
          expect(compiled.textContent).toMatch(/A1/);
          expect(compiled.textContent).not.toMatch(/B1/);
          expect(compiled.textContent).not.toMatch(/B2/);
          expect(compiled.textContent).not.toMatch(/B3/);
        });

        it('projects the child node when the parent node is expanded', () => {
          const parentNode: ClrTreeNode = fixture.componentInstance.parentTreeNode;

          parentNode.expanded = true;

          fixture.detectChanges();

          expect(compiled.textContent).toMatch(/A1/);
          expect(compiled.textContent).toMatch(/B1/);
          expect(compiled.textContent).toMatch(/B2/);
          expect(compiled.textContent).toMatch(/B3/);
        });

        it('projects child nodes in .clr-treenode-children', () => {
          const parentNode: ClrTreeNode = fixture.componentInstance.parentTreeNode;
          const childrenContainer: HTMLElement = compiled.querySelector('.clr-treenode-children');

          expect(childrenContainer.children.length).toBe(0);

          parentNode.expanded = true;

          fixture.detectChanges();

          expect(childrenContainer.children.length).toBe(3);
          expect(childrenContainer.textContent).toMatch(/B1/);
          expect(childrenContainer.textContent).toMatch(/B2/);
          expect(childrenContainer.textContent).toMatch(/B3/);
        });

        it('shows caret under .clr-treenode-caret only for tree nodes having child tree nodes', () => {
          const caret: any[] = compiled.querySelectorAll('.clr-treenode-caret');
          expect(caret.length).toBe(1);
        });

        it('contains .clr-treenode-content', () => {
          const content: HTMLElement = compiled.querySelector('.clr-treenode-content');
          expect(content).not.toBeNull();
          expect(content.textContent).toMatch(/A1/);
        });

        it('does not display a checkbox when selectable is false', () => {
          const checkbox: HTMLElement = compiled.querySelector('clr-checkbox');
          expect(checkbox).toBeNull();
        });
      });

      describe('Typescript API', () => {
        it('supports the expanded option', () => {
          const parentNode: ClrTreeNode = fixture.componentInstance.parentTreeNode;
          expect(parentNode.expanded).toBeDefined();
        });

        it('supports the selected option', () => {
          const parentNode: ClrTreeNode = fixture.componentInstance.parentTreeNode;
          expect(parentNode.selected).toBeDefined();
        });

        it('supports the toggleExpand() function', () => {
          const parentNode: ClrTreeNode = fixture.componentInstance.parentTreeNode;
          expect(parentNode.toggleExpand).toBeDefined();
        });

        it('provides an instance of the NodeExpand service', () => {
          const parentNode: ClrTreeNode = fixture.componentInstance.parentTreeNode;
          expect(parentNode.nodeExpand).toBeDefined();
          expect(parentNode.nodeExpand).not.toBeNull();
        });

        it('provides a selectable getter', () => {
          const parentNode: ClrTreeNode = fixture.componentInstance.parentTreeNode;
          expect(parentNode.selectable).toBeDefined();
        });

        it('provides a register method', () => {
          const parentNode: ClrTreeNode = fixture.componentInstance.parentTreeNode;
          expect(parentNode.register).toBeDefined();
        });

        it('provides a unregister method', () => {
          const parentNode: ClrTreeNode = fixture.componentInstance.parentTreeNode;
          expect(parentNode.unregister).toBeDefined();
        });

        it("has caretDirection set to 'right' on tree nodes by default", () => {
          expect(fixture.componentInstance.parentTreeNode.caretDirection).toBe('right');
        });

        it('toggles caretDirection on the tree node when its expanded & collapsed', () => {
          const componentInstance = fixture.componentInstance.parentTreeNode;
          expect(componentInstance.caretDirection).toBe('right');
          componentInstance.toggleExpand();
          fixture.detectChanges();
          expect(componentInstance.caretDirection).toBe('down');
        });

        it('has expanded set to false on tree nodes by default', () => {
          expect(fixture.componentInstance.parentTreeNode.expanded).toBe(false);
        });

        it('updates the nodeExpand service when expanded is set', () => {
          const parentNode: ClrTreeNode = fixture.componentInstance.parentTreeNode;

          expect(parentNode.nodeExpand.expanded).toBe(false);

          parentNode.expanded = true;

          fixture.detectChanges();

          expect(parentNode.nodeExpand.expanded).toBe(true);

          parentNode.expanded = false;

          fixture.detectChanges();

          expect(parentNode.nodeExpand.expanded).toBe(false);
        });

        it("toggles 'expanded' on the tree node when its expanded & collapsed", () => {
          const componentInstance = fixture.componentInstance.parentTreeNode;
          expect(componentInstance.expanded).toBe(false);

          componentInstance.toggleExpand();
          fixture.detectChanges();
          expect(componentInstance.expanded).toBe(true);

          componentInstance.toggleExpand();
          fixture.detectChanges();
          expect(componentInstance.expanded).toBe(false);

          const caretButton = compiled.querySelector('.clr-treenode-caret');
          caretButton.click();
          fixture.detectChanges();
          expect(componentInstance.expanded).toBe(true);

          caretButton.click();
          fixture.detectChanges();
          expect(componentInstance.expanded).toBe(false);
        });

        it('has selectable return false by default', () => {
          expect(fixture.componentInstance.parentTreeNode.selectable).toBe(false);
        });

        it('registers children when expanded', () => {
          const componentInstance = fixture.componentInstance.parentTreeNode;
          expect(componentInstance.expanded).toBe(false);

          componentInstance.toggleExpand();
          fixture.detectChanges();
          expect(componentInstance.expanded).toBe(true);

          expect(componentInstance.children.length).toBe(3);
        });

        it('unregisters children when collapsed', () => {
          const componentInstance = fixture.componentInstance.parentTreeNode;
          expect(componentInstance.expanded).toBe(false);

          componentInstance.toggleExpand();
          fixture.detectChanges();
          expect(componentInstance.expanded).toBe(true);

          expect(componentInstance.children.length).toBe(3);

          componentInstance.toggleExpand();
          fixture.detectChanges();
          expect(componentInstance.expanded).toBe(false);

          expect(componentInstance.children.length).toBe(0);
        });
      });
    });

    describe('Tree Node Alternative Syntax', () => {
      beforeEach(() => {
        fixture = TestBed.createComponent(TreeNodeAlternateSyntaxTestComponent);
        fixture.detectChanges();
        compiled = fixture.nativeElement;
      });

      afterEach(() => {
        fixture.destroy();
      });

      it('projects only root when root not expanded', () => {
        expect(compiled.textContent).toMatch(/A1/);
        expect(compiled.textContent).not.toMatch(/B1/);
        expect(compiled.textContent).not.toMatch(/B2/);
        expect(compiled.textContent).not.toMatch(/B3/);
      });

      it('projects the child node when the parent node is expanded', () => {
        const parentNode: ClrTreeNode = fixture.componentInstance.parentTreeNode;

        parentNode.expanded = true;

        fixture.detectChanges();

        expect(compiled.textContent).toMatch(/A1/);
        expect(compiled.textContent).toMatch(/B1/);
        expect(compiled.textContent).toMatch(/B2/);
        expect(compiled.textContent).toMatch(/B3/);
      });

      it('projects child nodes in .clr-treenode-children', () => {
        const parentNode: ClrTreeNode = fixture.componentInstance.parentTreeNode;
        const childrenContainer: HTMLElement = compiled.querySelector('.clr-treenode-children');

        expect(childrenContainer.children.length).toBe(0);

        parentNode.expanded = true;

        fixture.detectChanges();

        expect(childrenContainer.children.length).toBe(3);
        expect(childrenContainer.textContent).toMatch(/B1/);
        expect(childrenContainer.textContent).toMatch(/B2/);
        expect(childrenContainer.textContent).toMatch(/B3/);
      });
    });

    describe('Tree Node Default Expand Option', () => {
      beforeEach(() => {
        fixture = TestBed.createComponent(TreeNodeExpandedTestComponent);
        fixture.detectChanges();
        compiled = fixture.nativeElement;
      });

      afterEach(() => {
        fixture.destroy();
      });

      it('has the parent node expanded by default', () => {
        const parentNode: ClrTreeNode = fixture.componentInstance.parentTreeNode;

        expect(parentNode.expanded).toBe(true);
      });

      it('has the first level child nodes rendered but not the 2nd level', () => {
        expect(compiled.textContent).toMatch(/A1/);
        expect(compiled.textContent).toMatch(/B1/);
        expect(compiled.textContent).toMatch(/B2/);
        expect(compiled.textContent).toMatch(/B3/);
        expect(compiled.textContent).not.toMatch(/C1/);
      });
    });

    describe('Basic Tree Node Selection', () => {
      beforeEach(() => {
        fixture = TestBed.createComponent(BasicTreeNodeSelectionTestComponent);
        fixture.detectChanges();
        compiled = fixture.nativeElement;
      });

      afterEach(() => {
        fixture.destroy();
      });

      it('receives clrSelected Input from the user', () => {
        const parentNode: ClrTreeNode = fixture.componentInstance.parentTreeNode;

        expect(parentNode.selected).toBe(false);

        fixture.componentInstance.selected = true;
        fixture.detectChanges();

        expect(parentNode.selected).toBe(true);
      });

      it('enables selection when clrSelected Input is received on the root node', () => {
        const parentNode: ClrTreeNode = fixture.componentInstance.parentTreeNode;

        expect(parentNode.selectable).toBe(true);
      });

      it('displays a checkbox when selectable is true', () => {
        const checkbox: HTMLElement = compiled.querySelector('clr-checkbox');
        expect(checkbox).not.toBeNull();
      });

      it(
        'emits selectedChange when the node has its selection updated',
        fakeAsync(function() {
          expect(fixture.componentInstance.selectedTracker).toBe(0);
          expect(fixture.componentInstance.selectedChildTracker).toBe(0);

          fixture.componentInstance.parentTreeNode.selected = true;

          fixture.detectChanges();
          tick();

          expect(fixture.componentInstance.selectedTracker).toBe(1);

          // Still remains 0 because the parent hasn't been expanded yet
          expect(fixture.componentInstance.selectedChildTracker).toBe(0);

          fixture.componentInstance.parentTreeNode.expanded = true;

          fixture.detectChanges();
          tick();

          // Should increment again because the child is set to false
          expect(fixture.componentInstance.selectedTracker).toBe(2);

          // Should be 1 because parent has expanded
          expect(fixture.componentInstance.selectedChildTracker).toBe(1);
        })
      );
    });

    describe('Basic Tree Node Indeterminate Tracker', () => {
      beforeEach(() => {
        fixture = TestBed.createComponent(BasicTreeNodeIndeterminateNodeTest);
        fixture.detectChanges();
        compiled = fixture.nativeElement;
      });

      afterEach(() => {
        fixture.destroy();
      });

      it(
        "emits indeterminateChange when the node's indeterminate property is updated",
        fakeAsync(function() {
          expect(fixture.componentInstance.indeterminateTracker).toBe(0);

          fixture.componentInstance.parentTreeNode.indeterminate = true;

          fixture.detectChanges();
          tick();

          expect(fixture.componentInstance.indeterminateTracker).toBe(1);
        })
      );

      it(
        'emits indeterminateChange when only one of the child is selected',
        fakeAsync(function() {
          expect(fixture.componentInstance.indeterminateTracker).toBe(0);

          fixture.componentInstance.selectedChild = true;

          fixture.detectChanges();
          tick();

          expect(fixture.componentInstance.indeterminateTracker).toBe(1);
        })
      );
    });

    describe('Recursive Tree Selection', () => {
      let a1Rec: RecursiveSelectableStructureTestComponent;
      let a1Node: ClrTreeNode;

      let b1Rec: RecursiveSelectableStructureTestComponent;
      let b1Node: ClrTreeNode;

      let b2Rec: RecursiveSelectableStructureTestComponent;
      let b2Node: ClrTreeNode;

      let d1Rec: RecursiveSelectableStructureTestComponent;
      let d1Node: ClrTreeNode;

      let d2Rec: RecursiveSelectableStructureTestComponent;
      let d2Node: ClrTreeNode;

      beforeEach(() => {
        fixture = TestBed.createComponent(RecursiveSelectableTreeTest);
        fixture.detectChanges();
        compiled = fixture.nativeElement;

        a1Rec = fixture.componentInstance.recursiveStructure;
        a1Node = a1Rec.treeNode;

        expect(a1Rec.recursiveStructures.length).toBe(2);

        b1Rec = a1Rec.recursiveStructures.toArray()[0];
        b1Node = b1Rec.treeNode;

        b2Rec = a1Rec.recursiveStructures.toArray()[1];
        b2Node = b2Rec.treeNode;

        d1Rec = b2Rec.recursiveStructures.toArray()[0];
        d1Node = d1Rec.treeNode;

        d2Rec = b2Rec.recursiveStructures.toArray()[1];
        d2Node = d2Rec.treeNode;
      });

      afterEach(() => {
        fixture.destroy();
      });

      it('projects the expanded nodes in the recursive tree', () => {
        expect(compiled.textContent).toMatch(/A1/);
        expect(compiled.textContent).toMatch(/B1/);
        expect(compiled.textContent).toMatch(/B2/);
        expect(compiled.textContent).toMatch(/D1/);
        expect(compiled.textContent).toMatch(/D2/);
      });

      it('initializes the tree with the selection state set by the user', () => {
        // A1
        expect(a1Node.expanded).toBe(true);
        expect(a1Node.indeterminate).toBe(true);
        expect(a1Node.selected).toBe(false);

        // B1
        expect(b1Node.expanded).toBe(false);
        expect(b1Node.indeterminate).toBe(false);
        expect(b1Node.selected).toBe(true);

        // B2
        expect(b2Node.expanded).toBe(true);
        expect(b2Node.indeterminate).toBe(true);
        expect(b2Node.selected).toBe(false);
      });

      it('projects the child nodes when expanded', () => {
        b1Node.expanded = true;

        fixture.detectChanges();

        expect(compiled.textContent).toMatch(/C1/);
        expect(compiled.textContent).toMatch(/C2/);

        const c1Rec: RecursiveSelectableStructureTestComponent = b1Rec.recursiveStructures.toArray()[0];
        const c1Node: ClrTreeNode = c1Rec.treeNode;

        // C1
        expect(c1Node.indeterminate).toBe(false);
        expect(c1Node.selected).toBe(true);

        const c2Rec: RecursiveSelectableStructureTestComponent = b1Rec.recursiveStructures.toArray()[1];
        const c2Node: ClrTreeNode = c2Rec.treeNode;

        // C2
        expect(c2Node.indeterminate).toBe(false);
        expect(c2Node.selected).toBe(true);
      });

      it('propagates selection to all visible nodes when the parent is selected', () => {
        a1Node.selected = true;

        fixture.detectChanges();

        expect(b1Node.selected).toBe(true);
        expect(b2Node.selected).toBe(true);
        expect(d1Node.selected).toBe(true);
        expect(d2Node.selected).toBe(true);

        a1Node.selected = false;

        fixture.detectChanges();

        expect(b1Node.selected).toBe(false);
        expect(b2Node.selected).toBe(false);
        expect(d1Node.selected).toBe(false);
        expect(d2Node.selected).toBe(false);
      });
    });
  });
}

@Component({
  template: `
        <clr-tree-node #parentTreeNode>
            A1
            <ng-template clrIfExpanded>
                <clr-tree-node #childTreeNode>
                    B1
                </clr-tree-node>

                <clr-tree-node>
                    B2
                </clr-tree-node>

                <clr-tree-node>
                    B3
                </clr-tree-node>
            </ng-template>
        </clr-tree-node>
    `,
})
export class BasicTreeNodeTestComponent {
  @ViewChild('parentTreeNode') parentTreeNode: ClrTreeNode;
  @ViewChild('childTreeNode') childTreeNode: ClrTreeNode;
}

@Component({
  template: `
        <clr-tree-node #parentTreeNode>
            A1
            <clr-tree-node #childTreeNode *clrIfExpanded>
                B1
            </clr-tree-node>

            <clr-tree-node *clrIfExpanded>
                B2
            </clr-tree-node>

            <clr-tree-node *clrIfExpanded>
                B3
            </clr-tree-node>
        </clr-tree-node>
    `,
})
export class TreeNodeAlternateSyntaxTestComponent {
  @ViewChild('parentTreeNode') parentTreeNode: ClrTreeNode;
  @ViewChild('childTreeNode') childTreeNode: ClrTreeNode;
}

@Component({
  template: `
        <clr-tree-node #parentTreeNode>
            A1
            <ng-template [clrIfExpanded]="true">
                <clr-tree-node #childTreeNode>
                    B1
                    <clr-tree-node *clrIfExpanded>
                        C1
                    </clr-tree-node>
                </clr-tree-node>

                <clr-tree-node>
                    B2
                </clr-tree-node>

                <clr-tree-node>
                    B3
                </clr-tree-node>
            </ng-template>
        </clr-tree-node>
    `,
})
export class TreeNodeExpandedTestComponent {
  @ViewChild('parentTreeNode') parentTreeNode: ClrTreeNode;
  @ViewChild('childTreeNode') childTreeNode: ClrTreeNode;
}

@Component({
  template: `
        <clr-tree-node #parentTreeNode [(clrSelected)]="selected">
            A1
            <ng-template clrIfExpanded>
                <clr-tree-node #childTreeNode [(clrSelected)]="selectedChild">
                    B1
                </clr-tree-node>

                <clr-tree-node>
                    B2
                </clr-tree-node>

                <clr-tree-node>
                    B3
                </clr-tree-node>
            </ng-template>
        </clr-tree-node>
    `,
})
export class BasicTreeNodeSelectionTestComponent {
  @ViewChild('parentTreeNode') parentTreeNode: ClrTreeNode;
  @ViewChild('childTreeNode') childTreeNode: ClrTreeNode;

  selectedTracker: number = 0;
  selectedChildTracker: number = 0;

  private _selected: boolean = false;

  get selected(): boolean {
    return this._selected;
  }

  set selected(value: boolean) {
    this.selectedTracker = this.selectedTracker + 1;
    this._selected = value;
  }

  private _selectedChild: boolean = false;

  get selectedChild(): boolean {
    return this._selectedChild;
  }

  set selectedChild(value: boolean) {
    this.selectedChildTracker = this.selectedChildTracker + 1;
    this._selectedChild = value;
  }
}

@Component({
  template: `
        <clr-tree-node #parentTreeNode [(clrIndeterminate)]="indeterminate">
            A1
            <ng-template [clrIfExpanded]="true">
                <clr-tree-node #childTreeNode [(clrSelected)]="selectedChild">
                    B1
                </clr-tree-node>

                <clr-tree-node>
                    B2
                </clr-tree-node>

                <clr-tree-node>
                    B3
                </clr-tree-node>
            </ng-template>
        </clr-tree-node>
    `,
})
export class BasicTreeNodeIndeterminateNodeTest {
  @ViewChild('parentTreeNode') parentTreeNode: ClrTreeNode;
  @ViewChild('childTreeNode') childTreeNode: ClrTreeNode;

  indeterminateTracker: number = 0;

  private _indeterminate: boolean = false;

  get indeterminate(): boolean {
    return this._indeterminate;
  }

  set indeterminate(value: boolean) {
    this.indeterminateTracker = this.indeterminateTracker + 1;
    this._indeterminate = value;
  }

  selectedChild: boolean = false;
}

@Component({
  selector: 'recursive-selectable-structure-test',
  template: `
        <clr-tree-node [(clrSelected)]="item.selected" #treeNode>
            {{item.name}}
            <ng-template [clrIfExpanded]="item.expanded" *ngFor="let child of item.children">
                <recursive-selectable-structure-test #recursiveStructure
                                                     [item]="child"
                                                     ngProjectAs="clr-tree-node">
                </recursive-selectable-structure-test>
            </ng-template>
        </clr-tree-node>
    `,
})
export class RecursiveSelectableStructureTestComponent {
  @Input() item: any;
  @Input() selected: boolean = false;

  @ViewChild('treeNode') treeNode: ClrTreeNode;
  @ViewChildren('recursiveStructure') recursiveStructures: QueryList<RecursiveSelectableStructureTestComponent>;
}

@Component({
  template: `
        <recursive-selectable-structure-test #recursiveStructure
            [item]="selectableRoot"
            [selected]="selectableRoot.selected">
        </recursive-selectable-structure-test>
    `,
})
export class RecursiveSelectableTreeTest {
  @ViewChild('recursiveStructure') recursiveStructure: RecursiveSelectableStructureTestComponent;

  selectableRoot = {
    name: 'A1',
    selected: false,
    expanded: true,
    children: [
      { name: 'B1', selected: true, children: [{ name: 'C1' }, { name: 'C2' }] },
      { name: 'B2', selected: true, expanded: true, children: [{ name: 'D1' }, { name: 'D2', selected: false }] },
    ],
  };
}
