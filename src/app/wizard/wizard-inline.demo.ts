/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {Component, ViewChild} from "@angular/core";

import {ClrCodeHighlight} from "../../clr-angular/code/syntax-highlight/syntax-highlight";
import {ClrWizard} from "../../clr-angular/wizard/wizard";

@Component({selector: "clr-wizard-inline", templateUrl: "./wizard-inline.demo.html"})
export class WizardInlineDemo {
    @ViewChild("wizard") wizard: ClrWizard;
    @ViewChild(ClrCodeHighlight) codeHighlight: ClrCodeHighlight;

    public open: boolean = true;
}
