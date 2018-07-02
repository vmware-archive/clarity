/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BasicButtonGroupDemo } from './angular/basic-structure/basic-button-group';
import { ButtonGroupAngularDemo } from './angular/button-group-angular';
import { HideShowOverflowToggleDemo } from './angular/hide-show-overflow-toggle/hide-show-overflow-toggle';
import { IconButtonGroupDemo } from './angular/icon-buttons/icon-button-group';
import { LoadingButtonGroupDemo } from './angular/loading-buttons/loading-button-group';
import { MenuDirectionsDemo } from './angular/menu-directions/menu-directions';
import { MixedButtonGroupDemo } from './angular/mixed-buttons/mixed-button-group';
import { MoveAllInMenuDemo } from './angular/move-all-in-menu/move-all-in-menu';
import { MoveButtonInMenuDemo } from './angular/move-button-in-menu/move-button-in-menu';
import { MoveMultipleButtonInMenuDemo } from './angular/move-multiple-buttons-in-menu/move-multiple-button-in-menu';
import { ProjectionUpdateTest1Demo } from './angular/projection-update-test-1/projection-update-test-1';
import { ProjectionUpdateTest2Demo } from './angular/projection-update-test-2/projection-update-test-2';
import { ProjectionUpdateTest3Demo } from './angular/projection-update-test-3/projection-update-test-3';
import { ProjectionUpdateTest4Demo } from './angular/projection-update-test-4/projection-update-test-4';
import { ProjectionUpdateTest5Demo } from './angular/projection-update-test-5/projection-update-test-5';
import { ProjectionUpdateTest6Demo } from './angular/projection-update-test-6/projection-update-test-6';
import { ButtonGroupDemo } from './button-group.demo';
import { StaticButtonGroupBasicStructureDemo } from './static/basic-structure/basic-structure';
import { ButtonGroupStaticDemo } from './static/button-group-static';
import { ButtonGroupCardsDemo } from './static/cards/button-group-cards';
import { ButtonGroupCheckboxesDemo } from './static/checkbox/button-group-checkboxes';
import { StaticIconButtonGroupDemo } from './static/icon-buttons/icon-button-group';
import { ButtonGroupIconsTextDemo } from './static/icons-with-text/button-group-icon-text';
import { ButtonGroupIconsDemo } from './static/icons/button-group-icons';
import { StaticMenuDirectionsDemo } from './static/menu-directions/menu-directions';
import { ButtonGroupRadiosDemo } from './static/radio/button-group-radios';
import { ButtonGroupTypes } from './static/types/button-group-types';

const ROUTES: Routes = [
  {
    path: '',
    component: ButtonGroupDemo,
    children: [
      { path: '', redirectTo: 'static', pathMatch: 'full' },
      {
        path: 'static',
        component: ButtonGroupStaticDemo,
        children: [
          { path: '', redirectTo: 'basic-structure', pathMatch: 'full' },
          { path: 'basic-structure', component: StaticButtonGroupBasicStructureDemo },
          { path: 'directions', component: StaticMenuDirectionsDemo },
          { path: 'types', component: ButtonGroupTypes },
          { path: 'icons', component: ButtonGroupIconsDemo },
          { path: 'icon-button-group', component: StaticIconButtonGroupDemo },
          { path: 'icons-with-text', component: ButtonGroupIconsTextDemo },
          { path: 'checkboxes', component: ButtonGroupCheckboxesDemo },
          { path: 'radios', component: ButtonGroupRadiosDemo },
          { path: 'cards', component: ButtonGroupCardsDemo },
        ],
      },
      {
        path: 'angular',
        component: ButtonGroupAngularDemo,
        children: [
          { path: '', redirectTo: 'basic-structure', pathMatch: 'full' },
          { path: 'basic-structure', component: BasicButtonGroupDemo },
          { path: 'directions', component: MenuDirectionsDemo },
          { path: 'icon-button', component: IconButtonGroupDemo },
          { path: 'loading-button', component: LoadingButtonGroupDemo },
          { path: 'hide-overflow', component: HideShowOverflowToggleDemo },
          { path: 'mixed-buttons', component: MixedButtonGroupDemo },
          { path: 'move-button-in-menu', component: MoveButtonInMenuDemo },
          { path: 'move-multiple-buttons-in-menu', component: MoveMultipleButtonInMenuDemo },
          { path: 'move-all-in-menu', component: MoveAllInMenuDemo },
          { path: 'projection-update-test-1', component: ProjectionUpdateTest1Demo },
          { path: 'projection-update-test-2', component: ProjectionUpdateTest2Demo },
          { path: 'projection-update-test-3', component: ProjectionUpdateTest3Demo },
          { path: 'projection-update-test-4', component: ProjectionUpdateTest4Demo },
          { path: 'projection-update-test-5', component: ProjectionUpdateTest5Demo },
          { path: 'projection-update-test-6', component: ProjectionUpdateTest6Demo },
        ],
      },
    ],
  },
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
