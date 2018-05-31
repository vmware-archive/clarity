/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component } from '@angular/core';

import { TestContext } from '../../data/datagrid/helpers.spec';
import { IfOpenService } from '../../utils/conditional/if-open.service';
import { Point } from '../common/popover';

import { ClrDropdownMenu } from './dropdown-menu';

export default function(): void {
  describe('DropdownMenu component', function() {
    let context: TestContext<ClrDropdownMenu, SimpleTest>;

    beforeEach(function() {
      context = this.create(ClrDropdownMenu, SimpleTest, [IfOpenService]);
      context.getClarityProvider(IfOpenService).open = true;
      context.detectChanges();
    });

    it('projects content', function() {
      expect(context.clarityElement.textContent.trim()).toMatch('Hello world');
    });

    it('has the correct css classes', () => {
      expect(context.testElement.querySelector('.dropdown-menu')).not.toBeNull();
    });

    it('supports clrPosition option', () => {
      // Default is bottom-left since menuPosition is set to ""
      expect((<any>context.clarityDirective).anchorPoint).toEqual(Point.BOTTOM_LEFT);
      expect((<any>context.clarityDirective).popoverPoint).toEqual(Point.LEFT_TOP);

      context.clarityDirective.position = 'bottom-right';
      context.detectChanges();
      expect((<any>context.clarityDirective).anchorPoint).toEqual(Point.BOTTOM_RIGHT);
      expect((<any>context.clarityDirective).popoverPoint).toEqual(Point.RIGHT_TOP);

      context.clarityDirective.position = 'top-right';
      context.detectChanges();
      expect((<any>context.clarityDirective).anchorPoint).toEqual(Point.TOP_RIGHT);
      expect((<any>context.clarityDirective).popoverPoint).toEqual(Point.RIGHT_BOTTOM);
    });
  });
}

@Component({
  template: `
        <clr-dropdown>
            <clr-dropdown-menu [clrPosition]="position">
                Hello world
            </clr-dropdown-menu>
        </clr-dropdown>
    `,
})
class SimpleTest {
  position: string;
}
