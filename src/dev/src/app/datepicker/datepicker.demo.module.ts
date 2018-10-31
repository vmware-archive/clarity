/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClarityModule } from '@clr/angular';

import { DatepickerCSSRegressionDemo } from './css-regression';
import { DatepickerAKDemo } from './datepicker-AK';
import { DatepickerARDemo } from './datepicker-AR';
import { DatepickerDateInputDemo } from './datepicker-date-input';
import { DatepickerDateInputExplicitWrapperDemo } from './datepicker-date-input-explicit-wrapper';
import { DatepickerDEDemo } from './datepicker-DE';
import { DatepickerHIDemo } from './datepicker-HI';
import { DatepickerHRDemo } from './datepicker-hr';
import { DatepickerInReactiveForms } from './datepicker-in-reactive-forms';
import { DatepickerInTemplateDrivenFormsDemo } from './datepicker-in-template-driven-forms';
import { DatepickerKKJDemo } from './datepicker-KKJ';
import { DatepickerLocaleData } from './datepicker-locale-data';
import { DatepickerDemo } from './datepicker.demo';
import { ROUTING } from './datepicker.demo.routing';
import { NgModelAutoWrappedDatepickerDemo } from './ngmodel-auto-wrapped';
import { NgModelExplicitWrapperDemo } from './ngmodel-wrapper-explicit-wrapper';
import { DisabledDemo } from './disabled';
import { DatepickerLayoutDemo } from './layout';

@NgModule({
  imports: [CommonModule, ClarityModule, ROUTING, FormsModule, ReactiveFormsModule],
  declarations: [
    DatepickerDemo,
    DatepickerInTemplateDrivenFormsDemo,
    DatepickerInReactiveForms,
    NgModelAutoWrappedDatepickerDemo,
    NgModelExplicitWrapperDemo,
    DatepickerDateInputDemo,
    DatepickerDateInputExplicitWrapperDemo,
    DatepickerCSSRegressionDemo,
    DatepickerDEDemo,
    DatepickerHIDemo,
    DatepickerAKDemo,
    DatepickerARDemo,
    DatepickerKKJDemo,
    DatepickerHRDemo,
    DatepickerLocaleData,
    DisabledDemo,
    DatepickerLayoutDemo,
  ],
  exports: [
    DatepickerDemo,
    DatepickerInTemplateDrivenFormsDemo,
    DatepickerInReactiveForms,
    NgModelAutoWrappedDatepickerDemo,
    NgModelExplicitWrapperDemo,
    DatepickerDateInputDemo,
    DatepickerDateInputExplicitWrapperDemo,
    DatepickerCSSRegressionDemo,
    DatepickerDEDemo,
    DatepickerHIDemo,
    DatepickerAKDemo,
    DatepickerARDemo,
    DatepickerKKJDemo,
    DatepickerHRDemo,
    DatepickerLocaleData,
    DisabledDemo,
    DatepickerLayoutDemo,
  ],
})
export class DatepickerDemoModule {}
