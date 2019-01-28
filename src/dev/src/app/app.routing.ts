/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingComponent } from './landing.component';

export const APP_ROUTES: Routes = [
  { path: '', component: LandingComponent },
  { path: 'alert', loadChildren: 'src/app/alert/alert.demo.module#AlertDemoModule' },
  { path: 'badges', loadChildren: 'src/app/badges/badges.demo.module#BadgesDemoModule' },
  { path: 'button-group', loadChildren: 'src/app/button-group/button-group.demo.module#ButtonGroupDemoModule' },
  { path: 'buttons', loadChildren: 'src/app/buttons/buttons.demo.module#ButtonsDemoModule' },
  { path: 'card', loadChildren: 'src/app/card/card.demo.module#CardDemoModule' },
  { path: 'checkboxes', loadChildren: 'src/app/checkboxes/checkboxes.demo.module#CheckboxesDemoModule' },
  { path: 'color', loadChildren: 'src/app/color/color.demo.module#ColorDemoModule' },
  { path: 'combobox', loadChildren: 'src/app/combobox/combobox.demo.module#ComboboxDemoModule' },
  { path: 'datagrid', loadChildren: 'src/app/datagrid/datagrid.demo.module#DatagridDemoModule' },
  { path: 'drag-and-drop', loadChildren: 'src/app/drag-and-drop/drag-and-drop.demo.module#DragAndDropDemoModule' },
  { path: 'datepicker', loadChildren: 'src/app/datepicker/datepicker.demo.module#DatepickerDemoModule' },
  {
    path: 'datepicker-deprecated',
    loadChildren: 'src/app/datepicker-deprecated/datepicker.demo.module#DatepickerDemoModule',
  },
  { path: 'dropdown', loadChildren: 'src/app/dropdown/dropdown.demo.module#DropdownDemoModule' },
  { path: 'forms', loadChildren: 'src/app/forms/forms.demo.module#FormsDemoModule' },
  { path: 'forms-deprecated', loadChildren: 'src/app/forms-deprecated/forms.demo.module#FormsDeprecatedDemoModule' },
  { path: 'grid', loadChildren: 'src/app/grid/grid.demo.module#GridDemoModule' },
  { path: 'grid-deprecated', loadChildren: 'src/app/grid-deprecated/grid.demo.module#DeprecatedGridDemoModule' },
  { path: 'iconography', loadChildren: 'src/app/iconography/iconography.demo.module#IconographyDemoModule' },
  { path: 'images', loadChildren: 'src/app/images/images.demo.module#ImagesDemoModule' },
  { path: 'input-fields', loadChildren: 'src/app/input-fields/input-fields.demo.module#InputFieldsDemoModule' },
  { path: 'input', loadChildren: 'src/app/input/input.demo.module#InputDemoModule' },
  { path: '🇫🇷♿', loadChildren: 'src/app/i18n-a11y/i18n-a11y.demo.module#I18nA11yDemoModule' },
  { path: 'labels', loadChildren: 'src/app/labels/labels.demo.module#LabelsDemoModule' },
  { path: 'layout', loadChildren: 'src/app/layout/layout.demo.module#LayoutDemoModule' },
  { path: 'lists', loadChildren: 'src/app/lists/lists.demo.module#ListsDemoModule' },
  { path: 'login', loadChildren: 'src/app/login/login.demo.module#LoginDemoModule' },
  { path: 'modal', loadChildren: 'src/app/modal/modal.demo.module#ModalDemoModule' },
  { path: 'navigation', loadChildren: 'src/app/nav/nav.demo.module#NavDemoModule' },
  { path: 'password', loadChildren: 'src/app/password/password.demo.module#PasswordDemoModule' },
  { path: 'popovers', loadChildren: 'src/app/popovers/popovers.demo.module#PopoversDemoModule' },
  { path: 'progress-bars', loadChildren: 'src/app/progress-bars/progress-bars.demo.module#ProgressBarsDemoModule' },
  { path: 'radios', loadChildren: 'src/app/radios/radios.demo.module#RadiosDemoModule' },
  { path: 'selects', loadChildren: 'src/app/selects/selects.demo.module#SelectsDemoModule' },
  { path: 'signposts', loadChildren: 'src/app/signpost/signpost.demo.module#SignpostDemoModule' },
  { path: 'spinners', loadChildren: 'src/app/spinners/spinners.demo.module#SpinnersDemoModule' },
  { path: 'stack-view', loadChildren: 'src/app/stack-view/stack-view.demo.module#StackViewDemoModule' },
  { path: 'tables', loadChildren: 'src/app/tables/tables.demo.module#TablesDemoModule' },
  { path: 'tabs', loadChildren: 'src/app/tabs/tabs.demo.module#TabsDemoModule' },
  { path: 'textarea', loadChildren: 'src/app/textarea/textarea.demo.module#TextareaDemoModule' },
  { path: 'tree-view', loadChildren: 'src/app/tree-view/tree-view.demo.module#TreeViewDemoModule' },
  { path: 'toggles', loadChildren: 'src/app/toggles/toggles.demo.module#TogglesDemoModule' },
  { path: 'tooltips', loadChildren: 'src/app/tooltips/tooltips.demo.module#TooltipsDemoModule' },
  { path: 'typography', loadChildren: 'src/app/typography/typography.demo.module#TypographyDemoModule' },
  { path: 'vertical-nav', loadChildren: 'src/app/vertical-nav/vertical-nav.demo.module#VerticalNavDemoModule' },
  { path: 'virtual-scroll', loadChildren: 'src/app/virtual-scroll/virtual-scroll.demo.module#VirtualScrollDemoModule' },
  { path: 'wizard', loadChildren: 'src/app/wizard/wizard.demo.module#WizardDemoModule' },
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
