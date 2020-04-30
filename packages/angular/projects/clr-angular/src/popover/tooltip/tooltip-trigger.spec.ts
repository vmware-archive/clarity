/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component } from '@angular/core';

import { ClrPopoverToggleService } from '../../utils/popover/providers/popover-toggle.service';

import { ClrTooltipTrigger } from './tooltip-trigger';

import { spec, TestContext } from '../../utils/testing/helpers.spec';
import { ClrTooltipModule } from './tooltip.module';
import { UNIQUE_ID_PROVIDER } from '../../utils/id-generator/id-generator.service';
import { TooltipIdService } from './providers/tooltip-id.service';

@Component({
  template: `
    <span clrTooltipTrigger [attr.aria-label]="ariaLabel">
      Hello world
    </span>
  `,
})
class SimpleTest {
  ariaLabel = 'Uniq aria label';
}

interface TooltipContext extends TestContext<ClrTooltipTrigger, SimpleTest> {
  tooltipIdService: TooltipIdService;
  toggleService: ClrPopoverToggleService;
}

export default function (): void {
  describe('TooltipTrigger component', function (this: TooltipContext) {
    spec(ClrTooltipTrigger, SimpleTest, ClrTooltipModule, {
      providers: [ClrPopoverToggleService, UNIQUE_ID_PROVIDER, TooltipIdService],
    });

    beforeEach(function () {
      this.toggleService = this.getClarityProvider(ClrPopoverToggleService);
      this.tooltipIdService = this.getClarityProvider(TooltipIdService);
      this.detectChanges();
    });

    describe('TypeScript API', function () {
      it('notifies the IfOpen service', function () {
        const toggleService = this.getClarityProvider(ClrPopoverToggleService);
        this.clarityDirective.showTooltip();
        expect(toggleService.open).toBe(true);
        this.clarityDirective.hideTooltip();
        expect(toggleService.open).toBe(false);
      });

      it('responds to the TooltipIdService', function () {
        let testId;
        this.tooltipIdService.id.subscribe(idChange => {
          testId = idChange;
        });
        expect(this.clarityDirective.ariaDescribedBy).toEqual(testId);

        this.tooltipIdService.updateId('clr-id-99');
        this.detectChanges();
        expect(this.clarityDirective.ariaDescribedBy).toEqual(testId);
      });
    });

    describe('View basics', function () {
      it('has the role of button', function () {
        expect(this.clarityElement.getAttribute('role')).toEqual('button');
      });

      it('has a tab index of 0', function () {
        expect(this.clarityElement.getAttribute('tabindex')).toEqual('0');
      });
    });
  });
}
