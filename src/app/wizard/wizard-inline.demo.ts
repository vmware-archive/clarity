/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component, ViewChild } from "@angular/core";
import { Wizard } from "../../clarity-angular/wizard/wizard";
import { CodeHighlight } from "../../clarity-angular/code/syntax-highlight/syntax-highlight";

@Component({
    moduleId: module.id,
    selector: "clr-wizard-inline",
    templateUrl: "./wizard-inline.demo.html"
})
export class WizardInlineDemo {
    @ViewChild("wizard") wizard: Wizard;
    @ViewChild(CodeHighlight) codeHighlight: CodeHighlight;

    public open: boolean = true;
}
