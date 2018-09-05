/*
 * Copyright (c) 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";
import { ClrLoadingState } from '@clr/angular';

const MAIN_TS_EXAMPLE = `
import { ClrLoadingState } from '@clr/angular';

export class ButtonLoadingDemo {
  validateBtnState: ClrLoadingState = ClrLoadingState.DEFAULT;
  submitBtnState: ClrLoadingState = ClrLoadingState.DEFAULT;

  validateDemo() {
    this.validateBtnState = ClrLoadingState.LOADING;
    //Validating Logic
    this.validateBtnState = ClrLoadingState.SUCCESS;
  }

  submitDemo() {
    this.submitBtnState = ClrLoadingState.LOADING;
    //Submit Logic
    this.submitBtnState = ClrLoadingState.DEFAULT;
  }
}
    
`;

const MAIN_HTML_EXAMPLE = `
<button [clrLoading]="validateBtnState" class="btn btn-info-outline" (click)="validateDemo()">Validate</button>
<button [clrLoading]="submitBtnState" type="submit" class="btn btn-success-outline" (click)="submitDemo()">Submit</button>
`;


@Component({
    selector: "clr-buttons-demo-button-loading",
    templateUrl: "./button-loading.html",
    styleUrls: ["./buttons.demo.scss"]
})
export class ButtonLoadingDemo {
    mainTSExample = MAIN_TS_EXAMPLE;
    mainHTMLExample = MAIN_HTML_EXAMPLE;

    validateBtnState: ClrLoadingState = ClrLoadingState.DEFAULT;
    submitBtnState: ClrLoadingState = ClrLoadingState.DEFAULT;

    validateDemo() {
        this.validateBtnState = ClrLoadingState.LOADING;
        setTimeout(() => this.validateBtnState = ClrLoadingState.SUCCESS, 1500);
    }

    submitDemo() {
        this.submitBtnState = ClrLoadingState.LOADING;
        setTimeout(() => this.submitBtnState = ClrLoadingState.DEFAULT, 1500);
    }
}
