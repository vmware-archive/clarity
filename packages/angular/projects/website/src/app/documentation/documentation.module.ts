/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ClarityModule } from '@clr/angular';

import { UtilsModule } from '../utils/utils.module';
import { DocumentationRoutingModule } from './documentation-routing.module';
import { DocumentationComponent } from './documentation.component';
import { ComponentStatusComponent } from './component-status/component-status.component';
import { NewLayoutAlertComponent } from './utils/new-layout-alert.component';
import { StatusDotComponent } from './component-status/status-dot.component';
import { VersionSwitcherComponent } from './version-switcher/version-switcher.component';

@NgModule({
  imports: [CommonModule, FormsModule, UtilsModule, ClarityModule, HttpClientModule, DocumentationRoutingModule],
  declarations: [
    DocumentationComponent,
    ComponentStatusComponent,
    StatusDotComponent,
    NewLayoutAlertComponent,
    VersionSwitcherComponent,
  ],
})
export class DocumentationModule {}
