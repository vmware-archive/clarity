/*
 * Copyright (c) 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";

const MAIN_TS_EXAMPLE = `

export class ButtonLoadingDemo {
  validateLoading: boolean = false;
  submitLoading: boolean = false;

  validateDemo() {
    this.validateLoading = true;
    //Validating Logic
    this.validateLoading = false;
  }

  submitDemo() {
    this.submitLoading = true;
    //Submit Logic
    this.submitLoading = false;
  }
}
    
`;

const MAIN_HTML_EXAMPLE = `
<button [clrLoading]="validateLoading" class="btn btn-info-outline" (click)="validateDemo()">Validate</button>
<button [clrLoading]="submitLoading" type="submit" class="btn btn-success-outline" (click)="submitDemo()">Submit</button>
`;


@Component({
    selector: "clr-buttons-demo-button-loading",
    templateUrl: "./button-loading.html",
    styleUrls: ["./buttons.demo.scss"]
})
export class ButtonLoadingDemo {
    mainTSExample = MAIN_TS_EXAMPLE;
    mainHTMLExample = MAIN_HTML_EXAMPLE;

    validateLoading: boolean = false;
    submitLoading: boolean = false;

    validateDemo() {
        this.validateLoading = true;
        setTimeout(() => this.validateLoading = false, 1500);
    }

    submitDemo() {
        this.submitLoading = true;
        setTimeout(() => this.submitLoading = false, 1500);
    }
}
