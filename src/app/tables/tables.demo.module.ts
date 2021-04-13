/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ClarityModule } from '@clr/angular';

import { TablesBasicDemo } from './tables-basic';
import { TablesCompactDemo } from './tables-compact';
import { TablesCompactNoborderDemo } from './tables-compact-noborder';
import { TablesLeftcellDemo } from './tables-leftcell';
import { TablesMultilineDemo } from './tables-multiline';
import { TablesNoborderDemo } from './tables-noborder';
import { TablesVerticalDemo } from './tables-vertical';
import { TablesVerticalNoborderCompactDemo } from './tables-vertical-noborder-compact';
import { TablesWidthDemo } from './tables-width';
import { TablesDemo } from './tables.demo';
import { ROUTING } from './tables.demo.routing';

@NgModule({
  imports: [CommonModule, ClarityModule, ROUTING],
  declarations: [
    TablesDemo,
    TablesBasicDemo,
    TablesLeftcellDemo,
    TablesMultilineDemo,
    TablesNoborderDemo,
    TablesCompactDemo,
    TablesCompactNoborderDemo,
    TablesVerticalDemo,
    TablesVerticalNoborderCompactDemo,
    TablesWidthDemo,
  ],
  exports: [
    TablesDemo,
    TablesBasicDemo,
    TablesLeftcellDemo,
    TablesMultilineDemo,
    TablesNoborderDemo,
    TablesCompactDemo,
    TablesCompactNoborderDemo,
    TablesVerticalDemo,
    TablesVerticalNoborderCompactDemo,
    TablesWidthDemo,
  ],
})
export class TablesDemoModule {}
