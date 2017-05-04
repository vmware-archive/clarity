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
    selector: "clr-wizard-header-actions",
    templateUrl: "./wizard-header-actions.demo.html"
})
export class WizardHeaderActionsDemo {
    @ViewChild("wizard") wizard: Wizard;
    @ViewChild(CodeHighlight) codeHighlight: CodeHighlight;

    userActive: boolean = true;

    public headerActionClicked(actionId: string): void {
        let newWindow: any;
        if ("clr-wizard-header-action-search" === actionId) {
            newWindow = window.open("https://www.google.com/#q=what+is+the+meaning+of+life&*",
                "_blank");
        } else if ("clr-wizard-header-action-info" === actionId) {
            newWindow = window.open("http://vmware.github.com/clarity",
                "_blank");
        } else {
            this.userActive = !this.userActive;
        }
    }
}
