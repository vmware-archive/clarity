

import {AbstractTreeSelection} from "./abstract-tree-selection";
import {TreeSelectionService} from "./providers/treeSelection.service";
export default function(): void {
    describe("Abstract Tree Selection", () => {
        let root: TestTreeSelection;

        beforeEach(() => {
            root = new TestTreeSelection(null, new TreeSelectionService());
            root.buildTestTreeSelection();
        });

        it("Test the get children method", () => {
            expect(root.testChildren.length).toBe(3);
        });

        it("Root indeterminate is set to true when a child is selected", () => {
            expect(root.indeterminate).toBe(false);
            root.testChildren[0].selected = true;
            expect(root.indeterminate).toBe(true);
        });

        it("All children are selected when root is selected", () => {
            expect(root.indeterminate).toBe(false);
            expect(root.selected).toBe(false);
            root.selected = true;
            expect(root.indeterminate).toBe(false);
            for (let testChild of root.testChildren) {
                expect(testChild.selected).toBe(true);
            }

            let testChild = <TestTreeSelection>root.testChildren[0];
            for (let testGrandChildren of testChild.testChildren) {
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
            let testChild = <TestTreeSelection>root.testChildren[0];
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
            let testChild = <TestTreeSelection>root.testChildren[0];

            let testGrandChild = <TestTreeSelection>testChild.testChildren[0];
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
    });
}

class TestTreeSelection extends AbstractTreeSelection {

    testChildren: AbstractTreeSelection[] = [];

    constructor(parent: TestTreeSelection, public treeSelectionService: TreeSelectionService) {
        super(parent, treeSelectionService);
    }

    buildTestTreeSelection(): void {
        this.treeSelectionService.selectable = true;
        this.model = "root";
        let a1Node: TestTreeSelection = new TestTreeSelection(this, this.treeSelectionService);
        a1Node.model = "a1";
        let b1Node: TestTreeSelection = new TestTreeSelection(this, this.treeSelectionService);
        b1Node.model = "b1";
        let c1Node: TestTreeSelection = new TestTreeSelection(this, this.treeSelectionService);
        b1Node.model = "c1";

        let aa1Node: TestTreeSelection = new TestTreeSelection(a1Node, this.treeSelectionService);
        aa1Node.model = "aa1";

        let aa2Node: TestTreeSelection = new TestTreeSelection(a1Node, this.treeSelectionService);
        aa2Node.model = "aa2";

        let aa3Node: TestTreeSelection = new TestTreeSelection(a1Node, this.treeSelectionService);
        aa3Node.model = "aa3";

        a1Node.testChildren = [aa1Node, aa2Node, aa3Node];

        this.testChildren = [a1Node, b1Node, c1Node];

        //Just going insane with a 4 level tree
        let aaa1Node: TestTreeSelection = new TestTreeSelection(aa1Node, this.treeSelectionService);
        aaa1Node.model = "aaa1";

        aa1Node.testChildren = [aaa1Node];
    }

    get children(): AbstractTreeSelection[] {
        return this.testChildren;
    }

    selectedChanged(): void {

    }

}