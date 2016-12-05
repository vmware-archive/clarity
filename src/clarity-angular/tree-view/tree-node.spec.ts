/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {ComponentFixture, TestBed, fakeAsync, tick} from "@angular/core/testing";
import {Component, ViewChild} from "@angular/core";
import {ClarityModule} from "../clarity.module";
import {TreeNode} from "./tree-node";
import {TreeView} from "./tree-view";

export default function(): void {
    "use strict";
    describe("Tree Node", () => {
        let fixture: ComponentFixture<any>;
        let compiled: any;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [
                    ClarityModule.forRoot()
                ],
                declarations: [
                    BasicTreeNodeTestComponent,
                    TreeNodeExpandTestComponent,
                    TreeNodeExpandableTestComponent,
                    DynamicTreeNodeTestComponent,
                    BasicTreeNodeSelectionTestComponent,
                    ParentChildTreeNodeSelectionTestComponent,
                    TreeNodeSelectTestComponent
                ]
            });
        });

        afterEach(() => {
            fixture.destroy();
        });

        describe("Tree Node Basics", () => {
            beforeEach(() => {
                fixture = TestBed.createComponent(BasicTreeNodeTestComponent);
                fixture.detectChanges();
                compiled = fixture.nativeElement;
            });

            it("projects content", () => {
                expect(compiled.textContent).toMatch(/A1/);
                expect(compiled.textContent).toMatch(/B1/);
                expect(compiled.textContent).toMatch(/B2/);
                expect(compiled.textContent).toMatch(/B3/);
            });

            it("projects child tree nodes under .clr-treenode-children", () => {
                let treeNodeChildren = compiled.querySelector(".clr-treenode-children");
                expect(treeNodeChildren.textContent).toMatch(/\s*B1\s*B2\s*B3/);
            });

            it("projects content under .clr-treenode-content", () => {
                let treeNodeContent: any[] = compiled.querySelectorAll(".clr-treenode-content");
                expect(treeNodeContent[0].textContent).toMatch(/A1/);
                expect(treeNodeContent[1].textContent).toMatch(/B1/);
                expect(treeNodeContent[2].textContent).toMatch(/B2/);
                expect(treeNodeContent[3].textContent).toMatch(/B3/);
            });

            it("shows caret under .clr-treenode-caret only for tree nodes having child tree nodes", () => {
                let caret: any[] = compiled.querySelectorAll(".clr-treenode-caret");
                expect(caret.length).toBe(1);
            });

            it("has hasChildren set to true for the parent tree node", () => {
                expect(fixture.componentInstance.parentTreeNode.hasChildren).toBe(true);
            });

            it("has hasChildren set to false for the child tree node", () => {
                expect(fixture.componentInstance.childTreeNode.hasChildren).toBe(false);
            });

            it("has expandable set to false all tree nodes by default", () => {
                expect(fixture.componentInstance.parentTreeNode.expandable).toBeFalsy(false);
                expect(fixture.componentInstance.childTreeNode.expandable).toBeFalsy(false);
            });

            it("has selectable set to false all tree nodes by default", () => {
                expect(fixture.componentInstance.parentTreeNode.selectable).toBe(false);
                expect(fixture.componentInstance.childTreeNode.selectable).toBe(false);
            });

            it("has expanded set to false on tree nodes by default", () => {
                expect(fixture.componentInstance.parentTreeNode.expanded).toBe(false);
            });

            it("toggles 'expanded' on the tree node when its expanded & collapsed", () => {
                let componentInstance = fixture.componentInstance.parentTreeNode;
                expect(componentInstance.expanded).toBe(false);

                componentInstance.toggleExpand();
                fixture.detectChanges();
                expect(componentInstance.expanded).toBe(true);

                componentInstance.toggleExpand();
                fixture.detectChanges();
                expect(componentInstance.expanded).toBe(false);

                let caretButton = compiled.querySelector(".clr-treenode-caret");
                caretButton.click();
                fixture.detectChanges();
                expect(componentInstance.expanded).toBe(true);

                caretButton.click();
                fixture.detectChanges();
                expect(componentInstance.expanded).toBe(false);
            });

            it("has caretDirection set to 'right' on tree nodes by default", () => {
                expect(fixture.componentInstance.parentTreeNode.caretDirection).toBe("right");
            });

            it("toggles caretDirection on the tree node when its expanded & collapsed", () => {
                let componentInstance = fixture.componentInstance.parentTreeNode;
                expect(componentInstance.caretDirection).toBe("right");
                componentInstance.toggleExpand();
                fixture.detectChanges();
                expect(componentInstance.caretDirection).toBe("down");
            });
        });

        describe("Tree Node Default Expand Option", () => {
            beforeEach(() => {
                fixture = TestBed.createComponent(TreeNodeExpandTestComponent);
                fixture.detectChanges();
                compiled = fixture.nativeElement;
            });

            it("sets the tree node 'expanded' property to the input provided by the user", () => {

               let componentInstance = fixture.componentInstance;
               let parentNode = componentInstance.parentTreeNode;

               expect(componentInstance.expanded).toBe(false);
               expect(parentNode.expanded).toBe(false);

               componentInstance.expanded = true;
               fixture.detectChanges();

               expect(parentNode.expanded).toBe(true);

               componentInstance.expanded = false;
               fixture.detectChanges();

               expect(parentNode.expanded).toBe(false);
            });

            it("emits the 'expanded' event back to the user when the caret button is toggled", fakeAsync(function() {
                let caretButton = compiled.querySelector(".clr-treenode-caret");
                let componentInstance = fixture.componentInstance;
                let parentNode = componentInstance.parentTreeNode;

                expect(componentInstance.outputExpanded).toBeFalsy();
                expect(parentNode.expanded).toBe(false);

                parentNode.toggleExpand();

                tick();
                fixture.detectChanges();

                expect(parentNode.expanded).toBe(true);
                expect(componentInstance.outputExpanded).toBe(true);

                parentNode.toggleExpand();

                tick();
                fixture.detectChanges();

                expect(parentNode.expanded).toBe(false);
                expect(componentInstance.outputExpanded).toBe(false);

                caretButton.click();

                tick();
                fixture.detectChanges();

                expect(parentNode.expanded).toBe(true);
                expect(componentInstance.outputExpanded).toBe(true);

                caretButton.click();

                tick();
                fixture.detectChanges();

                expect(parentNode.expanded).toBe(false);
                expect(componentInstance.outputExpanded).toBe(false);
            }));
        });

        describe("Tree Node Expandable Option for Lazy Loading", () => {
            beforeEach(() => {
                fixture = TestBed.createComponent(TreeNodeExpandableTestComponent);
                fixture.detectChanges();
                compiled = fixture.nativeElement;
            });

            it("does not show the caret when expandable is set to false", () => {
                let componentInstance = fixture.componentInstance;

                expect(componentInstance.expandable).toBe(false);
                expect(compiled.querySelector(".clr-treenode-caret")).toBeNull();
            });

            it("shows the caret when expandable is set to true", () => {
                let componentInstance = fixture.componentInstance;
                componentInstance.expandable = true;
                fixture.detectChanges();

                expect(compiled.querySelector(".clr-treenode-caret")).not.toBeNull();
            });

            it("shows the spinner when expandable & loading is set to true", () => {
                expect(compiled.querySelector(".clr-treenode-spinner")).toBeNull();

                let componentInstance = fixture.componentInstance;
                componentInstance.expandable = true;
                componentInstance.loading = true;
                fixture.detectChanges();

                expect(compiled.querySelector(".clr-treenode-spinner")).not.toBeNull();

                componentInstance.expandable = true;
                componentInstance.loading = false;
                fixture.detectChanges();

                expect(compiled.querySelector(".clr-treenode-spinner")).toBeNull();

                componentInstance.expandable = false;
                componentInstance.loading = true;
                fixture.detectChanges();

                expect(compiled.querySelector(".clr-treenode-spinner")).toBeNull();
            });

            it("hides the caret when spinner is visible and vice-versa", () => {
                let componentInstance = fixture.componentInstance;
                componentInstance.expandable = true;
                componentInstance.loading = true;
                fixture.detectChanges();

                expect(compiled.querySelector(".clr-treenode-caret")).toBeNull();
                expect(compiled.querySelector(".clr-treenode-spinner")).not.toBeNull();

                componentInstance.loading = false;
                fixture.detectChanges();

                expect(compiled.querySelector(".clr-treenode-caret")).not.toBeNull();
                expect(compiled.querySelector(".clr-treenode-spinner")).toBeNull();
            });
        });

        describe("Building Trees Dynamically", () => {
            beforeEach(() => {
                fixture = TestBed.createComponent(DynamicTreeNodeTestComponent);
                fixture.detectChanges();
                compiled = fixture.nativeElement;
            });

            it("projects content", () => {
                expect(compiled.textContent).toMatch(/A1/);
                expect(compiled.textContent).toMatch(/A2/);
                expect(compiled.textContent).toMatch(/A3/);
                expect(compiled.textContent).toMatch(/A4/);
            });
        });

        describe("Basic Tree Node Selection", () => {
            beforeEach(() => {
                fixture = TestBed.createComponent(BasicTreeNodeSelectionTestComponent);
                compiled = fixture.nativeElement;
                fixture.detectChanges();
            });

            it("enables the selection based on the clrTreeSelected input", () => {
                expect(fixture.componentInstance.a1Node.selectable).toBe(true);
                expect(fixture.componentInstance.a2Node.selectable).toBe(true);

                let checkboxes = compiled.querySelectorAll("clr-checkbox");

                expect(checkboxes.length).toBe(2);
            });

            it("accepts user input for tree node selection", () => {
                let componentInstance = fixture.componentInstance;

                expect(componentInstance.a1Node.selected).toBe(true);
                expect(componentInstance.a2Node.selected).toBe(false);

                componentInstance.a1NodeSelection = false;
                componentInstance.a2NodeSelection = true;

                fixture.detectChanges();

                expect(componentInstance.a1Node.selected).toBe(false);
                expect(componentInstance.a2Node.selected).toBe(true);
            });

            it("emits a change event after tree node selection", (done) => {
                //Had to use done() instead of tick() here because
                //tick() was giving a timers still in queue issue
                //For more info visit: https://github.com/angular/angular/issues/10127

                let componentInstance = fixture.componentInstance;

                fixture.detectChanges();

                expect(componentInstance.a1Node.selected).toBe(true);
                expect(componentInstance.a2Node.selected).toBe(false);

                componentInstance.a1NodeSelection = false;
                componentInstance.a2NodeSelection = true;

                fixture.detectChanges();

                fixture.whenStable().then(() => {
                    expect(componentInstance.a1NodeSelectionChangeValue).toBe(false);
                    expect(componentInstance.a2NodeSelectionChangeValue).toBe(true);
                    done();
                });

            });
        });

        describe("Parent Child Selection Test", () => {
            beforeEach(() => {
                fixture = TestBed.createComponent(ParentChildTreeNodeSelectionTestComponent);
                compiled = fixture.nativeElement;
                fixture.detectChanges();
            });

            it("initializes all tree nodes to selected false", () => {
                let componentInstance = fixture.componentInstance;

                expect(componentInstance.a1Node.selected).toBe(false);
                expect(componentInstance.b1Node.selected).toBe(false);
                expect(componentInstance.c1Node.selected).toBe(false);
                expect(componentInstance.c2Node.selected).toBe(false);
                expect(componentInstance.c3Node.selected).toBe(false);
                expect(componentInstance.b2Node.selected).toBe(false);
            });

            it("initializes using the user input for model", () => {
                let componentInstance = fixture.componentInstance;

                expect(componentInstance.a1Node.model).toBe("A1");
            });

            it("checks all children when the parent is checked", () => {
                let componentInstance = fixture.componentInstance;

                componentInstance.b1Node.selected = true;

                fixture.detectChanges();

                expect(componentInstance.c1Node.selected).toBe(true);
                expect(componentInstance.c2Node.selected).toBe(true);
                expect(componentInstance.c3Node.selected).toBe(true);
            });

            it("checks all grand children when the parent is checked", () => {
                let componentInstance = fixture.componentInstance;

                componentInstance.a1Node.selected = true;

                fixture.detectChanges();

                expect(componentInstance.b1Node.selected).toBe(true);
                expect(componentInstance.b2Node.selected).toBe(true);
                expect(componentInstance.c1Node.selected).toBe(true);
                expect(componentInstance.c2Node.selected).toBe(true);
                expect(componentInstance.c3Node.selected).toBe(true);
            });

            it("sets the parent as indeterminate when the one child is selected while others are not", () => {
                let componentInstance = fixture.componentInstance;

                componentInstance.c1Node.selected = true;

                fixture.detectChanges();

                expect(componentInstance.b1Node.selected).toBe(false);
                expect(componentInstance.b1Node.indeterminate).toBe(true);
                expect(componentInstance.a1Node.selected).toBe(false);
                expect(componentInstance.a1Node.indeterminate).toBe(true);
            });

            it("selects the parent when all the children are selected", () => {
                let componentInstance = fixture.componentInstance;

                componentInstance.c1Node.selected = true;
                componentInstance.c2Node.selected = true;
                componentInstance.c3Node.selected = true;

                fixture.detectChanges();

                expect(componentInstance.b1Node.selected).toBe(true);
                expect(componentInstance.b1Node.indeterminate).toBe(false);
                expect(componentInstance.a1Node.indeterminate).toBe(true);
                expect(componentInstance.a1Node.selected).toBe(false);

                componentInstance.b2Node.selected = true;

                fixture.detectChanges();

                expect(componentInstance.a1Node.indeterminate).toBe(false);
                expect(componentInstance.a1Node.selected).toBe(true);
            });

            it("emits event when node is selected", fakeAsync(function() {
                let componentInstance = fixture.componentInstance;

                expect(componentInstance.a1NodeChangeValue).toBeFalsy();
                expect(componentInstance.b1NodeChangeValue).toBeFalsy();
                expect(componentInstance.c1NodeChangeValue).toBeFalsy();

                componentInstance.c1Node.selected = true;

                tick();
                fixture.detectChanges();

                expect(componentInstance.c1NodeChangeValue).toBe(true);
                expect(componentInstance.a1NodeChangeValue).toBeFalsy();
                expect(componentInstance.b1NodeChangeValue).toBeFalsy();

                componentInstance.c2Node.selected = true;
                componentInstance.c3Node.selected = true;

                tick();
                fixture.detectChanges();

                expect(componentInstance.a1NodeChangeValue).toBeFalsy();
                expect(componentInstance.b1NodeChangeValue).toBe(true);

                componentInstance.b2Node.selected = true;

                tick();
                fixture.detectChanges();
                expect(componentInstance.a1NodeChangeValue).toBe(true);
            }));
        });

        describe("Tree Node Selection Two Way Data Binding Test", () => {
            beforeEach(() => {
                fixture = TestBed.createComponent(TreeNodeSelectTestComponent);
                compiled = fixture.nativeElement;
                fixture.detectChanges();
            });

            it("Selecting child selects the parent", (done) => {
                let componentInstance = fixture.componentInstance;

                componentInstance.child = true;

                fixture.detectChanges();

                fixture.whenStable().then(() => {
                    expect(componentInstance.parent).toBe(true);
                    done();
                });
            });

            it("Selecting parent selects the child", (done) => {
                let componentInstance = fixture.componentInstance;

                componentInstance.parent = true;

                fixture.detectChanges();

                fixture.whenStable().then(() => {
                    expect(componentInstance.child).toBe(true);
                    done();
                });
            });
        });
    });
};

