/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Input, Component } from "@angular/core";
import { WizardPage } from "./wizard-page";
import { WizardNavigationService } from "./providers/wizard-navigation";
import { PageCollectionService } from "./providers/page-collection";

@Component({
    selector: "[clr-wizard-stepnav-item]",
    template: `
        <button type="button" class="btn btn-link clr-wizard-stepnav-link" (click)="click()">
            <ng-template [ngTemplateOutlet]="page.navTitle"></ng-template>
        </button>
    `,
    host: {
        "[id]": "id",
        "[attr.aria-selected]": "isCurrent",
        "[attr.aria-controls]": "id",
        "role": "presentation",
        "[class.clr-nav-link]": "true",
        "[class.nav-item]": "true",
        "[class.active]": "isCurrent",
        "[class.disabled]": "isDisabled",
        "[class.no-click]": "!canNavigate",
        "[class.complete]": "isComplete"
    }
})

export class WizardStepnavItem {
    @Input("page") public page: WizardPage;

    constructor(public navService: WizardNavigationService, public pageCollection: PageCollectionService) {
    }

    private pageGuard(): void {
        if (!this.page) {
            throw new Error("Wizard stepnav item is not associated with a wizard page.");
        }
    }

    public get id(): string {
        this.pageGuard();
        return this.pageCollection.getStepItemIdForPage(this.page);
    }

    public get isDisabled(): boolean {
        this.pageGuard();
        return this.page.disabled || this.navService.wizardStopNavigation || this.navService.wizardDisableStepnav;
    }

    public get isCurrent(): boolean {
        this.pageGuard();
        return this.page.current;
    }

    public get isComplete(): boolean {
        this.pageGuard();
        return this.page.completed;
    }

    public get canNavigate(): boolean {
        this.pageGuard();
        return this.pageCollection.previousPageIsCompleted(this.page);
    }

    click(): void {
        this.pageGuard();

        // if we click on our own stepnav or a disabled stepnav, we don't want to do anything
        if (this.isDisabled || this.isCurrent) {
            return;
        }

        this.navService.goTo(this.page);
    }
}
