/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, TemplateRef, ViewChild } from '@angular/core';

import { ClrDatagridColumnToggle } from './datagrid-column-toggle';
import { TestContext } from './helpers.spec';
import { MOCK_COLUMN_SERVICE_PROVIDER, MockColumnsService } from './providers/columns.service.mock';
import { ColumnsService } from './providers/columns.service';
import { fakeAsync, tick } from '@angular/core/testing';
import { ClrCommonStringsService } from '../../utils/i18n/common-strings.service';

export default function(): void {
  describe('Datagrid Column Toggle component', function() {
    let context: TestContext<ClrDatagridColumnToggle, ColumnToggleTest>;
    let columnsService: MockColumnsService;
    let columnToggle: ClrDatagridColumnToggle;
    let testComponent: ColumnToggleTest;

    beforeEach(function() {
      context = this.create(ClrDatagridColumnToggle, ColumnToggleTest, [MOCK_COLUMN_SERVICE_PROVIDER]);
      columnsService = <MockColumnsService>context.getClarityProvider(ColumnsService);
      testComponent = context.testComponent;
      columnToggle = context.clarityDirective;
      columnsService.mockColumns(3);
    });

    describe('Typescript API', function() {
      it(
        'toggles switch panel',
        fakeAsync(function() {
          expect(columnToggle.open).toBeFalsy();
          columnToggle.toggleSwitchPanel();
          tick();
          expect(columnToggle.open).toBeTruthy();
          columnToggle.toggleSwitchPanel();
          tick();
          expect(columnToggle.open).toBeFalsy();
        })
      );

      it('returns states of hideable columns hideable columns', function() {
        columnsService.mockPartialHideable(0, 1);
        expect(columnToggle.hideableColumnStates.length).toBe(2);
      });

      it('hasOnlyOneVisibleColumn must be false as long as there are non-hideable columns', function() {
        columnsService.mockPartialHideable(0, 1, true);
        expect(columnToggle.hasOnlyOneVisibleColumn).toBeFalsy();
      });

      it('hasOnlyOneVisibleColumn must be true only if all columns are hideable and one of them is visible', function() {
        columnsService.mockAllHideable();
        columnsService.mockHideableAt(0, true);
        columnsService.mockHideableAt(1, true);
        expect(columnToggle.hasOnlyOneVisibleColumn).toBeTruthy();
      });

      it('toggles hidden state in hideable column', function() {
        columnToggle.toggleColumnState(columnsService.columns[1].value, true);
        expect(columnsService.columns[1].value.hidden).toBeTruthy();
        columnToggle.toggleColumnState(columnsService.columns[1].value, false);
        expect(columnsService.columns[1].value.hidden).toBeFalsy();
      });
    });

    describe('View', function() {
      it(
        'toggles switch panel',
        fakeAsync(function() {
          context.detectChanges();
          expect(context.clarityElement.querySelectorAll('.column-switch').length).toBe(0);
          columnToggle.toggleSwitchPanel();
          context.detectChanges();
          tick();
          expect(context.clarityElement.querySelectorAll('.column-switch').length).toBe(1);
          columnToggle.toggleSwitchPanel();
          context.detectChanges();
          tick();
          expect(context.clarityElement.querySelectorAll('.column-switch').length).toBe(0);
        })
      );

      it(
        'closes switch panel when close button is clicked',
        fakeAsync(function() {
          expect(context.clarityElement.querySelectorAll('.column-switch').length).toBe(0);
          columnToggle.toggleSwitchPanel();
          context.detectChanges();
          tick();
          expect(context.clarityElement.querySelectorAll('.column-switch').length).toBe(1);
          context.clarityElement.querySelector('.toggle-switch-close-button').click();
          context.detectChanges();
          tick();
          expect(context.clarityElement.querySelectorAll('.column-switch').length).toBe(0);
        })
      );

      it(
        '.column-switch should have id and it have to match the aria-control',
        fakeAsync(function() {
          columnToggle.toggleSwitchPanel();
          context.detectChanges();
          tick();
          expect(
            context.clarityElement.querySelector('button.column-toggle--action').attributes['aria-controls'].value
          ).toBe(context.clarityElement.querySelector('div.column-switch').attributes.id.value);
        })
      );

      it(
        'toggle switch close button should have aria-label for close',
        fakeAsync(function() {
          /* Open it */
          columnToggle.toggleSwitchPanel();
          context.detectChanges();
          tick();
          expect(
            context.clarityElement.querySelector('button.toggle-switch-close-button').attributes['aria-label'].value
          ).toBe(new ClrCommonStringsService().close);
        })
      );

      it('projects template as switch content', function() {
        columnsService.mockAllHideable();
        columnToggle.open = true;
        context.detectChanges();
        expect(context.clarityElement.querySelector('.switch-content li').textContent).toMatch(/Template Content/);
      });

      it('shows the same number of switches for hideable columns', function() {
        columnsService.mockPartialHideable(0, 1);
        columnToggle.open = true;
        context.detectChanges();
        expect(context.clarityElement.querySelectorAll('.switch-content input').length).toBe(2);
      });

      it(
        'shows the same number of checked checkboxes as visible columns',
        fakeAsync(function() {
          columnsService.mockAllHideable();
          columnsService.mockHideableAt(1, true);
          columnToggle.open = true;
          context.detectChanges();
          tick();
          expect(context.clarityElement.querySelectorAll('.switch-content input').length).toBe(3);
          expect(context.clarityElement.querySelectorAll('.switch-content input:checked').length).toBe(2);
        })
      );

      it(
        'toggle column hidden state if its checkbox is clicked',
        fakeAsync(function() {
          const spyToggleColumnState = spyOn(columnToggle, 'toggleColumnState');
          columnsService.mockHideableAt(1, true);
          columnToggle.open = true;
          context.detectChanges();
          tick();
          expect(context.clarityElement.querySelectorAll('.switch-content input').length).toBe(1);
          expect(context.clarityElement.querySelector('.switch-content input').checked).toBeFalsy();
          context.clarityElement.querySelector('.switch-content input').click();
          context.detectChanges();
          expect(spyToggleColumnState).toHaveBeenCalledWith(columnsService.columns[1].value, false);
          expect(context.clarityElement.querySelector('.switch-content input').checked).toBeTruthy();
        })
      );

      it(
        'should not be able to toggle switch if there is only visible column',
        fakeAsync(function() {
          const spyToggleColumnState = spyOn(columnToggle, 'toggleColumnState');
          columnsService.mockAllHideable();
          columnsService.mockHideableAt(0, true);
          columnsService.mockHideableAt(1, true);
          columnToggle.open = true;
          context.detectChanges();
          tick();
          expect(context.clarityElement.querySelectorAll('.switch-content input')[2].disabled).toBeTruthy();
          context.clarityElement.querySelectorAll('.switch-content input')[2].click();
          context.detectChanges();
          expect(spyToggleColumnState).not.toHaveBeenCalled();
          expect(context.clarityElement.querySelectorAll('.switch-content input')[2].checked).toBeTruthy();
        })
      );

      it(
        'should be able to toggle switch as long as there are non-hideable columns',
        fakeAsync(function() {
          columnsService.mockPartialHideable(0, 1);
          columnToggle.open = true;
          context.detectChanges();
          tick();
          expect(context.clarityElement.querySelectorAll('.switch-content input')[0].disabled).toBeFalsy();
          expect(context.clarityElement.querySelectorAll('.switch-content input')[1].disabled).toBeFalsy();
          columnsService.mockPartialHideable(0, 1, true);
          context.detectChanges();
          expect(context.clarityElement.querySelectorAll('.switch-content input')[0].disabled).toBeFalsy();
          expect(context.clarityElement.querySelectorAll('.switch-content input')[1].disabled).toBeFalsy();
        })
      );

      it('shows default title in switch panel', function() {
        columnsService.mockAllHideable();
        columnToggle.open = true;
        context.fixture.detectChanges();
        expect(context.clarityElement.querySelector('.switch-header').textContent).toMatch(/Show Columns/);
      });

      it('can show custom title in switch panel', function() {
        testComponent.hasCustomToggleTitle = true;
        columnsService.mockAllHideable();
        columnToggle.open = true;
        context.fixture.detectChanges();
        expect(context.clarityElement.querySelector('.switch-header').textContent).toMatch(/Custom Toggle Title/);
      });

      it('shows toggle button in switch panel', function() {
        columnsService.mockAllHideable();
        columnToggle.open = true;
        context.fixture.detectChanges();
        expect(context.clarityElement.querySelector('button.switch-button').textContent).toMatch(/Select All/);
      });

      it('disables toggle button when all columns are hideable and all of them are visible', function() {
        columnsService.mockAllHideable();
        columnToggle.open = true;
        context.fixture.detectChanges();
        expect(context.clarityElement.querySelector('button.switch-button').disabled).toBeTruthy();
      });

      it('enables toggle button when all columns are hideable and at least one of them is hidden', function() {
        columnsService.mockAllHideable();
        columnsService.mockHideableAt(1, true);
        columnToggle.open = true;
        context.fixture.detectChanges();
        expect(context.clarityElement.querySelector('button.switch-button').disabled).toBeFalsy();
      });

      it('can show custom toggle button in switch panel', function() {
        testComponent.hasCustomToggleButton = true;
        columnsService.mockAllHideable();
        columnToggle.open = true;
        context.fixture.detectChanges();
        expect(context.clarityElement.querySelector('button.switch-button').textContent).toMatch(
          /Custom Toggle Button/
        );
      });
    });
  });
}

@Component({
  template: `
    <ng-template>Template Content</ng-template>
    <!--The above ng-template is required/used as a hideable column template-->
    <clr-dg-column-toggle>
      <clr-dg-column-toggle-title *ngIf="hasCustomToggleTitle">Custom Toggle Title</clr-dg-column-toggle-title>
      <clr-dg-column-toggle-button *ngIf="hasCustomToggleButton">Custom Toggle Button</clr-dg-column-toggle-button>
    </clr-dg-column-toggle>
  `,
})
class ColumnToggleTest {
  private mockColumnsService: MockColumnsService;

  @ViewChild(TemplateRef, { static: false })
  set templateRef(value: TemplateRef<any>) {
    this.mockColumnsService.templateRef = value;
  }

  constructor(columnsService: ColumnsService) {
    this.mockColumnsService = <MockColumnsService>columnsService;
  }

  hasCustomToggleTitle: boolean = false;
  hasCustomToggleButton: boolean = false;
}
