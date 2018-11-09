/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { KSButtons } from './containers/buttons/buttons.component';
import { KSCards } from './containers/cards/cards.component';
import { KSColors } from './containers/colors/colors.component';
import { KSDatagrid } from './containers/data/datagrid.component';
import { KSStackView } from './containers/data/stackview.component';
import { KSDragAndDrop } from './containers/drag-and-drop/dnd.component';
import { KSAlerts } from './containers/emphasis/alerts.component';
import { KSBadges } from './containers/emphasis/badges.component';
import { KSLabels } from './containers/emphasis/labels.component';
import { KSCheckboxes } from './containers/forms/checkboxes.component';
import { KSDatepicker } from './containers/forms/datepicker.component';
import { KSForms } from './containers/forms/forms.component';
import { KSInputs } from './containers/forms/inputs.component';
import { KSRadios } from './containers/forms/radios.component';
import { KSSelects } from './containers/forms/selects.component';
import { KSIconSelection } from './containers/iconography/icon-selection.component';
import { KSLists } from './containers/lists/lists.component';
import { KSLogin } from './containers/login/login.component';
import { KSModals } from './containers/modal/modals.component';
import { KSAbbeyRoadDemo } from './containers/nav/beatles/abbey-road';
import { KSBeatlesDemo } from './containers/nav/beatles/beatles';
import { KSRevolverDemo } from './containers/nav/beatles/revolver';
import { KSRubberSoulDemo } from './containers/nav/beatles/rubber-soul';
import { KSTabs } from './containers/nav/tabs.component';
import { KSDayAndAgeDemo } from './containers/nav/the-killers/day-and-age';
import { KSHotFussDemo } from './containers/nav/the-killers/hot-fuss';
import { KSSamsTownDemo } from './containers/nav/the-killers/sams-town';
import { KSKillersDemo } from './containers/nav/the-killers/the-killers';
import { KSVerticalNav } from './containers/nav/vertical-nav.component';
import { KSWikipediaDemo } from './containers/nav/wikipedia/wikipedia';
import { KSDropdowns } from './containers/popover/dropdowns.component';
import { KSSignposts } from './containers/popover/signposts.component';
import { KSTooltips } from './containers/popover/tooltips.component';
import { KSProgressBars } from './containers/progress/progress-bars.component';
import { KSSpinners } from './containers/spinners/spinners.component';
import { KSTables } from './containers/tables/tables.component';
import { KSTypography } from './containers/typography/typography.component';
import { KSWizards } from './containers/wizard/wizards.component';
import { KSToggle } from './containers/forms/toggle.component';

export const routes: Routes = [
  { path: '', redirectTo: 'alerts', pathMatch: 'full' },
  { path: 'alerts', component: KSAlerts, data: { state: 'alerts' } },
  { path: 'badges', component: KSBadges, data: { state: 'badges' } },
  { path: 'buttons', component: KSButtons, data: { state: 'buttons' } },
  { path: 'cards', component: KSCards, data: { state: 'cards' } },
  { path: 'colors', component: KSColors, data: { state: 'colors' } },
  { path: 'datagrids', component: KSDatagrid, data: { state: 'datagrids' } },
  { path: 'drag-and-drop', component: KSDragAndDrop, data: { state: 'drag-and-drop' } },
  { path: 'stackviews', component: KSStackView, data: { state: 'stackviews' } },
  { path: 'labels', component: KSLabels, data: { state: 'labels' } },
  { path: 'lists', component: KSLists, data: { state: 'lists' } },
  { path: 'login', component: KSLogin, data: { state: 'login' } },
  { path: 'checkboxes', component: KSCheckboxes, data: { state: 'checkboxes' } },
  { path: 'datepicker', component: KSDatepicker, data: { state: 'datepicker' } },
  { path: 'forms', component: KSForms, data: { state: 'forms' } },
  { path: 'iconography', component: KSIconSelection, data: { state: 'iconography' } },
  { path: 'inputs', component: KSInputs, data: { state: 'inputs' } },
  { path: 'radios', component: KSRadios, data: { state: 'radios' } },
  { path: 'selects', component: KSSelects, data: { state: 'selects' } },
  { path: 'modals', component: KSModals, data: { state: 'modals' } },
  { path: 'tabs', component: KSTabs, data: { state: 'tabs' } },
  { path: 'toggle', component: KSToggle, data: { state: 'toggle' } },
  { path: 'vertical-nav', component: KSVerticalNav, data: { state: 'vertical-nav' } },
  {
    path: 'vertical-nav',
    component: KSVerticalNav,
    children: [
      { path: '', redirectTo: 'beatles', pathMatch: 'full' },
      { path: 'beatles', component: KSBeatlesDemo, data: { state: 'beatles' } },
      { path: 'beatles/abbey-road', component: KSAbbeyRoadDemo, data: { state: 'abbey-road' } },
      { path: 'beatles/revolver', component: KSRevolverDemo, data: { state: 'revolver' } },
      { path: 'beatles/rubber-soul', component: KSRubberSoulDemo, data: { state: 'rubber-soul' } },
      { path: 'killers', component: KSKillersDemo, data: { state: 'killers' } },
      { path: 'killers/hot-fuss', component: KSHotFussDemo, data: { state: 'hot-fuss' } },
      { path: 'killers/day-and-age', component: KSDayAndAgeDemo, data: { state: 'day-and-age' } },
      { path: 'killers/sams-town', component: KSSamsTownDemo, data: { state: 'sams-town' } },
      { path: 'wikipedia', component: KSWikipediaDemo, data: { state: 'wikipedia' } },
    ],
  },
  { path: 'dropdowns', component: KSDropdowns, data: { state: 'dropdowns' } },
  { path: 'signposts', component: KSSignposts, data: { state: 'signposts' } },
  { path: 'tooltips', component: KSTooltips, data: { state: 'tooltips' } },
  { path: 'typography', component: KSTypography, data: { state: 'typography' } },
  { path: 'wizards', component: KSWizards, data: { state: 'wizards' } },
  { path: 'progress-bars', component: KSProgressBars, data: { state: 'progress-bars' } },
  { path: 'spinners', component: KSSpinners, data: { state: 'spinners' } },
  { path: 'tables', component: KSTables, data: { state: 'tables' } },
];

@NgModule({ imports: [RouterModule.forRoot(routes)], exports: [RouterModule] })
export class AppRoutingModule {}
