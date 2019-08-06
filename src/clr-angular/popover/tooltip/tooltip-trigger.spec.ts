/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component } from '@angular/core';

import { IfOpenService } from '../../utils/conditional/if-open.service';

import { ClrTooltipTrigger } from './tooltip-trigger';

import { spec, TestContext } from '../../utils/testing/helpers.spec';
import { ClrTooltipModule } from './tooltip.module';
import { UNIQUE_ID_PROVIDER } from '../../utils/id-generator/id-generator.service';

export default function(): void {
  describe('TooltipTrigger component', function() {
    spec(ClrTooltipTrigger, SimpleTest, ClrTooltipModule, { providers: [IfOpenService, UNIQUE_ID_PROVIDER] });

    beforeEach(function(this: TestContext<ClrTooltipTrigger, SimpleTest>) {
      this.detectChanges();
    });

    describe('TypeScript API', function() {
      it('notifies the IfOpen service', function() {
        const ifOpenService = this.getClarityProvider(IfOpenService);
        this.clarityDirective.showTooltip();
        expect(ifOpenService.open).toBe(true);
        this.clarityDirective.hideTooltip();
        expect(ifOpenService.open).toBe(false);
      });
    });

    describe('Template API', function() {
      it('receives an input for clrTooltipLabel', function() {
        expect(this.hostComponent.label).toEqual(this.clarityDirective.tooltipLabel);
      });
    });

    describe('View basics', function() {
      beforeEach(function() {
        this.detectChanges();
      });

      it('has the role of button', function() {
        expect(this.clarityElement.getAttribute('role')).toEqual('button');
      });

      it('has a tab index of 0', function() {
        expect(this.clarityElement.getAttribute('tabindex')).toEqual('0');
      });
    });
  });
}

@Component({
  template: `
        <span clrTooltipTrigger [clrTooltipLabel]="label">
            Hello world
        </span>
    `,
})
class SimpleTest {
  label = 'Uniq aria label';
}