@Component({
    template: `
        <clr-tree #treeView 
            [clrTreeSelected]="treeSelection">
            <clr-tree-node #a1Node [clrTreeModel]="'A1'" (clrTreeNodeSelectedChange)="a1NodeChanged($event)">
                A1
                <clr-tree-node #b1Node (clrTreeNodeSelectedChange)="b1NodeChanged($event)">
                    B1
                    <clr-tree-node #c1Node (clrTreeNodeSelectedChange)="c1NodeChanged($event)">
                        C1
                    </clr-tree-node>
                    <clr-tree-node #c2Node>
                        C2
                    </clr-tree-node>
                    <clr-tree-node #c3Node>
                        C3
                    </clr-tree-node>
                </clr-tree-node>
                <clr-tree-node #b2Node>
                    B2
                </clr-tree-node>
            </clr-tree-node>
        </clr-tree>
    `
})
export class ParentChildTreeNodeSelectionTestComponent {
    treeSelection: any[] = [];

    @ViewChild("treeView") tree: TreeView;
    @ViewChild("a1Node") a1Node: TreeNode;
    @ViewChild("b1Node") b1Node: TreeNode;
    @ViewChild("c1Node") c1Node: TreeNode;
    @ViewChild("c2Node") c2Node: TreeNode;
    @ViewChild("c3Node") c3Node: TreeNode;
    @ViewChild("b2Node") b2Node: TreeNode;

