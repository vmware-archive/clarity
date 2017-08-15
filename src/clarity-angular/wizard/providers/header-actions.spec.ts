/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {TestContext} from "../../utils/testing/helpers.spec";
import {HeaderActionsTestComponent} from "../test-components/header-action-wizard.mock";
import {Wizard} from "../wizard";

import {HeaderActionService} from "./header-actions";
import {WizardNavigationService} from "./wizard-navigation";

export default function(): void {
    describe("Header Actions Service", function() {
        let context: TestContext<Wizard, HeaderActionsTestComponent>;
        let headerActionService: HeaderActionService;
        let wizardNavigationService: WizardNavigationService;

        beforeEach(function() {
            context = this.create(Wizard, HeaderActionsTestComponent);
            headerActionService = context.getClarityProvider(HeaderActionService);
            wizardNavigationService = context.getClarityProvider(WizardNavigationService);
            context.detectChanges();
        });

        it(".wizardHasHeaderActions indicates if wizard has header actions", function() {
            expect(headerActionService.wizardHasHeaderActions).toBe(true);
        });

        it(".currentPageHasHeaderActions indicates if the current page has header actions", function() {
            const lastPage = wizardNavigationService.pageCollection.lastPage;

            expect(headerActionService.currentPageHasHeaderActions).toBe(true);
            wizardNavigationService.currentPage = lastPage;
            expect(headerActionService.currentPageHasHeaderActions).toBe(false);
        });

        it(".showWizardHeaderActions indicates if other pages have the header actions", function() {
            const lastPage = wizardNavigationService.pageCollection.lastPage;
            expect(headerActionService.showWizardHeaderActions).toBe(false);

            wizardNavigationService.currentPage = lastPage;
            expect(headerActionService.showWizardHeaderActions).toBe(true);
        });
    });
}