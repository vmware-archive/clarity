/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component } from '@angular/core';

import { IfOpenService } from '../../utils/conditional/if-open.service';
import { Point } from '../common/popover';

import { ClrTooltipContent } from './tooltip-content';
import { spec, TestContext } from '../../utils/testing/helpers.spec';
import { ClrTooltipModule } from './tooltip.module';

interface TooltipContext extends TestContext<ClrTooltipContent, SimpleTest> {
  ifOpenService: IfOpenService;
}

export default function(): void {
  describe('TooltipContent component', function() {
    spec(ClrTooltipContent, SimpleTest, ClrTooltipModule, { providers: [IfOpenService] });

    beforeEach(function(this: TooltipContext) {
      this.getClarityProvider(IfOpenService).open = true;
      this.detectChanges();
    });

    it('projects content', function(this: TooltipContext) {
      expect(this.clarityElement.textContent.trim()).toMatch('Hello world');
    });

    it('adds the .tooltip-content class to the host', function(this: TooltipContext) {
      expect(this.clarityElement.classList).toContain('tooltip-content');
    });

    it('accepts a [clrPosition] input', function(this: TooltipContext) {
      // Default is right
      expect((<any>this.clarityDirective).anchorPoint).toEqual(Point.RIGHT_CENTER);
      expect((<any>this.clarityDirective).popoverPoint).toEqual(Point.LEFT_TOP);
      expect(this.clarityElement.classList).toContain('tooltip-right');

      this.hostComponent.position = 'bottom-right';
      this.detectChanges();
      expect((<any>this.clarityDirective).anchorPoint).toEqual(Point.BOTTOM_CENTER);
      expect((<any>this.clarityDirective).popoverPoint).toEqual(Point.LEFT_TOP);
      expect(this.clarityElement.classList).not.toContain('tooltip-right');
      expect(this.clarityElement.classList).toContain('tooltip-bottom-right');

      this.hostComponent.position = 'top-left';
      this.detectChanges();
      expect((<any>this.clarityDirective).anchorPoint).toEqual(Point.TOP_CENTER);
      expect((<any>this.clarityDirective).popoverPoint).toEqual(Point.RIGHT_BOTTOM);
      expect(this.clarityElement.classList).not.toContain('tooltip-bottom-right');
      expect(this.clarityElement.classList).toContain('tooltip-top-left');
    });

    it('accepts a [clrSize] input', function(this: TooltipContext) {
      // Default is small
      expect(this.clarityDirective.size).toEqual('sm');
      expect(this.clarityElement.classList).toContain('tooltip-sm');

      this.hostComponent.size = 'lg';
      this.detectChanges();
      expect(this.clarityDirective.size).toEqual('lg');
      expect(this.clarityElement.classList).not.toContain('tooltip-sm');
      expect(this.clarityElement.classList).toContain('tooltip-lg');
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
