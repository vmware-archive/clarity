/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
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
        loadChildren: () =>
          import('src/app/documentation/get-started/get-started.module').then(m => m.GetStartedModule),
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
        loadChildren: () =>
          import('src/app/documentation/demos/accordion/accordion.demo.module').then(m => m.AccordionDemoModule),
        data: {
          bodyClass: 'page-accordion-view',
          browserTitle: 'Accordion',
        },
      },
      {
        path: 'alerts',
        loadChildren: () =>
          import('src/app/documentation/demos/alert/alerts.demo.module').then(m => m.AlertsDemoModule),
        data: {
          bodyClass: 'page-alerts',
          browserTitle: 'Alerts',
        },
      },
      {
        path: 'app-layout',
        loadChildren: () =>
          import('src/app/documentation/demos/app-layout/app-layout.demo.module').then(m => m.AppLayoutDemoModule),
        data: {
          bodyClass: 'page-app-layout',
          browserTitle: 'Application Layout',
        },
      },
      {
        path: 'badges',
        loadChildren: () =>
          import('src/app/documentation/demos/badges/badges.demo.module').then(m => m.BadgesDemoModule),
        data: {
          bodyClass: 'page-badges',
          browserTitle: 'Badges',
        },
      },
      {
        path: 'buttons',
        loadChildren: () =>
          import('src/app/documentation/demos/buttons/buttons.demo.module').then(m => m.ButtonsDemoModule),
        data: {
          bodyClass: 'page-buttons',
          browserTitle: 'Buttons',
        },
      },
      {
        path: 'button-group',
        loadChildren: () =>
          import('src/app/documentation/demos/button-group/button-group.demo.module').then(
            m => m.ButtonGroupDemoModule
          ),
        data: {
          bodyClass: 'page-button-group',
          browserTitle: 'Button Group',
        },
      },
      {
        path: 'cards',
        loadChildren: () => import('src/app/documentation/demos/card/cards.demo.module').then(m => m.CardsDemoModule),
        data: {
          bodyClass: 'page-cards',
          browserTitle: 'Cards',
        },
      },
      {
        path: 'checkboxes',
        loadChildren: () =>
          import('src/app/documentation/demos/checkboxes/checkboxes.demo.module').then(m => m.CheckboxesDemoModule),
        data: {
          bodyClass: 'page-checkboxes',
          browserTitle: 'Checkboxes',
        },
      },
      {
        path: 'color',
        loadChildren: () => import('src/app/documentation/demos/color/color.demo.module').then(m => m.ColorDemoModule),
        data: {
          bodyClass: 'page-color',
          browserTitle: 'Color Palette',
        },
      },
      {
        path: 'datagrid',
        loadChildren: () =>
          import('src/app/documentation/demos/datagrid/datagrid.demo.module').then(m => m.DatagridDemoModule),
        data: {
          bodyClass: 'page-datagrid',
          browserTitle: 'Datagrid',
        },
      },
      {
        path: 'datepicker',
        loadChildren: () =>
          import('src/app/documentation/demos/datepicker/datepicker.demo.module').then(m => m.DatepickerDemoModule),
        data: {
          bodyClass: 'page-datepicker',
          browserTitle: 'Datepicker',
        },
      },
      {
        path: 'dropdowns',
        loadChildren: () =>
          import('src/app/documentation/demos/dropdown/dropdown.demo.module').then(m => m.DropdownDemoModule),
        data: {
          bodyClass: 'page-dropdowns',
          browserTitle: 'Dropdowns',
        },
      },
      {
        path: 'forms',
        loadChildren: () => import('src/app/documentation/demos/forms/forms.demo.module').then(m => m.FormsDemoModule),
        data: {
          bodyClass: 'page-forms',
          browserTitle: 'Forms',
        },
      },
      {
        path: 'grid',
        loadChildren: () => import('src/app/documentation/demos/grid/grid.demo.module').then(m => m.GridDemoModule),
        data: {
          bodyClass: 'page-grid',
          browserTitle: 'Grid',
        },
      },
      {
        path: 'header',
        loadChildren: () =>
          import('src/app/documentation/demos/header/header.demo.module').then(m => m.HeaderDemoModule),
        data: {
          bodyClass: 'page-header',
          browserTitle: 'Header',
        },
      },
      {
        path: 'input',
        loadChildren: () => import('src/app/documentation/demos/input/input.demo.module').then(m => m.InputDemoModule),
        data: {
          bodyClass: 'input',
          browserTitle: 'Inputs',
        },
      },
      {
        path: 'internationalization',
        loadChildren: () => import('src/app/documentation/demos/i18n/i18n.demo.module').then(m => m.I18nDemoModule),
        data: {
          bodyClass: 'i18n',
          browserTitle: 'Internationalization',
        },
      },
      {
        path: 'labels',
        loadChildren: () =>
          import('src/app/documentation/demos/labels/labels.demo.module').then(m => m.LabelsDemoModule),
        data: {
          bodyClass: 'page-labels',
          browserTitle: 'Labels',
        },
      },
      {
        path: 'lists',
        loadChildren: () => import('src/app/documentation/demos/lists/lists.demo.module').then(m => m.ListsDemoModule),
        data: {
          bodyClass: 'page-lists',
          browserTitle: 'Lists',
        },
      },
      {
        path: 'login',
        loadChildren: () => import('src/app/documentation/demos/login/login.demo.module').then(m => m.LoginDemoModule),
        data: {
          bodyClass: 'page-login',
          browserTitle: 'Login Page',
        },
      },
      {
        path: 'modals',
        loadChildren: () => import('src/app/documentation/demos/modal/modal.demo.module').then(m => m.ModalDemoModule),
        data: {
          bodyClass: 'page-modals',
          browserTitle: 'Modals',
        },
      },
      {
        path: 'navigation',
        loadChildren: () => import('src/app/documentation/demos/nav/nav.demo.module').then(m => m.NavDemoModule),
        data: {
          bodyClass: 'page-navigation',
          browserTitle: 'Navigation',
        },
      },
      {
        path: 'password',
        loadChildren: () =>
          import('src/app/documentation/demos/password/password.demo.module').then(m => m.PasswordDemoModule),
        data: {
          bodyClass: 'page-password',
          browserTitle: 'Password',
        },
      },
      {
        path: 'progress',
        loadChildren: () =>
          import('src/app/documentation/demos/progress-bars/progress-bars.demo.module').then(
            m => m.ProgressBarsDemoModule
          ),
        data: {
          bodyClass: 'page-progress',
          browserTitle: 'Progress Bars',
        },
      },
      {
        path: 'radio',
        loadChildren: () => import('src/app/documentation/demos/radio/radio.demo.module').then(m => m.RadioDemoModule),
        data: {
          bodyClass: 'page-radio',
          browserTitle: 'Radio Buttons',
        },
      },
      {
        path: 'select',
        loadChildren: () =>
          import('src/app/documentation/demos/select/select.demo.module').then(m => m.SelectDemoModule),
        data: {
          bodyClass: 'page-select-boxes',
          browserTitle: 'Select',
        },
      },
      {
        path: 'sidenav',
        loadChildren: () =>
          import('src/app/documentation/demos/sidenav/sidenav.demo.module').then(m => m.SidenavDemoModule),
        data: {
          bodyClass: 'page-sidenav',
          browserTitle: 'Sidenav',
        },
      },
      {
        path: 'signposts',
        loadChildren: () =>
          import('src/app/documentation/demos/signposts/signpost.demo.module').then(m => m.SignpostDemoModule),
        data: {
          bodyClass: 'page-signposts',
          browserTitle: 'Signposts',
        },
      },
      {
        path: 'spinners',
        loadChildren: () =>
          import('src/app/documentation/demos/spinners/spinners.demo.module').then(m => m.SpinnersDemoModule),
        data: {
          bodyClass: 'page-spinners',
          browserTitle: 'Spinners',
        },
      },
      {
        path: 'stack-view',
        loadChildren: () =>
          import('src/app/documentation/demos/stack-view/stack-view.demo.module').then(m => m.StackViewDemoModule),
        data: {
          bodyClass: 'page-stack-view',
          browserTitle: 'Stack View',
        },
      },
      {
        path: 'stepper',
        loadChildren: () =>
          import('src/app/documentation/demos/stepper/stepper.demo.module').then(m => m.StepperDemoModule),
        data: {
          bodyClass: 'page-stepper-view',
          browserTitle: 'Stepper',
        },
      },
      {
        path: 'tables',
        loadChildren: () =>
          import('src/app/documentation/demos/tables/tables.demo.module').then(m => m.TablesDemoModule),
        data: {
          bodyClass: 'page-tables',
          browserTitle: 'Tables',
        },
      },
      {
        path: 'tabs',
        loadChildren: () => import('src/app/documentation/demos/tabs/tabs.demo.module').then(m => m.TabsDemoModule),
        data: {
          bodyClass: 'page-tables',
          browserTitle: 'Tabs',
        },
      },
      {
        path: 'textarea',
        loadChildren: () =>
          import('src/app/documentation/demos/textarea/textarea.demo.module').then(m => m.TextareaDemoModule),
        data: {
          bodyClass: 'page-textarea',
          browserTitle: 'Textarea',
        },
      },
      {
        path: 'themes',
        loadChildren: () =>
          import('src/app/documentation/demos/themes/themes.demo.module').then(m => m.ThemesDemoModule),
        data: {
          bodyClass: 'page-tables',
          browserTitle: 'Clarity Themes',
        },
      },
      {
        path: 'toggle-switches',
        loadChildren: () =>
          import('src/app/documentation/demos/toggles/toggles.demo.module').then(m => m.TogglesDemoModule),
        data: {
          bodyClass: 'page-toggle-switches',
          browserTitle: 'Toggle Switches',
        },
      },
      {
        path: 'tooltips',
        loadChildren: () =>
          import('src/app/documentation/demos/tooltips/tooltips.demo.module').then(m => m.TooltipsDemoModule),
        data: {
          bodyClass: 'page-tooltips',
          browserTitle: 'Tooltips',
        },
      },
      {
        path: 'tree-view',
        loadChildren: () =>
          import('src/app/documentation/demos/tree-view/tree-view.demo.module').then(m => m.TreeDemoModule),
        data: {
          bodyClass: 'page-tree-view',
          browserTitle: 'Tree View',
        },
      },
      {
        path: 'typography',
        loadChildren: () =>
          import('src/app/documentation/demos/typography/typography.demo.module').then(m => m.TypographyDemoModule),
        data: {
          bodyClass: 'page-typography',
          browserTitle: 'Typography',
        },
      },
      {
        path: 'vertical-nav',
        loadChildren: () =>
          import('src/app/documentation/demos/vertical-nav/vertical-nav.demo.module').then(
            m => m.VerticalNavDemoModule
          ),
        data: {
          bodyClass: 'page-vertical-nav',
          browserTitle: 'Vertical Nav',
        },
      },
      {
        path: 'wizards',
        loadChildren: () =>
          import('src/app/documentation/demos/wizard/wizard.demo.module').then(m => m.WizardDemoModule),
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
