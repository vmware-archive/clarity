import { AfterContentInit, ElementRef } from "@angular/core";
import { ClrResponsiveNavigationService } from "./clrResponsiveNavigationService";
import { ClrResponsiveNavCodes } from "./clrResponsiveNavCodes";
export declare class NavLevelDirective implements AfterContentInit {
    private responsiveNavService;
    private elementRef;
    _level: number;
    constructor(responsiveNavService: ClrResponsiveNavigationService, elementRef: ElementRef);
    ngAfterContentInit(): void;
    addNavClass(level: number): void;
    readonly level: number;
    readonly responsiveNavCodes: ClrResponsiveNavCodes;
    open(): void;
    close(): void;
    onMouseClick(target: any): void;
    ngOnDestroy(): void;
}
