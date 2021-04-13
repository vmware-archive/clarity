/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component } from '@angular/core';
import { ClrTooltip } from './tooltip';
import { spec, TestContext } from '../../utils/testing/helpers.spec';
import { TooltipIdService } from './providers/tooltip-id.service';
import { ClrTooltipModule } from './tooltip.module';

@Component({
  template: `
    <clr-tooltip>
      <span class="tooltip-anchor">Hello</span>
      <clr-tooltip-content>
        <span>World</span>
      </clr-tooltip-content>
    </clr-tooltip>
  `,
})
class SimpleTest {}

interface TooltipContext extends TestContext<ClrTooltip, SimpleTest> {
  tooltipIdService: TooltipIdService;
}

export default function (): void {
  describe('Tooltip component', function () {
    spec(ClrTooltip, SimpleTest, ClrTooltipModule, { providers: [TooltipIdService] });
    beforeEach(function (this: TooltipContext) {
      this.tooltipIdService = this.getClarityProvider(TooltipIdService);
    });

    describe('TypeScript API', function (this: TooltipContext) {
      it('provides a TooltipIdService', function (this: TooltipContext) {
        expect(this.tooltipIdService).toBeDefined();
      });
    });

    describe('Simple', function (this: TooltipContext) {
      it('projects anchor content', function () {
        expect(this.clarityElement.textContent).toMatch(/Hello/);
      });
    });
  });
}
