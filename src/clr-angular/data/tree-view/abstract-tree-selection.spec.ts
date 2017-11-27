/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {AbstractTreeSelection} from "./abstract-tree-selection";
export default function(): void {
    describe("Abstract Tree Selection", () => {
        let root: TestTreeSelection;

        beforeEach(() => {
            root = new TestTreeSelection(null);
            root.buildTestTreeSelection();
        });

        it("Test the get children method", () => {
            expect(root.testChildren.length).toBe(3);
        });

        it("Root indeterminate is set to true when not all children are selected", () => {
            expect(root.indeterminate).toBe(false);
            root.testChildren[0].selected = true;
            expect(root.indeterminate).toBe(true);
        });

        it("All children are selected when root is selected", () => {
            expect(root.indeterminate).toBe(false);
            expect(root.selected).toBe(false);
            root.selected = true;
            expect(root.indeterminate).toBe(false);
            for (const testChild of root.testChildren) {
                expect(testChild.selected).toBe(true);
            }

            const rootTestChild = <TestTreeSelection>root.testChildren[0];
            for (const testGrandChildren of rootTestChild.testChildren) {
                expect(testGrandChildren.selected).toBe(true);
            }
        });

        it("Root is selected when all children are selected", () => {
            expect(root.indeterminate).toBe(false);
            expect(root.selected).toBe(false);
            root.testChildren[0].selected = true;
            root.testChildren[1].selected = true;
            root.testChildren[2].selected = true;
            expect(root.indeterminate).toBe(false);
            expect(root.selected).toBe(true);
        });

        it("Root is indeterminate when not all grandchildren are selected", () => {
            const testChild = <TestTreeSelection>root.testChildren[0];
            expect(testChild.testChildren[0].selected).toBe(false);
            testChild.testChildren[0].selected = true;

            expect(testChild.testChildren[1].selected).toBe(false);
            expect(testChild.testChildren[1].indeterminate).toBe(false);
            expect(testChild.testChildren[2].selected).toBe(false);
            expect(testChild.testChildren[2].indeterminate).toBe(false);

            expect(testChild.selected).toBe(false);
            expect(testChild.indeterminate).toBe(true);

            expect(root.selected).toBe(false);
            expect(root.indeterminate).toBe(true);
        });

        it("Root is indeterminate when not all grandchildren are selected - Part 2", () => {
            const testChild = <TestTreeSelection>root.testChildren[0];

            const testGrandChild = <TestTreeSelection>testChild.testChildren[0];
            expect(testGrandChild.testChildren[0].selected).toBe(false);

            testGrandChild.testChildren[0].selected = true;

            expect(testChild.testChildren[0].selected).toBe(true);
            expect(testChild.testChildren[0].indeterminate).toBe(false);
            expect(testChild.testChildren[1].selected).toBe(false);
            expect(testChild.testChildren[1].indeterminate).toBe(false);
            expect(testChild.testChildren[2].selected).toBe(false);
            expect(testChild.testChildren[2].indeterminate).toBe(false);

            expect(testChild.selected).toBe(false);
            expect(testChild.indeterminate).toBe(true);

            expect(root.selected).toBe(false);
            expect(root.indeterminate).toBe(true);
        });

        it("Selection Changed is called when the selection is updated", () => {
            const testChild = <TestTreeSelection>root.testChildren[0];
            const testGrandChild = <TestTreeSelection>testChild.testChildren[0];

            expect(root.selectedChangedTracker).toBe(0);
            expect(testChild.selectedChangedTracker).toBe(0);
            expect(testGrandChild.selectedChangedTracker).toBe(0);

            testChild.selected = true;

            expect(testChild.selectedChangedTracker).toBe(1);
            expect(testGrandChild.selected).toBe(true);
            expect(testGrandChild.selectedChangedTracker).toBe(1);
            expect(root.indeterminate).toBe(true);
            expect(root.selected).toBe(false);
            expect(root.selectedChangedTracker).toBe(0);
        });

        it("Indeterminate Change is called when not all child nodes are selected at once", () => {
            const testChild = <TestTreeSelection>root.testChildren[0];

            expect(root.indeterminateChangedTracker).toBe(0);

            testChild.selected = true;

            expect(root.indeterminateChangedTracker).toBe(1);
        });
    });
}

class TestTreeSelection extends AbstractTreeSelection {
    testChildren: AbstractTreeSelection[] = [];

    constructor(parent: TestTreeSelection) {
        super(parent);
    }

    buildTestTreeSelection(): void {
        const a1Node: TestTreeSelection = new TestTreeSelection(this);
        const b1Node: TestTreeSelection = new TestTreeSelection(this);
        const c1Node: TestTreeSelection = new TestTreeSelection(this);

        const aa1Node: TestTreeSelection = new TestTreeSelection(a1Node);

        const aa2Node: TestTreeSelection = new TestTreeSelection(a1Node);

        const aa3Node: TestTreeSelection = new TestTreeSelection(a1Node);

        a1Node.testChildren = [aa1Node, aa2Node, aa3Node];

        this.testChildren = [a1Node, b1Node, c1Node];

        // Just going insane with a 4 level tree
        const aaa1Node: TestTreeSelection = new TestTreeSelection(aa1Node);

        aa1Node.testChildren = [aaa1Node];
    }

    get children(): AbstractTreeSelection[] {
        return this.testChildren;
    }

    selectedChangedTracker: number = 0;

    selectedChanged(): void {
        this.selectedChangedTracker++;
    }

    indeterminateChangedTracker: number = 0;

    indeterminateChanged(): void {
        this.indeterminateChangedTracker++;
    }
}
