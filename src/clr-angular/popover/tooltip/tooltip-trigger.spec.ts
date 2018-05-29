/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component } from '@angular/core';

import { IfOpenService } from '../../utils/conditional/if-open.service';
import { TestContext } from '../../utils/testing/helpers.spec';

import { ClrTooltipTrigger } from './tooltip-trigger';

export default function(): void {
  // FIXME: this doesn't even run yet, we don't have an all.spec for tooltips.
  describe('TooltipContent component', function() {
    let context: TestContext<ClrTooltipTrigger, SimpleTest>;

    beforeEach(function() {
      context = this.create(ClrTooltipTrigger, SimpleTest, [IfOpenService]);
      context.detectChanges();
    });

    it('notifies the IfOpen service', function() {
      const ifOpenService = context.getClarityProvider(IfOpenService);
      context.clarityDirective.showTooltip();
      expect(ifOpenService.open).toBe(true);
      context.clarityDirective.hideTooltip();
      expect(ifOpenService.open).toBe(false);
    });

    // TODO: add an actual hover test
  });
}

@Component({
  template: `
        <span clrTooltipTrigger>
            Hello world
        </span>
    `,
})
class SimpleTest {}
