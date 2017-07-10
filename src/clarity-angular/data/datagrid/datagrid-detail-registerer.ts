import {Directive, Optional} from "@angular/core";
import {ExpandableRowsCount} from "./providers/global-expandable-rows";

/*
 * I don't think this deserves to be in IfExpanded itself,
 * so I'm adding a second directive on the same selector for now just for the datagrid
 */
@Directive({
    selector: "[clrIfExpanded]"
})
export class DatagridDetailRegisterer {
    constructor(@Optional() private expandableRowsCount: ExpandableRowsCount) {
        if (this.expandableRowsCount) {
            this.expandableRowsCount.register();
        }
    }

    ngOnDestroy() {
        if (this.expandableRowsCount) {
            this.expandableRowsCount.unregister();
        }
    }
}
