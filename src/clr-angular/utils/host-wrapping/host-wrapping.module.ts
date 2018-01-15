
import {NgModule} from "@angular/core";
import {EmptyAnchor} from "./empty-anchor";

/**
 * Internal module, please do not export!
 */
@NgModule({
    declarations: [EmptyAnchor],
    exports: [EmptyAnchor],
    entryComponents: [EmptyAnchor]
})
export class ClrHostWrappingModule {}
