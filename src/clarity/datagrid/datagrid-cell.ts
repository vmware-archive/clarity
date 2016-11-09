import {Component} from "@angular/core";

@Component({
    selector: "clr-dg-cell",
    template: `
        <ng-content></ng-content>
    `,
    host: {
        "[class.datagrid-cell]": "true",
    }
})
export class DatagridCell {
}