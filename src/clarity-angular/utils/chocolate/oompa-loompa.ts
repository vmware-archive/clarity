/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {AfterContentChecked, ChangeDetectorRef} from "@angular/core";
import {WillyWonka} from "./willy-wonka";

export abstract class OompaLoompa implements AfterContentChecked {
    // FIXME: Request Injector once we move to Angular 4.2+, it'll allow easier refactors
    constructor(cdr: ChangeDetectorRef, willyWonka: WillyWonka) {
        willyWonka.chocolate.subscribe(() => {
            if (this.latestFlavor !== this.flavor) {
                cdr.detectChanges();
            }
        });
    }

    private latestFlavor: any;

    abstract get flavor(): any;

    ngAfterContentChecked() {
        this.latestFlavor = this.flavor;
    }
}
