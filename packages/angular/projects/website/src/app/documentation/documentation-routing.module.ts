/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DocumentationComponent } from './documentation.component';
import { ComponentStatusComponent } from './component-status/component-status.component';

const documentationRoutes: Routes = [
  {
    path: `documentation`,
    component: DocumentationComponent,
    data: {
      bodyClass: 'layout-documentation',
      browserTitle: 'Documentation',
    },
    children: [
      {
        path: 'get-started',
        loadChildren: () => import('./get-started/get-started.module').then(m => m.GetStartedModule),
      },
      {
        path: '',
        component: ComponentStatusComponent,
        data: {
          bodyClass: 'page-documentation',
          browserTitle: 'Documentation',
        },
      },
      {
        path: 'accordion',
        loadChildren: () => import('./demos/accordion/accordion.demo.module').then(m => m.AccordionDemoModule),
        data: {
          bodyClass: 'page-accordion-view',
          browserTitle: 'Accordion',
        },
      },
      {
        path: 'alerts',
        loadChildren: () => import('./demos/alert/alerts.demo.module').then(m => m.AlertsDemoModule),
        data: {
          bodyClass: 'page-alerts',
          browserTitle: 'Alerts',
        },
      },
      {
        path: 'app-layout',
        loadChildren: () => import('./demos/app-layout/app-layout.demo.module').then(m => m.AppLayoutDemoModule),
        data: {
          bodyClass: 'page-app-layout',
          browserTitle: 'Application Layout',
        },
      },
      {
        path: 'accessibility',
        loadChildren: () => import('./demos/a11y/a11y.demo.module').then(m => m.AccessibilityDemoModule),
        data: {
          bodyClass: 'page-app-layout',
          browserTitle: 'Accessibility',
        },
      },
      {
        path: 'badges',
        loadChildren: () => import('./demos/badges/badges.demo.module').then(m => m.BadgesDemoModule),
        data: {
          bodyClass: 'page-badges',
          browserTitle: 'Badges',
        },
      },
      {
        path: 'buttons',
        loadChildren: () => import('./demos/buttons/buttons.demo.module').then(m => m.ButtonsDemoModule),
        data: {
          bodyClass: 'page-buttons',
          browserTitle: 'Buttons',
        },
      },
      {
        path: 'button-group',
        loadChildren: () => import('./demos/button-group/button-group.demo.module').then(m => m.ButtonGroupDemoModule),
        data: {
          bodyClass: 'page-button-group',
          browserTitle: 'Button Group',
        },
      },
      {
        path: 'cards',
        loadChildren: () => import('./demos/card/cards.demo.module').then(m => m.CardsDemoModule),
        data: {
          bodyClass: 'page-cards',
          browserTitle: 'Cards',
        },
      },
      {
        path: 'checkboxes',
        loadChildren: () => import('./demos/checkboxes/checkboxes.demo.module').then(m => m.CheckboxesDemoModule),
        data: {
          bodyClass: 'page-checkboxes',
          browserTitle: 'Checkboxes',
        },
      },
      {
        path: 'color',
        loadChildren: () => import('./demos/color/color.demo.module').then(m => m.ColorDemoModule),
        data: {
          bodyClass: 'page-color',
          browserTitle: 'Color Palette',
        },
      },
      {
        path: 'combobox',
        loadChildren: () => import('./demos/combobox/combobox.demo.module').then(m => m.ComboboxDemoModule),
        data: {
          bodyClass: 'page-combobox',
          browserTitle: 'Combobox',
        },
      },
      {
        path: 'datagrid',
        loadChildren: () => import('./demos/datagrid/datagrid.demo.module').then(m => m.DatagridDemoModule),
        data: {
          bodyClass: 'page-datagrid',
          browserTitle: 'Datagrid',
        },
      },
      {
        path: 'datalist',
        loadChildren: () => import('./demos/datalist/datalist.module').then(m => m.DatalistDemoModule),
        data: {
          bodyClass: 'page-datalist',
          browserTitle: 'Datalist',
        },
      },
      {
        path: 'datepicker',
        loadChildren: () => import('./demos/datepicker/datepicker.demo.module').then(m => m.DatepickerDemoModule),
        data: {
          bodyClass: 'page-datepicker',
          browserTitle: 'Datepicker',
        },
      },
      {
        path: 'dropdowns',
        loadChildren: () => import('./demos/dropdown/dropdown.demo.module').then(m => m.DropdownDemoModule),
        data: {
          bodyClass: 'page-dropdowns',
          browserTitle: 'Dropdowns',
        },
      },
      {
        path: 'forms',
        loadChildren: () => import('./demos/forms/forms.demo.module').then(m => m.FormsDemoModule),
        data: {
          bodyClass: 'page-forms',
          browserTitle: 'Forms',
        },
      },
      {
        path: 'grid',
        loadChildren: () => import('./demos/grid/grid.demo.module').then(m => m.GridDemoModule),
        data: {
          bodyClass: 'page-grid',
          browserTitle: 'Grid',
        },
      },
      {
        path: 'header',
        loadChildren: () => import('./demos/header/header.demo.module').then(m => m.HeaderDemoModule),
        data: {
          bodyClass: 'page-header',
          browserTitle: 'Header',
        },
      },
      {
        path: 'input',
        loadChildren: () => import('./demos/input/input.demo.module').then(m => m.InputDemoModule),
        data: {
          bodyClass: 'input',
          browserTitle: 'Inputs',
        },
      },
      {
        path: 'internationalization',
        loadChildren: () => import('./demos/i18n/i18n.demo.module').then(m => m.I18nDemoModule),
        data: {
          bodyClass: 'i18n',
          browserTitle: 'Internationalization',
        },
      },
      {
        path: 'labels',
        loadChildren: () => import('./demos/labels/labels.demo.module').then(m => m.LabelsDemoModule),
        data: {
          bodyClass: 'page-labels',
          browserTitle: 'Labels',
        },
      },
      {
        path: 'lists',
        loadChildren: () => import('./demos/lists/lists.demo.module').then(m => m.ListsDemoModule),
        data: {
          bodyClass: 'page-lists',
          browserTitle: 'Lists',
        },
      },
      {
        path: 'login',
        loadChildren: () => import('./demos/login/login.demo.module').then(m => m.LoginDemoModule),
        data: {
          bodyClass: 'page-login',
          browserTitle: 'Login Page',
        },
      },
      {
        path: 'modals',
        loadChildren: () => import('./demos/modal/modal.demo.module').then(m => m.ModalDemoModule),
        data: {
          bodyClass: 'page-modals',
          browserTitle: 'Modals',
        },
      },
      {
        path: 'navigation',
        loadChildren: () => import('./demos/nav/nav.demo.module').then(m => m.NavDemoModule),
        data: {
          bodyClass: 'page-navigation',
          browserTitle: 'Navigation',
        },
      },
      {
        path: 'password',
        loadChildren: () => import('./demos/password/password.demo.module').then(m => m.PasswordDemoModule),
        data: {
          bodyClass: 'page-password',
          browserTitle: 'Password',
        },
      },
      {
        path: 'progress',
        loadChildren: () =>
          import('./demos/progress-bars/progress-bars.demo.module').then(m => m.ProgressBarsDemoModule),
        data: {
          bodyClass: 'page-progress',
          browserTitle: 'Progress Bars',
        },
      },
      {
        path: 'radio',
        loadChildren: () => import('./demos/radio/radio.demo.module').then(m => m.RadioDemoModule),
        data: {
          bodyClass: 'page-radio',
          browserTitle: 'Radio Buttons',
        },
      },
      {
        path: 'range',
        loadChildren: () => import('./demos/range/range.module').then(m => m.RangeDemoModule),
        data: {
          bodyClass: 'page-range',
          browserTitle: 'Range Input',
        },
      },
      {
        path: 'select',
        loadChildren: () => import('./demos/select/select.demo.module').then(m => m.SelectDemoModule),
        data: {
          bodyClass: 'page-select-boxes',
          browserTitle: 'Select',
        },
      },
      {
        path: 'sidenav',
        loadChildren: () => import('./demos/sidenav/sidenav.demo.module').then(m => m.SidenavDemoModule),
        data: {
          bodyClass: 'page-sidenav',
          browserTitle: 'Sidenav',
        },
      },
      {
        path: 'signposts',
        loadChildren: () => import('./demos/signposts/signpost.demo.module').then(m => m.SignpostDemoModule),
        data: {
          bodyClass: 'page-signposts',
          browserTitle: 'Signposts',
        },
      },
      {
        path: 'spinners',
        loadChildren: () => import('./demos/spinners/spinners.demo.module').then(m => m.SpinnersDemoModule),
        data: {
          bodyClass: 'page-spinners',
          browserTitle: 'Spinners',
        },
      },
      {
        path: 'stack-view',
        loadChildren: () => import('./demos/stack-view/stack-view.demo.module').then(m => m.StackViewDemoModule),
        data: {
          bodyClass: 'page-stack-view',
          browserTitle: 'Stack View',
        },
      },
      {
        path: 'stepper',
        loadChildren: () => import('./demos/stepper/stepper.demo.module').then(m => m.StepperDemoModule),
        data: {
          bodyClass: 'page-stepper-view',
          browserTitle: 'Stepper',
        },
      },
      {
        path: 'tables',
        loadChildren: () => import('./demos/tables/tables.demo.module').then(m => m.TablesDemoModule),
        data: {
          bodyClass: 'page-tables',
          browserTitle: 'Tables',
        },
      },
      {
        path: 'tabs',
        loadChildren: () => import('./demos/tabs/tabs.demo.module').then(m => m.TabsDemoModule),
        data: {
          bodyClass: 'page-tables',
          browserTitle: 'Tabs',
        },
      },
      {
        path: 'textarea',
        loadChildren: () => import('./demos/textarea/textarea.demo.module').then(m => m.TextareaDemoModule),
        data: {
          bodyClass: 'page-textarea',
          browserTitle: 'Textarea',
        },
      },
      {
        path: 'themes',
        loadChildren: () => import('./demos/themes/themes.demo.module').then(m => m.ThemesDemoModule),
        data: {
          bodyClass: 'page-tables',
          browserTitle: 'Clarity Themes',
        },
      },
      {
        path: 'timeline',
        loadChildren: () => import('./demos/timeline/timeline.demo.module').then(m => m.TimelineDemoModule),
        data: {
          bodyClass: 'page-tables',
          browserTitle: 'Timeline',
        },
      },
      {
        path: 'toggle-switches',
        loadChildren: () => import('./demos/toggles/toggles.demo.module').then(m => m.TogglesDemoModule),
        data: {
          bodyClass: 'page-toggle-switches',
          browserTitle: 'Toggle Switches',
        },
      },
      {
        path: 'tooltips',
        loadChildren: () => import('./demos/tooltips/tooltips.demo.module').then(m => m.TooltipsDemoModule),
        data: {
          bodyClass: 'page-tooltips',
          browserTitle: 'Tooltips',
        },
      },
      {
        path: 'tree-view',
        loadChildren: () => import('./demos/tree-view/tree-view.demo.module').then(m => m.TreeDemoModule),
        data: {
          bodyClass: 'page-tree-view',
          browserTitle: 'Tree View',
        },
      },
      {
        path: 'typography',
        loadChildren: () => import('./demos/typography/typography.demo.module').then(m => m.TypographyDemoModule),
        data: {
          bodyClass: 'page-typography',
          browserTitle: 'Typography',
        },
      },
      {
        path: 'vertical-nav',
        loadChildren: () => import('./demos/vertical-nav/vertical-nav.demo.module').then(m => m.VerticalNavDemoModule),
        data: {
          bodyClass: 'page-vertical-nav',
          browserTitle: 'Vertical Nav',
        },
      },
      {
        path: 'wizards',
        loadChildren: () => import('./demos/wizard/wizard.demo.module').then(m => m.WizardDemoModule),
        data: {
          bodyClass: 'page-wizards',
          browserTitle: 'Wizards',
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(documentationRoutes)],
  exports: [RouterModule],
})
export class DocumentationRoutingModule {}
