import { ElementRef, OnDestroy, OnInit } from "@angular/core";
import { ClrResponsiveNavigationService } from "../nav/clrResponsiveNavigationService";
import { ClrResponsiveNavControlMessage } from "../nav/clrResponsiveNavControlMessage";
export declare class MainContainer implements OnDestroy, OnInit {
    private elRef;
    private responsiveNavService;
    private _subscription;
    private _classList;
    constructor(elRef: ElementRef, responsiveNavService: ClrResponsiveNavigationService);
    ngOnInit(): void;
    processMessage(message: ClrResponsiveNavControlMessage): void;
    controlNav(controlCode: string, navClass: string): void;
    ngOnDestroy(): void;
}
