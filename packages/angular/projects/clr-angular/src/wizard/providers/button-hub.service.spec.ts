/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { TestContext } from '../../utils/testing/helpers.spec';
import { BasicWizardTestComponent } from '../test-components/basic-wizard.mock';
import { ClrWizard } from '../wizard';

import { ButtonHubService } from './button-hub.service';
import { PageCollectionService } from './page-collection.service';
import { WizardNavigationService } from './wizard-navigation.service';

export default function(): void {
  describe('Button Hub Service', function() {
    let context: TestContext<ClrWizard, BasicWizardTestComponent>;
    let buttonHubService: ButtonHubService;
    let wizardNavigationService: WizardNavigationService;
    let pageCollectionService: PageCollectionService;

    beforeEach(function() {
      context = this.create(ClrWizard, BasicWizardTestComponent);
      buttonHubService = context.getClarityProvider(ButtonHubService);
      wizardNavigationService = context.getClarityProvider(WizardNavigationService);
      pageCollectionService = context.getClarityProvider(PageCollectionService);
      context.detectChanges();
    });

    it("'next' calls wizardNavigationService.checkAndCommitCurrentPage with next", function() {
      spyOn(wizardNavigationService, 'checkAndCommitCurrentPage');
      buttonHubService.buttonClicked('next');
      expect(wizardNavigationService.checkAndCommitCurrentPage).toHaveBeenCalledWith('next');
    });

    it("'previous' calls wizardNavigationService.previous", function() {
      wizardNavigationService.currentPage = pageCollectionService.lastPage;
      spyOn(wizardNavigationService, 'previous');
      buttonHubService.buttonClicked('previous');
      expect(wizardNavigationService.previous).toHaveBeenCalled();
    });

    it("'danger' calls wizardNavigationService.next or wizardNavigationService.finish", function() {
      spyOn(wizardNavigationService, 'checkAndCommitCurrentPage');
      buttonHubService.buttonClicked('danger');
      expect(wizardNavigationService.checkAndCommitCurrentPage).toHaveBeenCalledWith('danger');
    });

    it("'cancel' calls wizardNavigationService.cancel", function() {
      spyOn(wizardNavigationService, 'cancel');
      buttonHubService.buttonClicked('cancel');
      expect(wizardNavigationService.cancel).toHaveBeenCalled();
    });

    it("'finish' calls wizard.close, emit wizardFinished", function() {
      const wizard = context.clarityDirective;
      const finalPage = wizard.pageCollection.lastPage;

      spyOn(wizard.wizardFinished, 'emit');
      spyOn(wizard, 'close');

      // set up for finish
      wizard.navService.currentPage = finalPage;
      finalPage.nextStepDisabled = false;
      context.detectChanges();

      buttonHubService.buttonClicked('finish');

      expect(wizard.wizardFinished.emit).toHaveBeenCalled();
      expect(wizard.close).toHaveBeenCalled();
    });

    it('.custom calls wizardNavigationService.currentPage.customButtonClicked', function() {
      spyOn(wizardNavigationService.currentPage.customButtonClicked, 'emit');
      buttonHubService.buttonClicked('custom');
      expect(wizardNavigationService.currentPage.customButtonClicked.emit).toHaveBeenCalled();
    });
  });
}
