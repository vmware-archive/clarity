import {Component} from "@angular/core";

@Component({
    selector: "clr-tooltip-content",
    template: `
        <ng-content></ng-content>
    `
})
export class TooltipContent {}