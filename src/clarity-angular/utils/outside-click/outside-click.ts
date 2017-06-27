import {Directive, Output, EventEmitter, HostListener, ElementRef, Input} from "@angular/core";

@Directive({
    selector: "[clrOutsideClick]"
})
export class OutsideClick {
    constructor(private el: ElementRef) {}

    @Input("clrStrict") strict = false;

    @Output("clrOutsideClick") outsideClick = new EventEmitter<any>(false);

    @HostListener("document:click", ["$event"])
    documentClick(event: MouseEvent) {
        let target = event.target; //Get the element in the DOM on which the mouse was clicked
        let host = this.el.nativeElement; //Get the current actionMenu native HTML element

        if (target === host) {
            return;
        }
        if (!this.strict && host.contains(target)) {
            return;
        }
        this.outsideClick.emit(event);
    }
}
