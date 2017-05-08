import { Directive, HostListener, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector: "[clrInputTrap]"
})
export class InputTrapDirective implements OnInit {

    static TAB_KEY = 9;

    // tslint:disable-next-line:max-line-length
    // reference: https://github.com/jkup/focusable
    static FOCUSABLE_INPUTS = "a[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled])";

    firstInput: HTMLElement;
    lastInput: HTMLElement;

    constructor(public elementRef: ElementRef) { }

    @HostListener("document:keydown", ["$event"])
    onkeydown(event: any) {
        const isShiftKey = !!event.shiftKey;

        if (event.keyCode === InputTrapDirective.TAB_KEY) {
            if (isShiftKey) {
                if (document.activeElement === this.firstInput) {
                    event.preventDefault();
                    this.lastInput.focus();
                }
            }  else if (document.activeElement === this.lastInput) {
                event.preventDefault();
                this.firstInput.focus();
          }
        }
    }

    ngOnInit() {
        const element = this.elementRef.nativeElement;

        const focusableInputs = Array.from(
            element.querySelectorAll(InputTrapDirective.FOCUSABLE_INPUTS)
        ) as HTMLElement[];

        this.firstInput = focusableInputs[0];
        this.lastInput = focusableInputs[focusableInputs.length - 1];
    }

}
