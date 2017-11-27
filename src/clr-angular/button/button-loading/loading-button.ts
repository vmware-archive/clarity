/*
 * Copyright (c) 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */


import {Component} from "@angular/core";
import {LoadingListener} from "../../utils/loading/loading-listener";


@Component({
    selector: "button[clrLoading]",
    template: `
        <span class="spinner spinner-inline" *ngIf="loading"></span>
        <ng-content></ng-content>
    `,
    providers: [{provide: LoadingListener, useExisting: LoadingButton}]
})
export class LoadingButton implements LoadingListener {
    public loading: Boolean;

    startLoading(): void {
        this.loading = true;
    }

    doneLoading(): void {
        this.loading = false;
    }
}
