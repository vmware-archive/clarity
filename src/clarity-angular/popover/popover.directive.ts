import { Directive, Input, TemplateRef, ViewContainerRef } from "@angular/core";
import {PopoverOptions, Point, Popover} from "./popover";

let openCount: number = 0;
let waiting: Array<() => void> = []; // pending create functions

@Directive({ selector: "[clrPopover]"})
export class PopoverDirective {
    private _popoverInstance: Popover;

    @Input("clrPopoverAnchor") anchorElem: any;
    @Input("clrPopoverAnchorPoint") anchorPoint: Point;
    @Input("clrPopoverPopoverPoint") popoverPoint: Point;
    @Input("clrPopoverOptions") popoverOptions: PopoverOptions = {};

    constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) {
    }

    // TODO: current implementation only allows a single popover to be open at any given time
    // will need to revisit this when the requirements change for future components such as nested menu
    @Input() set clrPopover(open: boolean) {
        if (open) {
            if (openCount === 0) {
                this.createPopover();

            } else {
                waiting.push(() => {
                    this.createPopover();
                });
            }
        } else {
            this.viewContainer.clear();
            this.destroyPopover();

            if (waiting.length > 0) {
                let createPopoverFn = waiting.shift();
                createPopoverFn();
            }
        }
    }

    createPopover() {
        let embeddedViewRef = this.viewContainer.createEmbeddedView(this.templateRef);
        this._popoverInstance = new Popover(embeddedViewRef.rootNodes[0]);
        this._popoverInstance.anchor(
            this.anchorElem, this.anchorPoint, this.popoverPoint, this.popoverOptions);
        openCount++;
    }

    destroyPopover() {
        if (this._popoverInstance) {
            this._popoverInstance.destroy();
            delete this._popoverInstance;
            openCount--;
        }
    }

    ngOnDestroy() {
        this.destroyPopover();
    }
}