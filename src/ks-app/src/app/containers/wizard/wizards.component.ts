/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {Component, OnInit, ViewChild} from "@angular/core";
import {Wizard} from "clarity-angular";
import {WizardPage} from "clarity-angular";

@Component({templateUrl: "./wizards.component.html"})
export class KSWizards implements OnInit {
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