    a1NodeChangeValue: boolean;
    b1NodeChangeValue: boolean;
    c1NodeChangeValue: boolean;

    a1NodeChanged(val: boolean): void {
        this.a1NodeChangeValue = val;
    }

    b1NodeChanged(val: boolean): void {
        this.b1NodeChangeValue = val;
    }

    c1NodeChanged(val: boolean): void {
        this.c1NodeChangeValue = val;
    }
}

@Component({
    template: `
        <clr-tree #treeView [clrTreeSelected]="treeSelection">
            <clr-tree-node #a1Node
                [clrTreeModel]="'A1'"
                [clrTreeNodeSelected]="a1NodeSelection"
                (clrTreeNodeSelectedChange)="a1NodeSelectionChange($event)">A1</clr-tree-node>
            <clr-tree-node #a2Node
                [clrTreeModel]="'A2'"
                [clrTreeNodeSelected]="a2NodeSelection"
                (clrTreeNodeSelectedChange)="a2NodeSelectionChange($event)">A2</clr-tree-node>    
        </clr-tree>
    `
})
export class BasicTreeNodeSelectionTestComponent {
    treeSelection: any[] = [];

    @ViewChild("treeView") tree: TreeView;
    @ViewChild("a1Node") a1Node: TreeNode;
    @ViewChild("a2Node") a2Node: TreeNode;

