/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ClarityModule, ClrFormsDeprecatedModule } from '@clr/angular';

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
import { ROUTING } from './button-group.demo.routing';
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

@NgModule({
  imports: [CommonModule, ClarityModule, ClrFormsDeprecatedModule, ROUTING],
  declarations: [
    BasicButtonGroupDemo,
    IconButtonGroupDemo,
    HideShowOverflowToggleDemo,
    IconButtonGroupDemo,
    MenuDirectionsDemo,
    MixedButtonGroupDemo,
    MoveAllInMenuDemo,
    MoveButtonInMenuDemo,
    MoveMultipleButtonInMenuDemo,
    ProjectionUpdateTest1Demo,
    ProjectionUpdateTest2Demo,
    ProjectionUpdateTest3Demo,
    ProjectionUpdateTest4Demo,
    ProjectionUpdateTest5Demo,
    ProjectionUpdateTest6Demo,
    LoadingButtonGroupDemo,

    StaticButtonGroupBasicStructureDemo,
    ButtonGroupCheckboxesDemo,
    ButtonGroupRadiosDemo,
    ButtonGroupIconsDemo,
    ButtonGroupIconsTextDemo,
    ButtonGroupTypes,
    StaticMenuDirectionsDemo,
    ButtonGroupCardsDemo,
    StaticIconButtonGroupDemo,

    ButtonGroupStaticDemo,
    ButtonGroupAngularDemo,
    ButtonGroupDemo,
  ],
  exports: [
    BasicButtonGroupDemo,
    IconButtonGroupDemo,
    HideShowOverflowToggleDemo,
    IconButtonGroupDemo,
    MenuDirectionsDemo,
    MixedButtonGroupDemo,
    MoveAllInMenuDemo,
    MoveButtonInMenuDemo,
    MoveMultipleButtonInMenuDemo,
    ProjectionUpdateTest1Demo,
    ProjectionUpdateTest2Demo,
    ProjectionUpdateTest3Demo,
    ProjectionUpdateTest4Demo,
    ProjectionUpdateTest5Demo,
    ProjectionUpdateTest6Demo,
    LoadingButtonGroupDemo,

    StaticButtonGroupBasicStructureDemo,
    ButtonGroupCheckboxesDemo,
    ButtonGroupRadiosDemo,
    ButtonGroupIconsDemo,
    ButtonGroupIconsTextDemo,
    ButtonGroupTypes,
    StaticMenuDirectionsDemo,
    ButtonGroupCardsDemo,
    StaticIconButtonGroupDemo,

    ButtonGroupStaticDemo,
    ButtonGroupAngularDemo,
    ButtonGroupDemo,
  ],
})
export class ButtonGroupDemoModule {}
