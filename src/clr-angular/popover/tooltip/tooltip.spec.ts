/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component } from '@angular/core';
import { addHelpers, TestContext } from '../../data/datagrid/helpers.spec';
import { ClrTooltip } from './tooltip';
import { UNIQUE_ID } from '../../utils/id-generator/id-generator.service';

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

export default function(): void {
  describe('Tooltip component', function() {
    let context: TestContext<ClrTooltip, SimpleTest>;

    addHelpers();
    beforeEach(function() {
      context = this.create(ClrTooltip, SimpleTest);
    });

    describe('TypeScript API', () => {
      it('provides a tooltipId', () => {
        const tooltipId: string = context.getClarityProvider(UNIQUE_ID);
        expect(tooltipId).toBeDefined();
      });
    });

    describe('Simple', function() {
      it('projects anchor content', function() {
        expect(context.clarityElement.textContent).toMatch(/Hello/);
      });
    });
  });
}
