/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingComponent } from './landing.component';

export const APP_ROUTES: Routes = [
  { path: '', component: LandingComponent },
  {
    path: 'accessibility',
    loadChildren: () => import('./accessibility/accessibility.demo.module').then(m => m.AccessibilityDemoModule),
  },
  {
    path: 'accordion',
    loadChildren: () => import('./accordion/accordion.demo.module').then(m => m.AccordionDemoModule),
  },
  { path: 'alert', loadChildren: () => import('./alert/alert.demo.module').then(m => m.AlertDemoModule) },
  { path: 'badges', loadChildren: () => import('./badges/badges.demo.module').then(m => m.BadgesDemoModule) },
  {
    path: 'button-group',
    loadChildren: () => import('./button-group/button-group.demo.module').then(m => m.ButtonGroupDemoModule),
  },
  { path: 'buttons', loadChildren: () => import('./buttons/buttons.demo.module').then(m => m.ButtonsDemoModule) },
  { path: 'card', loadChildren: () => import('./card/card.demo.module').then(m => m.CardDemoModule) },
  {
    path: 'checkboxes',
    loadChildren: () => import('./checkboxes/checkboxes.demo.module').then(m => m.CheckboxesDemoModule),
  },
  { path: 'color', loadChildren: () => import('./color/color.demo.module').then(m => m.ColorDemoModule) },
  { path: 'combobox', component: LandingComponent },
  {
    path: 'custom-props',
    loadChildren: () => import('./custom-props/custom-props.demo.module').then(m => m.CustomPropsDemoModule),
  },
  {
    path: 'datagrid',
    loadChildren: () => import('./datagrid/datagrid.demo.module').then(m => m.DatagridDemoModule),
  },
  {
    path: 'datalist',
    loadChildren: () => import('./datalist/datalist.demo.module').then(m => m.DatalistDemoModule),
  },
  {
    path: 'drag-and-drop',
    loadChildren: () => import('./drag-and-drop/drag-and-drop.demo.module').then(m => m.DragAndDropDemoModule),
  },
  {
    path: 'datepicker',
    loadChildren: () => import('./datepicker/datepicker.demo.module').then(m => m.DatepickerDemoModule),
  },
  {
    path: 'dropdown',
    loadChildren: () => import('./dropdown/dropdown.demo.module').then(m => m.DropdownDemoModule),
  },
  { path: 'forms', loadChildren: () => import('./forms/forms.demo.module').then(m => m.FormsDemoModule) },
  { path: 'grid', loadChildren: () => import('./grid/grid.demo.module').then(m => m.GridDemoModule) },
  {
    path: 'iconography',
    loadChildren: () => import('./iconography/iconography.demo.module').then(m => m.IconographyDemoModule),
  },
  { path: 'images', loadChildren: () => import('./images/images.demo.module').then(m => m.ImagesDemoModule) },
  { path: 'input', loadChildren: () => import('./input/input.demo.module').then(m => m.InputDemoModule) },
  {
    path: '🇫🇷♿',
    loadChildren: () => import('./i18n-a11y/i18n-a11y.demo.module').then(m => m.I18nA11yDemoModule),
  },
  { path: 'labels', loadChildren: () => import('./labels/labels.demo.module').then(m => m.LabelsDemoModule) },
  { path: 'layout', loadChildren: () => import('./layout/layout.demo.module').then(m => m.LayoutDemoModule) },
  { path: 'lists', loadChildren: () => import('./lists/lists.demo.module').then(m => m.ListsDemoModule) },
  { path: 'login', loadChildren: () => import('./login/login.demo.module').then(m => m.LoginDemoModule) },
  { path: 'modal', loadChildren: () => import('./modal/modal.demo.module').then(m => m.ModalDemoModule) },
  { path: 'navigation', loadChildren: () => import('./nav/nav.demo.module').then(m => m.NavDemoModule) },
  {
    path: 'password',
    loadChildren: () => import('./password/password.demo.module').then(m => m.PasswordDemoModule),
  },
  {
    path: 'popovers',
    loadChildren: () => import('./popovers/popovers.demo.module').then(m => m.PopoversDemoModule),
  },
  {
    path: 'progress-bars',
    loadChildren: () => import('./progress-bars/progress-bars.demo.module').then(m => m.ProgressBarsDemoModule),
  },
  { path: 'radios', loadChildren: () => import('./radios/radios.demo.module').then(m => m.RadiosDemoModule) },
  { path: 'ranges', loadChildren: () => import('./range/range.demo.module').then(m => m.RangeDemoModule) },
  { path: 'selects', loadChildren: () => import('./selects/selects.demo.module').then(m => m.SelectsDemoModule) },
  {
    path: 'signposts',
    loadChildren: () => import('./signpost/signpost.demo.module').then(m => m.SignpostDemoModule),
  },
  {
    path: 'spinners',
    loadChildren: () => import('./spinners/spinners.demo.module').then(m => m.SpinnersDemoModule),
  },
  {
    path: 'stack-view',
    loadChildren: () => import('./stack-view/stack-view.demo.module').then(m => m.StackViewDemoModule),
  },
  { path: 'stepper', loadChildren: () => import('./stepper/stepper.demo.module').then(m => m.StepperDemoModule) },
  { path: 'tables', loadChildren: () => import('./tables/tables.demo.module').then(m => m.TablesDemoModule) },
  { path: 'tabs', loadChildren: () => import('./tabs/tabs.demo.module').then(m => m.TabsDemoModule) },
  {
    path: 'textarea',
    loadChildren: () => import('./textarea/textarea.demo.module').then(m => m.TextareaDemoModule),
  },
  {
    path: 'tree-view',
    loadChildren: () => import('./tree-view/tree-view.demo.module').then(m => m.TreeViewDemoModule),
  },
  {
    path: 'timeline',
    loadChildren: () => import('./timeline/timeline.demo.module').then(m => m.TimelineDemoModule),
  },
  { path: 'toggles', loadChildren: () => import('./toggles/toggles.demo.module').then(m => m.TogglesDemoModule) },
  {
    path: 'tooltips',
    loadChildren: () => import('./tooltips/tooltips.demo.module').then(m => m.TooltipsDemoModule),
  },
  {
    path: 'typography',
    loadChildren: () => import('./typography/typography.demo.module').then(m => m.TypographyDemoModule),
  },
  {
    path: 'vertical-nav',
    loadChildren: () => import('./vertical-nav/vertical-nav.demo.module').then(m => m.VerticalNavDemoModule),
  },
  {
    path: 'virtual-scroll',
    loadChildren: () => import('./virtual-scroll/virtual-scroll.demo.module').then(m => m.VirtualScrollDemoModule),
  },
  { path: 'wizard', loadChildren: () => import('./wizard/wizard.demo.module').then(m => m.WizardDemoModule) },
];

export const ROUTING: ModuleWithProviders<RouterModule> = RouterModule.forRoot(APP_ROUTES);
