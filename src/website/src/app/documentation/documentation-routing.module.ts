/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DocumentationComponent } from './documentation.component';
import { ComponentStatusComponent } from './component-status/component-status.component';

const documentationRoutes: Routes = [
  {
    path: '',
    component: DocumentationComponent,
    data: {
      bodyClass: 'layout-documentation',
      browserTitle: 'Documentation',
    },
    children: [
      {
        path: 'get-started',
        loadChildren: 'src/app/documentation/get-started/get-started.module#GetStartedModule',
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
        path: 'alerts',
        loadChildren: 'src/app/documentation/demos/alert/alerts.demo.module#AlertsDemoModule',
        data: {
          bodyClass: 'page-alerts',
          browserTitle: 'Alerts',
        },
      },
      {
        path: 'app-layout',
        loadChildren: 'src/app/documentation/demos/app-layout/app-layout.demo.module#AppLayoutDemoModule',
        data: {
          bodyClass: 'page-app-layout',
          browserTitle: 'Application Layout',
        },
      },
      {
        path: 'badges',
        loadChildren: 'src/app/documentation/demos/badges/badges.demo.module#BadgesDemoModule',
        data: {
          bodyClass: 'page-badges',
          browserTitle: 'Badges',
        },
      },
      {
        path: 'buttons',
        loadChildren: 'src/app/documentation/demos/buttons/buttons.demo.module#ButtonsDemoModule',
        data: {
          bodyClass: 'page-buttons',
          browserTitle: 'Buttons',
        },
      },
      {
        path: 'button-group',
        loadChildren: 'src/app/documentation/demos/button-group/button-group.demo.module#ButtonGroupDemoModule',
        data: {
          bodyClass: 'page-button-group',
          browserTitle: 'Button Group',
        },
      },
      {
        path: 'cards',
        loadChildren: 'src/app/documentation/demos/card/cards.demo.module#CardsDemoModule',
        data: {
          bodyClass: 'page-cards',
          browserTitle: 'Cards',
        },
      },
      {
        path: 'checkboxes',
        loadChildren: 'src/app/documentation/demos/checkboxes/checkboxes.demo.module#CheckboxesDemoModule',
        data: {
          bodyClass: 'page-checkboxes',
          browserTitle: 'Checkboxes',
        },
      },
      {
        path: 'color',
        loadChildren: 'src/app/documentation/demos/color/color.demo.module#ColorDemoModule',
        data: {
          bodyClass: 'page-color',
          browserTitle: 'Color Palette',
        },
      },
      {
        path: 'datagrid',
        loadChildren: 'src/app/documentation/demos/datagrid/datagrid.demo.module#DatagridDemoModule',
        data: {
          bodyClass: 'page-datagrid',
          browserTitle: 'Datagrid',
        },
      },
      {
        path: 'datepicker',
        loadChildren: 'src/app/documentation/demos/datepicker/datepicker.demo.module#DatepickerDemoModule',
        data: {
          bodyClass: 'page-datepicker',
          browserTitle: 'Datepicker',
        },
      },
      {
        path: 'dropdowns',
        loadChildren: 'src/app/documentation/demos/dropdown/dropdown.demo.module#DropdownDemoModule',
        data: {
          bodyClass: 'page-dropdowns',
          browserTitle: 'Dropdowns',
        },
      },
      {
        path: 'forms',
        loadChildren: 'src/app/documentation/demos/forms/forms.demo.module#FormsDemoModule',
        data: {
          bodyClass: 'page-forms',
          browserTitle: 'Forms',
        },
      },
      {
        path: 'grid',
        loadChildren: 'src/app/documentation/demos/grid/grid.demo.module#GridDemoModule',
        data: {
          bodyClass: 'page-grid',
          browserTitle: 'Grid',
        },
      },
      {
        path: 'header',
        loadChildren: 'src/app/documentation/demos/header/header.demo.module#HeaderDemoModule',
        data: {
          bodyClass: 'page-header',
          browserTitle: 'Header',
        },
      },
      {
        path: 'input',
        loadChildren: 'src/app/documentation/demos/input/input.demo.module#InputDemoModule',
        data: {
          bodyClass: 'input',
          browserTitle: 'Inputs',
        },
      },
      {
        path: 'internationalization',
        loadChildren: 'src/app/documentation/demos/i18n/i18n.demo.module#I18nDemoModule',
        data: {
          bodyClass: 'i18n',
          browserTitle: 'Internationalization',
        },
      },
      {
        path: 'labels',
        loadChildren: 'src/app/documentation/demos/labels/labels.demo.module#LabelsDemoModule',
        data: {
          bodyClass: 'page-labels',
          browserTitle: 'Labels',
        },
      },
      {
        path: 'lists',
        loadChildren: 'src/app/documentation/demos/lists/lists.demo.module#ListsDemoModule',
        data: {
          bodyClass: 'page-lists',
          browserTitle: 'Lists',
        },
      },
      {
        path: 'login',
        loadChildren: 'src/app/documentation/demos/login/login.demo.module#LoginDemoModule',
        data: {
          bodyClass: 'page-login',
          browserTitle: 'Login Page',
        },
      },
      {
        path: 'modals',
        loadChildren: 'src/app/documentation/demos/modal/modal.demo.module#ModalDemoModule',
        data: {
          bodyClass: 'page-modals',
          browserTitle: 'Modals',
        },
      },
      {
        path: 'navigation',
        loadChildren: 'src/app/documentation/demos/nav/nav.demo.module#NavDemoModule',
        data: {
          bodyClass: 'page-navigation',
          browserTitle: 'Navigation',
        },
      },
      {
        path: 'password',
        loadChildren: 'src/app/documentation/demos/password/password.demo.module#PasswordDemoModule',
        data: {
          bodyClass: 'page-password',
          browserTitle: 'Password',
        },
      },
      {
        path: 'progress',
        loadChildren: 'src/app/documentation/demos/progress-bars/progress-bars.demo.module#ProgressBarsDemoModule',
        data: {
          bodyClass: 'page-progress',
          browserTitle: 'Progress Bars',
        },
      },
      {
        path: 'radio',
        loadChildren: 'src/app/documentation/demos/radio/radio.demo.module#RadioDemoModule',
        data: {
          bodyClass: 'page-radio',
          browserTitle: 'Radio Buttons',
        },
      },
      {
        path: 'select',
        loadChildren: 'src/app/documentation/demos/select/select.demo.module#SelectDemoModule',
        data: {
          bodyClass: 'page-select-boxes',
          browserTitle: 'Select',
        },
      },
      {
        path: 'sidenav',
        loadChildren: 'src/app/documentation/demos/sidenav/sidenav.demo.module#SidenavDemoModule',
        data: {
          bodyClass: 'page-sidenav',
          browserTitle: 'Sidenav',
        },
      },
      {
        path: 'signposts',
        loadChildren: 'src/app/documentation/demos/signposts/signpost.demo.module#SignpostDemoModule',
        data: {
          bodyClass: 'page-signposts',
          browserTitle: 'Signposts',
        },
      },
      {
        path: 'spinners',
        loadChildren: 'src/app/documentation/demos/spinners/spinners.demo.module#SpinnersDemoModule',
        data: {
          bodyClass: 'page-spinners',
          browserTitle: 'Spinners',
        },
      },
      {
        path: 'stack-view',
        loadChildren: 'src/app/documentation/demos/stack-view/stack-view.demo.module#StackViewDemoModule',
        data: {
          bodyClass: 'page-stack-view',
          browserTitle: 'Stack View',
        },
      },
      {
        path: 'tables',
        loadChildren: 'src/app/documentation/demos/tables/tables.demo.module#TablesDemoModule',
        data: {
          bodyClass: 'page-tables',
          browserTitle: 'Tables',
        },
      },
      {
        path: 'tabs',
        loadChildren: 'src/app/documentation/demos/tabs/tabs.demo.module#TabsDemoModule',
        data: {
          bodyClass: 'page-tables',
          browserTitle: 'Tabs',
        },
      },
      {
        path: 'textarea',
        loadChildren: 'src/app/documentation/demos/textarea/textarea.demo.module#TextareaDemoModule',
        data: {
          bodyClass: 'page-textarea',
          browserTitle: 'Textarea',
        },
      },
      {
        path: 'themes',
        loadChildren: 'src/app/documentation/demos/themes/themes.demo.module#ThemesDemoModule',
        data: {
          bodyClass: 'page-tables',
          browserTitle: 'Clarity Themes',
        },
      },
      {
        path: 'toggle-switches',
        loadChildren: 'src/app/documentation/demos/toggles/toggles.demo.module#TogglesDemoModule',
        data: {
          bodyClass: 'page-toggle-switches',
          browserTitle: 'Toggle Switches',
        },
      },
      {
        path: 'tooltips',
        loadChildren: 'src/app/documentation/demos/tooltips/tooltips.demo.module#TooltipsDemoModule',
        data: {
          bodyClass: 'page-tooltips',
          browserTitle: 'Tooltips',
        },
      },
      {
        path: 'tree-view',
        loadChildren: 'src/app/documentation/demos/tree-view/tree-view.demo.module#TreeDemoModule',
        data: {
          bodyClass: 'page-tree-view',
          browserTitle: 'Tree View',
        },
      },
      {
        path: 'typography',
        loadChildren: 'src/app/documentation/demos/typography/typography.demo.module#TypographyDemoModule',
        data: {
          bodyClass: 'page-typography',
          browserTitle: 'Typography',
        },
      },
      {
        path: 'vertical-nav',
        loadChildren: 'src/app/documentation/demos/vertical-nav/vertical-nav.demo.module#VerticalNavDemoModule',
        data: {
          bodyClass: 'page-vertical-nav',
          browserTitle: 'Vertical Nav',
        },
      },
      {
        path: 'wizards',
        loadChildren: 'src/app/documentation/demos/wizard/wizard.demo.module#WizardDemoModule',
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