    a1NodeSelection: boolean = true;
    a2NodeSelection: boolean = false;

    a1NodeSelectionChangeValue: boolean;
    a2NodeSelectionChangeValue: boolean;

    a1NodeSelectionChange(value: boolean): void {
        this.a1NodeSelectionChangeValue = value;
    }

    a2NodeSelectionChange(value: boolean): void {
        this.a2NodeSelectionChangeValue = value;
    }
}

@Component({
    template: `
        <clr-tree-node #parentTreeNode>
            A1
            <clr-tree-node #childTreeNode>
                B1
            </clr-tree-node>

            <clr-tree-node>
                B2
            </clr-tree-node>

            <clr-tree-node>
                B3
            </clr-tree-node>
        </clr-tree-node>
    `
})
export class BasicTreeNodeTestComponent {
    @ViewChild("parentTreeNode") parentTreeNode: TreeNode;
    @ViewChild("childTreeNode") childTreeNode: TreeNode;
}

@Component({
    template: `
        <clr-tree-node *ngFor="let node of nodes">
            {{node.name}}
        </clr-tree-node>
    `
})
export class DynamicTreeNodeTestComponent {
    nodes: any = [
        {
            name: "A1"
        },
        {
            name: "A2"
        },
        {
            name: "A3"
        },
        {
            name: "A4"
        }
    ];
}

