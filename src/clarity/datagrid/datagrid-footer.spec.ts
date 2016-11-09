import {Component} from "@angular/core";
import {TestContext} from "./helpers.spec";
import {DatagridFooter} from "./datagrid-footer";

export default function(): void {
    describe("DatagridFooter component", function() {
        let context: TestContext<DatagridFooter, SimpleTest>;

        beforeEach(function() {
            context = this.create(DatagridFooter, SimpleTest);
        });

        it("projects content", function() {
            expect(context.clarityElement.textContent.trim()).toMatch("Hello world");
        });

        it("adds the .datagrid-cell class to the host", function() {
            expect(context.clarityElement.classList.contains("datagrid-foot")).toBeTruthy();
        });
    });
}

@Component({
    template: `<clr-dg-footer>Hello world</clr-dg-footer>`
})
class SimpleTest {
}