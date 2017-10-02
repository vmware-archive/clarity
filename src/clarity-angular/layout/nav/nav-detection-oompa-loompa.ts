/*
 * Copyright (c) 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {ChangeDetectorRef, Directive} from "@angular/core";
import {OompaLoompa} from "../../utils/chocolate/oompa-loompa";
import {ClrResponsiveNavigationService} from "./clrResponsiveNavigationService";
import {MainContainerWillyWonka} from "./main-container-willy-wonka";

@Directive({selector: "clr-header"})
export class NavDetectionOompaLoompa extends OompaLoompa {
    constructor(cdr: ChangeDetectorRef, willyWonka: MainContainerWillyWonka,
                private responsiveNavService: ClrResponsiveNavigationService) {
        super(cdr, willyWonka);
    }

    // NavDetectionOompaLoompa is the addition of the nav levels
    // Since we support 2 levels, the possibilities are 0, 1 or 3 (1 + 2)
    get flavor() {
        return this.responsiveNavService.responsiveNavList.reduce((sum, navLevel) => sum + navLevel, 0);
    }
}
