/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { NgModule } from '@angular/core';

import { CdsAccordionModule } from './accordion/index';
import { CdsAlertModule } from './alert/index';
import { CdsBadgeModule } from './badge/index';
import { CdsButtonModule } from './button/index';
import { CdsCheckboxModule } from './checkbox/index';
import { CdsDatalistModule } from './datalist/index';
import { CdsDateModule } from './date/index';
import { CdsDividerModule } from './divider/index';
import { CdsFileModule } from './file/index';
import { CdsFormsModule } from './forms/index';
import { CdsIconModule } from './icon/index';
import { CdsInputModule } from './input/index';
import { CdsModalModule } from './modal/index';
import { CdsPasswordModule } from './password/index';
import { CdsProgressCircleModule } from './progress-circle/index';
import { CdsRadioModule } from './radio/index';
import { CdsRangeModule } from './range/index';
import { CdsSearchModule } from './search/index';
import { CdsSelectModule } from './select/index';
import { CdsTagModule } from './tag/index';
import { CdsTestDropdownModule } from './test-dropdown/index';
import { CdsTextareaModule } from './textarea/index';
import { CdsTimeModule } from './time/index';
import { CdsToggleModule } from './toggle/index';

import '@cds/core/accordion/register.js';
import '@cds/core/alert/register.js';
import '@cds/core/badge/register.js';
import '@cds/core/button/register.js';
import '@cds/core/checkbox/register.js';
import '@cds/core/datalist/register.js';
import '@cds/core/date/register.js';
import '@cds/core/divider/register.js';
import '@cds/core/file/register.js';
import '@cds/core/forms/register.js';
import '@cds/core/icon/register.js';
import '@cds/core/input/register.js';
import '@cds/core/modal/register.js';
import '@cds/core/password/register.js';
import '@cds/core/progress-circle/register.js';
import '@cds/core/radio/register.js';
import '@cds/core/range/register.js';
import '@cds/core/search/register.js';
import '@cds/core/select/register.js';
import '@cds/core/tag/register.js';
import '@cds/core/test-dropdown/register.js';
import '@cds/core/textarea/register.js';
import '@cds/core/time/register.js';
import '@cds/core/toggle/register.js';

@NgModule({
  exports: [
    CdsAccordionModule,
    CdsAlertModule,
    CdsBadgeModule,
    CdsButtonModule,
    CdsCheckboxModule,
    CdsDatalistModule,
    CdsDateModule,
    CdsDividerModule,
    CdsFileModule,
    CdsFormsModule,
    CdsIconModule,
    CdsInputModule,
    CdsModalModule,
    CdsPasswordModule,
    CdsProgressCircleModule,
    CdsRadioModule,
    CdsRangeModule,
    CdsSearchModule,
    CdsSelectModule,
    CdsTagModule,
    CdsTestDropdownModule,
    CdsTextareaModule,
    CdsTimeModule,
    CdsToggleModule,
  ],
})
export class CdsModule {}
