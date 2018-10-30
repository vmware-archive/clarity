/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TestBed, async } from '@angular/core/testing';
import { Subscription } from 'rxjs';

import { itIgnore } from '../../../../tests/tests.helpers';
import { TestContext } from '../../data/datagrid/helpers.spec';
import { IfOpenService } from '../../utils/conditional/if-open.service';
import { IfErrorService } from '../common/if-error/if-error.service';
import { ControlClassService } from '../common/providers/control-class.service';
import { ControlIdService } from '../common/providers/control-id.service';
import { FocusService } from '../common/providers/focus.service';
import { Layouts, LayoutService } from '../common/providers/layout.service';
import { NgControlService } from '../common/providers/ng-control.service';

import { ClrDateContainer } from './date-container';
import { DateFormControlService } from './providers/date-form-control.service';
import { DateIOService } from './providers/date-io.service';
import { DateNavigationService } from './providers/date-navigation.service';
import { DatepickerEnabledService } from './providers/datepicker-enabled.service';
import { MockDatepickerEnabledService } from './providers/datepicker-enabled.service.mock';
import { LocaleHelperService } from './providers/locale-helper.service';

export default function() {
  describe('Date Container Component', () => {
    let context: TestContext<ClrDateContainer, TestComponent>;
    let enabledService: MockDatepickerEnabledService;
    let dateFormControlService: DateFormControlService;
    let ifOpenService: IfOpenService;

    beforeEach(function() {
      TestBed.configureTestingModule({
        imports: [FormsModule],
      });
      TestBed.overrideComponent(ClrDateContainer, {
        set: {
          providers: [
            { provide: DatepickerEnabledService, useClass: MockDatepickerEnabledService },
            IfOpenService,
            DateNavigationService,
            LocaleHelperService,
            ControlClassService,
            IfErrorService,
            FocusService,
            LayoutService,
            NgControlService,
            DateIOService,
            ControlIdService,
            DateFormControlService,
          ],
        },
      });

      context = this.create(ClrDateContainer, TestComponent, []);

      enabledService = <MockDatepickerEnabledService>context.getClarityProvider(DatepickerEnabledService);
      dateFormControlService = context.getClarityProvider(DateFormControlService);
      ifOpenService = context.getClarityProvider(IfOpenService);
    });

    // @deprecated these tests refer to the old forms layout only and can be removed when its removed
    describe('Deprecated View', () => {
      it('applies the date-container class');

      it('renders the datepicker toggle button based on the enabled service', () => {
        expect(enabledService.isEnabled).toBe(true);
        expect(context.clarityElement.querySelector('.datepicker-trigger')).not.toBeNull();

        enabledService.fakeIsEnabled = false;
        context.detectChanges();

        expect(context.clarityElement.querySelector('.datepicker-trigger')).toBeNull();
      });

      it('clicking on the button toggles the datepicker popover', () => {
        spyOn(context.clarityDirective, 'toggleDatepicker');
        const button: HTMLButtonElement = context.clarityElement.querySelector('.datepicker-trigger');

        button.click();
        context.detectChanges();

        expect(context.clarityDirective.toggleDatepicker).toHaveBeenCalled();
      });

      it('projects the date input', () => {
        expect(context.clarityElement.querySelector('input')).not.toBeNull();
      });

      it('shows the datepicker view manager when .datepicker-trigger is clicked', () => {
        expect(context.clarityElement.querySelector('clr-datepicker-view-manager')).toBeNull();

        const button: HTMLButtonElement = context.clarityElement.querySelector('.datepicker-trigger');
        button.click();
        context.detectChanges();

        expect(context.clarityElement.querySelector('clr-datepicker-view-manager')).not.toBeNull();
      });
    });

    describe('View Basics', () => {
      beforeEach(() => {
        context.clarityDirective.newFormsLayout = true;
        context.detectChanges();
      });

      it('applies the clr-form-control class', () => {
        expect(context.clarityElement.className).toContain('clr-form-control');
      });

      it('renders the datepicker toggle button based on the enabled service', () => {
        expect(enabledService.isEnabled).toBe(true);
        expect(context.clarityElement.querySelector('.datepicker-trigger')).not.toBeNull();

        enabledService.fakeIsEnabled = false;
        context.detectChanges();

        expect(context.clarityElement.querySelector('.datepicker-trigger')).toBeNull();
      });

      it('clicking on the button toggles the datepicker popover', () => {
        spyOn(context.clarityDirective, 'toggleDatepicker');
        const button: HTMLButtonElement = context.clarityElement.querySelector('.datepicker-trigger');

        button.click();
        context.detectChanges();

        expect(context.clarityDirective.toggleDatepicker).toHaveBeenCalled();
      });

      it('projects the date input', () => {
        context.detectChanges();
        expect(context.clarityElement.querySelector('input')).not.toBeNull();
      });

      it('shows the datepicker view manager when .datepicker-trigger is clicked', () => {
        expect(context.clarityElement.querySelector('clr-datepicker-view-manager')).toBeNull();

        const button: HTMLButtonElement = context.clarityElement.querySelector('.datepicker-trigger');
        button.click();
        context.detectChanges();

        expect(context.clarityElement.querySelector('clr-datepicker-view-manager')).not.toBeNull();
      });

      it('tracks the disabled state', async(() => {
        expect(context.clarityElement.className).not.toContain('clr-form-control-disabled');
        context.testComponent.disabled = true;
        context.detectChanges();
        // Have to wait for the whole control to settle or it doesn't track
        context.fixture.whenStable().then(() => {
          context.detectChanges();
          expect(context.clarityElement.className).toContain('clr-form-control-disabled');
        });
      }));
    });

    describe('Typescript API', () => {
      // IE doesn't support MouseEvent constructors
      itIgnore(['ie'], 'toggles the datepicker popover', () => {
        const fakeEvent: MouseEvent = new MouseEvent('fakeEvent');
        let flag: boolean;
        const sub: Subscription = ifOpenService.openChange.subscribe(open => {
          flag = open;
        });

        expect(flag).toBeUndefined();
        context.clarityDirective.toggleDatepicker(fakeEvent);
        context.detectChanges();

        expect(flag).toBe(true);

        sub.unsubscribe();
      });

      it('marks the date control as touched when the datepicker popover is toggled', () => {
        spyOn(dateFormControlService, 'markAsTouched');

        context.clarityDirective.toggleDatepicker(null);

        expect(dateFormControlService.markAsTouched).toHaveBeenCalled();
      });

      it('returns the classes to apply to the control', () => {
        expect(context.clarityDirective.controlClass()).toContain('clr-col-md-10');
        expect(context.clarityDirective.controlClass()).toContain('clr-col-xs-12');
        expect(context.clarityDirective.controlClass()).not.toContain('clr-error');
        context.clarityDirective.invalid = true;
        expect(context.clarityDirective.controlClass()).toContain('clr-error');
        const controlClassService = context.getClarityProvider(ControlClassService);
        const layoutService = context.getClarityProvider(LayoutService);
        layoutService.layout = Layouts.VERTICAL;
        context.clarityDirective.invalid = false;
        expect(context.clarityDirective.controlClass()).not.toContain('clr-error');
        expect(context.clarityDirective.controlClass()).not.toContain('clr-col-md-10');
        controlClassService.className = 'clr-col-2';
        expect(context.clarityDirective.controlClass()).not.toContain('clr-col-md-10');
      });
    });
  });
}

@Component({
  template: `
        <clr-date-container>
            <input type="date" clrDate [(ngModel)]="model" [disabled]="disabled">
        </clr-date-container>
    `,
})
class TestComponent {
  model = '';
  disabled = false;
}
