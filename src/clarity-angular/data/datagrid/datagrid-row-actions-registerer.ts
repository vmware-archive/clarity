import {Directive, Optional} from "@angular/core";
import {RowActionService} from "./providers/row-action-service";

/*
 * Tracks if there is an action set on the row. Depending on if clrIfOpen is set we need to check
 * either the presence of clr-dg-row-actions or *clrIfOpen.
 */
@Directive({
    selector: "clr-dg-row-actions, [clrIfOpen]"
})
export class DatagridRowActionsRegisterer {
    constructor(@Optional() private rowActionService: RowActionService) {
        if (this.rowActionService) {
            this.rowActionService.register();
        }
    }

    ngOnDestroy() {
        if (this.rowActionService) {
            this.rowActionService.unregister();
        }
    }
}
