/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Directive, Input, OnDestroy, Optional} from "@angular/core";

import {LoadingListener} from "./loading-listener";

@Directive({selector: "[clrLoading]"})
export class Loading implements OnDestroy {
    // We find the first parent that handles something loading
    constructor(@Optional() private listener: LoadingListener) {}

    private _loading = false;
    public get loading() {
        return this._loading;
    }
    @Input("clrLoading")
    public set loading(value: boolean) {
        value = !!value;
        if (value === this._loading) {
            return;
        }
        this._loading = value;
        if (this.listener) {
            if (value) {
                this.listener.startLoading();
            } else {
                this.listener.doneLoading();
            }
        }
    }

    ngOnDestroy() {
        this.loading = false;
    }
}