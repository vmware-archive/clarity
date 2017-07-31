/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";

@Component({
    moduleId: module.id,
    selector: "clr-buttons-demo-button-loading",
    templateUrl: "./button-loading.html",
    styleUrls: ["./buttons.demo.css"]
})
export class ButtonLoadingDemo {
    private validateLoading: boolean = false;
    private submitLoading: boolean = false;

    validateDemo() {
        this.validateLoading = true;
        setTimeout(() => this.validateLoading = false, 1500);
    }

    submitDemo() {
        this.submitLoading = true;
        setTimeout(() => this.submitLoading = false, 1500);
    }
}
