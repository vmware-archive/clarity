/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingComponent } from './landing.component';

export const APP_ROUTES: Routes = [
  { path: '', component: LandingComponent },
  { path: 'alert', loadChildren: () => import('src/app/alert/alert.demo.module').then(m => m.AlertDemoModule) },
  { path: 'badges', loadChildren: () => import('src/app/badges/badges.demo.module').then(m => m.BadgesDemoModule) },
  {
    path: 'button-group',
    loadChildren: () => import('src/app/button-group/button-group.demo.module').then(m => m.ButtonGroupDemoModule),
  },
  { path: 'buttons', loadChildren: () => import('src/app/buttons/buttons.demo.module').then(m => m.ButtonsDemoModule) },
  { path: 'card', loadChildren: () => import('src/app/card/card.demo.module').then(m => m.CardDemoModule) },
  {
    path: 'checkboxes',
    loadChildren: () => import('src/app/checkboxes/checkboxes.demo.module').then(m => m.CheckboxesDemoModule),
  },
  { path: 'color', loadChildren: () => import('src/app/color/color.demo.module').then(m => m.ColorDemoModule) },
  {
    path: 'combobox',
    loadChildren: () => import('src/app/combobox/combobox.demo.module').then(m => m.ComboboxDemoModule),
  },
  {
    path: 'datagrid',
    loadChildren: () => import('src/app/datagrid/datagrid.demo.module').then(m => m.DatagridDemoModule),
  },
  {
    path: 'drag-and-drop',
    loadChildren: () => import('src/app/drag-and-drop/drag-and-drop.demo.module').then(m => m.DragAndDropDemoModule),
  },
  {
    path: 'datepicker',
    loadChildren: () => import('src/app/datepicker/datepicker.demo.module').then(m => m.DatepickerDemoModule),
  },
  {
    path: 'dropdown',
    loadChildren: () => import('src/app/dropdown/dropdown.demo.module').then(m => m.DropdownDemoModule),
  },
  { path: 'forms', loadChildren: () => import('src/app/forms/forms.demo.module').then(m => m.FormsDemoModule) },
  { path: 'grid', loadChildren: () => import('src/app/grid/grid.demo.module').then(m => m.GridDemoModule) },
  {
    path: 'iconography',
    loadChildren: () => import('src/app/iconography/iconography.demo.module').then(m => m.IconographyDemoModule),
  },
  { path: 'images', loadChildren: () => import('src/app/images/images.demo.module').then(m => m.ImagesDemoModule) },
  { path: 'input', loadChildren: () => import('src/app/input/input.demo.module').then(m => m.InputDemoModule) },
  {
    path: '🇫🇷♿',
    loadChildren: () => import('src/app/i18n-a11y/i18n-a11y.demo.module').then(m => m.I18nA11yDemoModule),
  },
  { path: 'labels', loadChildren: () => import('src/app/labels/labels.demo.module').then(m => m.LabelsDemoModule) },
  { path: 'layout', loadChildren: () => import('src/app/layout/layout.demo.module').then(m => m.LayoutDemoModule) },
  { path: 'lists', loadChildren: () => import('src/app/lists/lists.demo.module').then(m => m.ListsDemoModule) },
  { path: 'login', loadChildren: () => import('src/app/login/login.demo.module').then(m => m.LoginDemoModule) },
  { path: 'modal', loadChildren: () => import('src/app/modal/modal.demo.module').then(m => m.ModalDemoModule) },
  { path: 'navigation', loadChildren: () => import('src/app/nav/nav.demo.module').then(m => m.NavDemoModule) },
  {
    path: 'password',
    loadChildren: () => import('src/app/password/password.demo.module').then(m => m.PasswordDemoModule),
  },
  {
    path: 'popovers',
    loadChildren: () => import('src/app/popovers/popovers.demo.module').then(m => m.PopoversDemoModule),
  },
  {
    path: 'progress-bars',
    loadChildren: () => import('src/app/progress-bars/progress-bars.demo.module').then(m => m.ProgressBarsDemoModule),
  },
  { path: 'radios', loadChildren: () => import('src/app/radios/radios.demo.module').then(m => m.RadiosDemoModule) },
  { path: 'selects', loadChildren: () => import('src/app/selects/selects.demo.module').then(m => m.SelectsDemoModule) },
  {
    path: 'signposts',
    loadChildren: () => import('src/app/signpost/signpost.demo.module').then(m => m.SignpostDemoModule),
  },
  {
    path: 'spinners',
    loadChildren: () => import('src/app/spinners/spinners.demo.module').then(m => m.SpinnersDemoModule),
  },
  {
    path: 'stack-view',
    loadChildren: () => import('src/app/stack-view/stack-view.demo.module').then(m => m.StackViewDemoModule),
  },
  { path: 'tables', loadChildren: () => import('src/app/tables/tables.demo.module').then(m => m.TablesDemoModule) },
  { path: 'tabs', loadChildren: () => import('src/app/tabs/tabs.demo.module').then(m => m.TabsDemoModule) },
  {
    path: 'textarea',
    loadChildren: () => import('src/app/textarea/textarea.demo.module').then(m => m.TextareaDemoModule),
  },
  {
    path: 'tree-view',
    loadChildren: () => import('src/app/tree-view/tree-view.demo.module').then(m => m.TreeViewDemoModule),
  },
  { path: 'toggles', loadChildren: () => import('src/app/toggles/toggles.demo.module').then(m => m.TogglesDemoModule) },
  {
    path: 'tooltips',
    loadChildren: () => import('src/app/tooltips/tooltips.demo.module').then(m => m.TooltipsDemoModule),
  },
  {
    path: 'typography',
    loadChildren: () => import('src/app/typography/typography.demo.module').then(m => m.TypographyDemoModule),
  },
  {
    path: 'vertical-nav',
    loadChildren: () => import('src/app/vertical-nav/vertical-nav.demo.module').then(m => m.VerticalNavDemoModule),
  },
  {
    path: 'virtual-scroll',
    loadChildren: () =>
      import('src/app/virtual-scroll/virtual-scroll.demo.module').then(m => m.VirtualScrollDemoModule),
  },
  { path: 'wizard', loadChildren: () => import('src/app/wizard/wizard.demo.module').then(m => m.WizardDemoModule) },
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
