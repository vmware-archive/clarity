/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {ComponentFixture, TestBed, fakeAsync, tick} from "@angular/core/testing";
import {Component, ViewChild} from "@angular/core";
import {ClarityModule} from "../clarity.module";
import {TreeNode} from "./tree-node";

@Component({
    template: `
        <clr-tree [clrTreeSelected]="selection">
            <clr-tree-node #a1Node [clrTreeModel]="'A1'">
                A1
                <clr-tree-node #b1Node [clrTreeModel]="'B1'">
                    B1
                    <clr-tree-node #c1Node
                        [clrTreeModel]="'C1'">C1</clr-tree-node>
                    <clr-tree-node #c2Node
                        [clrTreeModel]="'C2'">C2</clr-tree-node>
                    <clr-tree-node #c3Node
                        [clrTreeModel]="'C3'">C3</clr-tree-node>
                </clr-tree-node>
                <clr-tree-node #b2Node [clrTreeModel]="'B2'">
                    B2
                </clr-tree-node>
            </clr-tree-node>
        </clr-tree>
    `
})
export class PrePopulateTreeTestComponent {
    selection: any[] = [
        {
            model: "A1",
            selected: false,
            children: [
                {
                    model: "B1",
                    selected: false,
                    children: [
                        {
                            model: "C2",
                            selected: true
                        },
                        {
                            model: "C3",
                            selected: true
                        }
                    ]
                },
                {
                    model: "B2",
                    selected: true
                }
            ]
        }
    ];

    @ViewChild("a1Node") a1Node: TreeNode;
    @ViewChild("b1Node") b1Node: TreeNode;
    @ViewChild("b2Node") b2Node: TreeNode;
    @ViewChild("c1Node") c1Node: TreeNode;
    @ViewChild("c2Node") c2Node: TreeNode;
    @ViewChild("c3Node") c3Node: TreeNode;
}

@Component({
    template: `
        <clr-tree [(clrTreeSelected)]="selection">
            <clr-tree-node #a1Node [clrTreeModel]="'A1'">
                A1
                <clr-tree-node #b1Node [clrTreeModel]="'B1'">
                    B1
                    <clr-tree-node #c1Node
                        [clrTreeModel]="'C1'">C1</clr-tree-node>
                    <clr-tree-node #c2Node
                        [clrTreeModel]="'C2'">C2</clr-tree-node>
                    <clr-tree-node #c3Node
                        [clrTreeModel]="'C3'">C3</clr-tree-node>
                </clr-tree-node>
                <clr-tree-node #b2Node [clrTreeModel]="'B2'">
                    B2
                </clr-tree-node>
            </clr-tree-node>
            <clr-tree-node #a2Node [clrTreeModel]="'A2'">A2</clr-tree-node>
        </clr-tree>
    `
})
export class TreeSelectionTestComponent {
    selection: any[] = [];

    @ViewChild("a1Node") a1Node: TreeNode;
    @ViewChild("a2Node") a2Node: TreeNode;
    @ViewChild("b1Node") b1Node: TreeNode;
    @ViewChild("b2Node") b2Node: TreeNode;
    @ViewChild("c1Node") c1Node: TreeNode;
    @ViewChild("c2Node") c2Node: TreeNode;
    @ViewChild("c3Node") c3Node: TreeNode;
}



export default function(): void {
    "use strict";
    describe("Tree View", () => {
        let fixture: ComponentFixture<any>;
        let compiled: any;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [
                    ClarityModule.forRoot()
                ],
                declarations: [
                    PrePopulateTreeTestComponent,
                    TreeSelectionTestComponent
                ]
            });
        });

        afterEach(() => {
            fixture.destroy();
        });

        describe("Pre-populating Trees", () => {
            beforeEach(() => {
                fixture = TestBed.createComponent(PrePopulateTreeTestComponent);
                compiled = fixture.nativeElement;
                fixture.detectChanges();
            });

            it("pre populates tree based on the tree selection input", () => {
                let componentInstance = fixture.componentInstance;

                expect(componentInstance.a1Node.selected).toBe(false);
                expect(componentInstance.b1Node.selected).toBe(false);
                expect(componentInstance.b2Node.selected).toBe(true);
                expect(componentInstance.c1Node.selected).toBe(false);
                expect(componentInstance.c2Node.selected).toBe(true);
                expect(componentInstance.c3Node.selected).toBe(true);

            });
        });

        describe("Tree Selection", () => {
            beforeEach(() => {
                fixture = TestBed.createComponent(TreeSelectionTestComponent);
                compiled = fixture.nativeElement;
                fixture.detectChanges();
            });

            it("does not emit anything when first initialized", () => {
                let componentInstance = fixture.componentInstance;

                fixture.detectChanges();

                expect(componentInstance.selection.length).toBe(0);
            });

            it("emits an array with the selected nodes and only their roots when selection is updated",
                fakeAsync(function() {
                    let componentInstance = fixture.componentInstance;

                    componentInstance.b1Node.selected = true;

                    tick();
                    fixture.detectChanges();

                    expect(componentInstance.selection.length).toBe(1);
            }));

            it("emits an array with right selection", fakeAsync(function() {
                let componentInstance = fixture.componentInstance;

                componentInstance.c1Node.selected = true;

                tick();
                fixture.detectChanges();

                let selection = componentInstance.selection;

                //Check if it has all the required properties
                expect(selection[0].hasOwnProperty("model")).toBe(true);
                expect(selection[0].hasOwnProperty("selected")).toBe(true);
                expect(selection[0].hasOwnProperty("children")).toBe(true);

                //Check the correct nodes have been selected

                //A1
                expect(selection[0].model).toBe("A1");
                expect(selection[0].selected).toBe(false);
                expect(selection[0].children.length).toBe(1);

                //B1
                expect(selection[0].children[0].model).toBe("B1");
                expect(selection[0].children[0].selected).toBe(false);
                expect(selection[0].children[0].children.length).toBe(1);

                //C1
                expect(selection[0].children[0].children[0].model).toBe("C1");
                expect(selection[0].children[0].children[0].selected).toBe(true);
                expect(selection[0].children[0].children[0].children.length).toBe(0);
            }));
        });
    });
}