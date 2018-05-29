/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component } from '@angular/core';
import { addHelpers, TestContext } from '../../data/datagrid/helpers.spec';
import { ClrTooltip } from './tooltip';

describe('Tooltip component', function() {
  addHelpers();

  describe('Simple', function() {
    let context: TestContext<ClrTooltip, SimpleTest>;

    beforeEach(function() {
      context = this.create(ClrTooltip, SimpleTest);
    });

    it('projects anchor content', function() {
      expect(context.clarityElement.textContent).toMatch(/Hello/);
    });
  });
});

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
