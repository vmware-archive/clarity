/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { CommonModule } from '@angular/common';
import { NgModule, Optional, SkipSelf, Type } from '@angular/core';

import { ClrIconModule } from '../../icon/icon.module';
import { ClrDropdownModule } from '../../popover/dropdown/dropdown.module';

import { MainContainerWillyWonka } from './chocolate/main-container-willy-wonka';
import { NavDetectionOompaLoompa } from './chocolate/nav-detection-oompa-loompa';
import { ClrHeader } from './header';
import { ClrNavLevel } from './nav-level';
import { ResponsiveNavigationProvider } from './providers/responsive-navigation.provider';
import { ResponsiveNavigationService } from './providers/responsive-navigation.service';

export const CLR_NAVIGATION_DIRECTIVES: Type<any>[] = [
  ClrHeader,
  ClrNavLevel,
  NavDetectionOompaLoompa,
  MainContainerWillyWonka,
];

@NgModule({
  imports: [CommonModule, ClrIconModule, ClrDropdownModule],
  declarations: [CLR_NAVIGATION_DIRECTIVES],
  providers: [
    {
      provide: ResponsiveNavigationService,
      useFactory: ResponsiveNavigationProvider,
      deps: [[new Optional(), new SkipSelf(), ResponsiveNavigationService]],
    },
  ],
  exports: [CLR_NAVIGATION_DIRECTIVES],
})
export class ClrNavigationModule {}