@Component({
    template: `
        <clr-tree-node #parentTreeNode 
            [clrTreeNodeExpanded]="expanded" 
            (clrTreeNodeExpandedChange)="onExpandedChange($event)">
            A1
            <clr-tree-node>
                B1
            </clr-tree-node>
        </clr-tree-node>
    `
})
export class TreeNodeExpandTestComponent {
    @ViewChild("parentTreeNode") parentTreeNode: TreeNode;

    expanded: boolean = false;

    outputExpanded: boolean;

    onExpandedChange(value: boolean): void {
        this.outputExpanded = value;
    }
}

@Component({
    template: `
        <clr-tree-node #parentTreeNode 
            [clrTreeNodeExpandable]="expandable"
            [clrTreeNodeLoading]="loading">
            A1
        </clr-tree-node>
    `
})
export class TreeNodeExpandableTestComponent {
    @ViewChild("parentTreeNode") parentTreeNode: TreeNode;

    expandable: boolean = false;
    loading: boolean = false;
}

@Component({
    template: `
        <clr-tree [clrTreeSelected]="treeSelection">
            <clr-tree-node [(clrTreeNodeSelected)]="parent">
                A1
                <clr-tree-node [(clrTreeNodeSelected)]="child">
                    B1
                </clr-tree-node>
            </clr-tree-node>
        </clr-tree>
    `
})
export class TreeNodeSelectTestComponent {
    treeSelection: any[] = [];

    parent: boolean = false;
    child: boolean = false;
}