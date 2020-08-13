/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ClarityModule } from '@clr/angular';
import { IconsComponent } from './icons.component';
import { ROUTING } from './icons-routing.module';
import { IconsGetStartedComponent } from './icons-get-started/icons-get-started.component';
import { IconsHowToUseComponent } from './icons-how-to-use/icons-how-to-use.component';
import { IconsApiComponent } from './icons-api/icons-api.component';
import { UtilsModule } from '../utils/utils.module';
import { IconsSetsComponent } from './icons-sets/icons-sets.component';
import { FragmentLinkDirective } from './utils/fragment-link.directive';
import { FragmentContentComponent } from './utils/fragment-content.component';
import { IconDetailCardComponent } from './icons-sets/icon-detail-card/icon-detail-card.component';
import { IconsA11yComponent } from './icons-a11y/icons-a11y.component';

@NgModule({
  imports: [ROUTING, CommonModule, ClarityModule, UtilsModule, FormsModule],
  declarations: [
    IconsComponent,
    IconsGetStartedComponent,
    IconsHowToUseComponent,
    IconsApiComponent,
    IconsSetsComponent,
    IconsA11yComponent,
    FragmentLinkDirective,
    FragmentContentComponent,
    IconDetailCardComponent,
  ],
})
export class IconsModule {}
