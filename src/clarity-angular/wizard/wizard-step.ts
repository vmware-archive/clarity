/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component, Input, ElementRef, forwardRef, Inject} from "@angular/core";
import {TabLink} from "../tabs/tab-link";
import {Wizard} from "./wizard";

@Component({
    selector: "clr-wizard-step",
    templateUrl: "wizard-step.html",
    host: {
        "[id]": "id",
        "[attr.aria-selected]": "active",
        "[attr.aria-controls]": "ariaControls",
        "role": "presentation",
        "[class.clr-nav-link]": "true",
        "[class.active]": "active",
        "[class.disabled]": "!active && !isCompleted",
        "[class.complete]": "isCompleted",
        "[class.skipped]": "isSkipped"
    }
})

export class WizardStep extends TabLink {
    // local variable to handle title of the main section
    title: string;

    // is the section completed
    isCompleted: boolean = false;

    // input variable, optional, to set if this tab is skipped
    @Input("clrWizardStepIsSkipped") isSkipped: boolean = false;

    // input variable, optional, to set the id of the component
    @Input("clrWizardStepId") id: string;

    constructor(@Inject(forwardRef(() => Wizard)) private wizard: Wizard, private elementRef: ElementRef) {
        super(wizard);
    }

    onClick(): boolean {
        // IE 10 fix to prevent click of disabled tab
        if (!this.active && this.isCompleted) {
            super.onClick();
        }

        return false;
    }

    ngOnInit(): void {
        // The nav text will be the title of the main section.
        this.title = this.elementRef.nativeElement.innerText.trim();
    }
}
