/*
 * Copyright (c) 2016 - 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component, Input} from "@angular/core";

@Component({
    selector: "clr-doc-wrapper",
    templateUrl: "./doc-wrapper.html",
    host: {
        "[class.dox-wrapper]": "true"
    }
})
export class DocWrapper {
    @Input() title: string = "";
    @Input() newLayout: boolean = false;
    @Input() ui: number = 0;
    @Input() ng: number = 0;
    @Input() description: string = "";

    get useNewLayout() {
        return !!this.newLayout;
    }

    get uiInProgress() {
        return 4 < this.ui && this.ui < 20;
    }

    get uiDone() {
        return this.ui > 19;
    }

    get ngInProgress() {
        return 4 < this.ng && this.ui < 20;
    }

    get ngDone() {
        return this.ng > 19;
    }
}
