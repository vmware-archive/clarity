/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';
import { ClrDatagridColumnToggleButton } from './datagrid-column-toggle-button';
import { TestContext } from './helpers.spec';
import { ColumnToggleButtonsService } from './providers/column-toggle-buttons.service';

export default function(): void {
  describe('Datagrid Column Toggle Button component', function() {
    describe('View', function() {
      // Until we can properly type "this"
      let context: TestContext<ClrDatagridColumnToggleButton, ButtonTest>;
      let columnToggleButtons: ColumnToggleButtonsService;
      let button;

      beforeEach(function() {
        context = this.create(ClrDatagridColumnToggleButton, ButtonTest, [ColumnToggleButtonsService]);
        columnToggleButtons = context.getClarityProvider(ColumnToggleButtonsService);
        button = context.clarityElement.querySelector('button');
      });

      it('has a button', function() {
        expect(button).toBeDefined();
        expect(button.className).toContain('btn btn-sm');
      });

      it('projects content', function() {
        expect(button.innerText.trim().toUpperCase()).toEqual('Testing 1 2 3'.toUpperCase());
      });

      it('should disable the button when all are active', function() {
        columnToggleButtons.selectAllDisabled = true;
        context.detectChanges();
        expect(button.disabled).toBe(true);
      });

      it('calls the click method', function() {
        spyOn(columnToggleButtons, 'buttonClicked');
        button.click();
        context.detectChanges();
        expect(columnToggleButtons.buttonClicked).toHaveBeenCalled();
      });
    });
  });
}

@Component({
  template: `<clr-dg-column-toggle-button>Testing 1 2 3</clr-dg-column-toggle-button>`,
})
class ButtonTest {}
