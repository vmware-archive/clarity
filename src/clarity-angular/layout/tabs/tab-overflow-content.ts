import {AbstractPopover} from "../../popover/common/abstract-popover";
import {Component, ElementRef, Injector, SkipSelf} from "@angular/core";
import {Point} from "../../popover/common/popover";

@Component({
    selector: "clr-tab-overflow-content",
    template: `
        <ng-content></ng-content>
    `,
    host: {
        "[class.dropdown-menu]" : "true",
    }
})
export class TabOverflowContent extends AbstractPopover {

    constructor(injector: Injector, @SkipSelf() parentHost: ElementRef) {
        super(injector, parentHost);
        this.anchorPoint = Point.BOTTOM_RIGHT;
        this.popoverPoint = Point.RIGHT_TOP;
        this.closeOnOutsideClick = true;
    }
}
