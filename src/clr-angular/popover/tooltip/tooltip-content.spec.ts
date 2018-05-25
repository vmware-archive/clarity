/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component } from '@angular/core';

import { TestContext } from '../../data/datagrid/helpers.spec';
import { IfOpenService } from '../../utils/conditional/if-open.service';
import { Point } from '../common/popover';

import { ClrTooltipContent } from './tooltip-content';

export default function(): void {
  // FIXME: this doesn't even run yet, we don't have an all.spec for tooltips.
  describe('TooltipContent component', function() {
    let context: TestContext<ClrTooltipContent, SimpleTest>;

    beforeEach(function() {
      context = this.create(ClrTooltipContent, SimpleTest, [IfOpenService]);
      context.getClarityProvider(IfOpenService).open = true;
      context.detectChanges();
    });

    it('projects content', function() {
      expect(context.clarityElement.textContent.trim()).toMatch('Hello world');
    });

    it('adds the .tooltip-content class to the host', () => {
      expect(context.clarityElement.classList).toContain('tooltip-content');
    });

    it('accepts a [clrPosition] input', () => {
      // Default is right
      expect((<any>context.clarityDirective).anchorPoint).toEqual(Point.RIGHT_CENTER);
      expect((<any>context.clarityDirective).popoverPoint).toEqual(Point.LEFT_TOP);
      expect(context.clarityElement.classList).toContain('tooltip-right');

      context.testComponent.position = 'bottom-right';
      context.detectChanges();
      expect((<any>context.clarityDirective).anchorPoint).toEqual(Point.BOTTOM_CENTER);
      expect((<any>context.clarityDirective).popoverPoint).toEqual(Point.LEFT_TOP);
      expect(context.clarityElement.classList).not.toContain('tooltip-right');
      expect(context.clarityElement.classList).toContain('tooltip-bottom-right');

      context.testComponent.position = 'top-left';
      context.detectChanges();
      expect((<any>context.clarityDirective).anchorPoint).toEqual(Point.TOP_CENTER);
      expect((<any>context.clarityDirective).popoverPoint).toEqual(Point.RIGHT_BOTTOM);
      expect(context.clarityElement.classList).not.toContain('tooltip-bottom-right');
      expect(context.clarityElement.classList).toContain('tooltip-top-left');
    });

    it('accepts a [clrSize] input', () => {
      // Default is small
      expect(context.clarityDirective.size).toEqual('sm');
      expect(context.clarityElement.classList).toContain('tooltip-sm');

      context.testComponent.position = 'lg';
      context.detectChanges();
      expect(context.clarityDirective.size).toEqual('lg');
      expect(context.clarityElement.classList).not.toContain('tooltip-sm');
      expect(context.clarityElement.classList).toContain('tooltip-lg');
    });
  });
}

@Component({
  template: `
        <clr-tooltip>
            <clr-tooltip-content [clrPosition]="position" [clrSize]="size" >
                Hello world
            </clr-tooltip-content>
        </clr-tooltip>
    `,
})
class SimpleTest {
  position: string;
  size: string;
}
