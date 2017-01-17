/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, ViewChild } from "@angular/core";
import { Wizard } from "../../clarity-angular/wizard/wizard";
import { CodeHighlight } from "../../clarity-angular/code/code-highlight";

// TODO: remove "NEW" when finishing up

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
        if ("clr-wizard-header-action-search" === actionId) {
            return;
        }
        this.userActive = !this.userActive;
    }
}
