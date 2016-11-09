import {
    Directive,
    ElementRef,
    OnDestroy,
    OnInit
} from "@angular/core";
import {Subscription} from "rxjs";

import { ClrResponsiveNavigationService } from "../nav/clrResponsiveNavigationService";
import { ClrResponsiveNavCodes } from "../nav/clrResponsiveNavCodes";
import { ClrResponsiveNavControlMessage } from "../nav/clrResponsiveNavControlMessage";

@Directive({
    selector: "clr-main-container",
    host: {
        "[class.main-container]": "true"
    }
})
export class MainContainer implements OnDestroy, OnInit {
    private _subscription: Subscription;
    private _classList: DOMTokenList;

    constructor(
        private elRef: ElementRef,
        private responsiveNavService: ClrResponsiveNavigationService
    ) {}

    ngOnInit() {
        this._classList = this.elRef.nativeElement.classList;
        this._subscription = this.responsiveNavService.controlNavSubject.subscribe({
            next: (message: ClrResponsiveNavControlMessage) => {
                this.processMessage(message);
            }
        });
    }

    processMessage(message: ClrResponsiveNavControlMessage): void {
        let navClass: string = ClrResponsiveNavCodes.NAV_CLASS_HAMBURGER_MENU;
        if (message.controlCode === ClrResponsiveNavCodes.NAV_CLOSE_ALL) {
            this._classList.remove(ClrResponsiveNavCodes.NAV_CLASS_HAMBURGER_MENU);
            this._classList.remove(ClrResponsiveNavCodes.NAV_CLASS_OVERFLOW_MENU);
        } else if (message.navLevel === ClrResponsiveNavCodes.NAV_LEVEL_1) {
            this.controlNav(message.controlCode, navClass);
        } else if (message.navLevel === ClrResponsiveNavCodes.NAV_LEVEL_2) {
            navClass = ClrResponsiveNavCodes.NAV_CLASS_OVERFLOW_MENU;
            this.controlNav(message.controlCode, navClass);
        }
    }

    controlNav(controlCode: string, navClass: string): void {
        if (controlCode === ClrResponsiveNavCodes.NAV_OPEN) {
            this._classList.add(navClass);
        } else if (controlCode === ClrResponsiveNavCodes.NAV_CLOSE) {
            this._classList.remove(navClass);
        } else if (controlCode === ClrResponsiveNavCodes.NAV_TOGGLE) {
            this._classList.toggle(navClass);
        }
    }

    ngOnDestroy() {
        this._subscription.unsubscribe();
    }
}
