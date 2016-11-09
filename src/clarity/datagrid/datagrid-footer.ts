import {Component} from "@angular/core";

@Component({
    selector: "clr-dg-footer",
    template: `
        <ng-content></ng-content>
    `,
    host: {
        "[class.datagrid-foot]": "true",
    }
})
export class DatagridFooter {
}