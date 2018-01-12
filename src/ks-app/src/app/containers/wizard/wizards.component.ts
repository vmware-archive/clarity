/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {Component, OnInit, ViewChild} from "@angular/core";
import {
    ClrWizardButton,
    ClrWizardCustomTags,
    ClrWizardHeaderAction,
    ClrWizardPageButtons,
    ClrWizardPageHeaderActions,
    ClrWizardPageNavTitle,
    ClrWizardPageTitle,
    ClrWizardStepnav,
    Wizard,
    WizardButton,
    WizardCustomTags,
    WizardHeaderAction,
    WizardPageButtonsDirective,
    WizardPageHeaderActionsDirective,
    WizardPageNavTitleDirective,
    WizardPageTitleDirective,
    WizardStepnav,
    WizardStepnavItem
} from "@clr/angular";

@Component({templateUrl: "./wizards.component.html"})
export class KSWizards implements OnInit {
    /**
     * @description
     * These exist so that the exported API from Clarity is tested when ks-app is compiled with --prod.
     */
    // private aWizard: Wizard; //used here
    // private aWizardPage: WizardPage; //used here
    private aWizardStepnav: WizardStepnav;
    private aClrWizardStepnav: ClrWizardStepnav;
    private aWizardStepnavItem: WizardStepnavItem;
    private aClrWizardStepnavItem: WizardStepnavItem;
    private aWizardButton: WizardButton;
    private aClrWizardButton: ClrWizardButton;
    private aWizardHeaderAction: WizardHeaderAction;
    private aClrWizardHeaderAction: ClrWizardHeaderAction;
    private aWizardCustomTags: WizardCustomTags;
    private aClrWizardCustomTags: ClrWizardCustomTags;
    private aWizardPageTitleDirective: WizardPageTitleDirective;
    private aClrWizardPageTitle: ClrWizardPageTitle;
    private aWizardPageNavTitleDirective: WizardPageNavTitleDirective;
    private aClrWizardPageNavTitle: ClrWizardPageNavTitle;
    private aWizardPageButtonsDirective: WizardPageButtonsDirective;
    private aClrWizardPageButtons: ClrWizardPageButtons;
    private aWizardPageHeaderActionsDirective: WizardPageHeaderActionsDirective;
    private aClrWizardPageHeaderActions: ClrWizardPageHeaderActions;
    // Form Wizard Demo
    @ViewChild("formWizard") formWizard: Wizard;
    formOpen: boolean = false;
    formModel = {name: "", favorite: "", number: ""};

    // Ghosts demo
    @ViewChild("ghostWizard") ghostWizard: Wizard;
    ghostModel: any;
    ghostOpen: boolean = false;
    typesOfPages = ["All", "Odd", "First and even", "First and last"];

    get isAll(): boolean {
        return this.ghostModel.typesOfPages === "" || this.ghostModel.typesOfPages === "All" ||
            this.ghostModel.typesOfPages === null;
    }

    get showEvenPages(): boolean {
        return this.isAll || this.ghostModel.typesOfPages === "First and even";
    }

    get showPageThree(): boolean {
        return this.isAll || this.ghostModel.typesOfPages === "Odd";
    }

    get showPageFive(): boolean {
        return this.isAll || this.ghostModel.typesOfPages === "Odd" ||
            this.ghostModel.typesOfPages === "First and last";
    }

    // inlineWizard demo
    @ViewChild("inlineWizard") inlineWizard: Wizard;
    inlineOpen: boolean = false;

    ngOnInit() {
        // For ghosts demo
        this.ghostModel = {typesOfPages: ""};
    }
}
