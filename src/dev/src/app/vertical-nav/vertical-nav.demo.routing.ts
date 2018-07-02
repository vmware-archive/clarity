/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VerticalNavAllCases } from './all-cases/vertical-all-cases.demo';
import { VerticalNavBasicDemo } from './basic/vertical-nav-basic';
import { VerticalNavCollapsibleDemo } from './collapsible/vertical-nav-collapsible';
import { VerticalNavDirectIconDemo } from './direct-icon/vertical-nav-icon';
import { VerticalNavHeaderAndDividerDemo } from './header-and-divider/vertical-nav-header-and-divider';
import { VerticalNavNestedIconMenusDemo } from './nested-icon-menus/vertical-nav-nested-icon-menus';
import { VerticalNavNestedMenusDemo } from './nested-menus/vertical-nav-nested-menus';
import { VerticalNavPartiallyNestedIconMenusDemo } from './partially-nested-icon-menu/vertical-nav-partial-nested-icon-menus';
import { VerticalNavPartiallyNestedMenusDemo } from './partially-nested-menu/vertical-nav-partial-nested-menus';
import { AbbeyRoadDemo } from './routing/beatles/abbey-road';
import { BeatlesDemo } from './routing/beatles/beatles';
import { RevolverDemo } from './routing/beatles/revolver';
import { RubberSoulDemo } from './routing/beatles/rubber-soul';
import { DayAndAgeDemo } from './routing/the-killers/day-and-age';
import { HotFussDemo } from './routing/the-killers/hot-fuss';
import { SamsTownDemo } from './routing/the-killers/sams-town';
import { KillersDemo } from './routing/the-killers/the-killers';
import { VerticalNavRoutingDemo } from './routing/vertical-nav-routing';
import { WikipediaDemo } from './routing/wikipedia';
import { VerticalNavStaticDemo } from './static/vertical-nav-static.demo';
import { AbbeyRoad2Demo } from './unstructured-routes/beatles/abbey-road';
import { Beatles2Demo } from './unstructured-routes/beatles/beatles';
import { Revolver2Demo } from './unstructured-routes/beatles/revolver';
import { RubberSoul2Demo } from './unstructured-routes/beatles/rubber-soul';
import { DayAndAge2Demo } from './unstructured-routes/the-killers/day-and-age';
import { HotFuss2Demo } from './unstructured-routes/the-killers/hot-fuss';
import { SamsTown2Demo } from './unstructured-routes/the-killers/sams-town';
import { Killers2Demo } from './unstructured-routes/the-killers/the-killers';
import { UnstructuredRoutesDemo } from './unstructured-routes/unstructured-routes';
import { Wikipedia2Demo } from './unstructured-routes/wikipedia';
import { VerticalNavDemo } from './vertical-nav.demo';
import { AbbeyRoad1Demo } from './without-expanded-directive/beatles/abbey-road';
import { Beatles1Demo } from './without-expanded-directive/beatles/beatles';
import { Revolver1Demo } from './without-expanded-directive/beatles/revolver';
import { RubberSoul1Demo } from './without-expanded-directive/beatles/rubber-soul';
import { DayAndAge1Demo } from './without-expanded-directive/the-killers/day-and-age';
import { HotFuss1Demo } from './without-expanded-directive/the-killers/hot-fuss';
import { SamsTown1Demo } from './without-expanded-directive/the-killers/sams-town';
import { Killers1Demo } from './without-expanded-directive/the-killers/the-killers';
import { Wikipedia1Demo } from './without-expanded-directive/wikipedia';
import { WithoutExpandedDirectiveDemo } from './without-expanded-directive/without-expanded-directive';

const ROUTES: Routes = [
  {
    path: '',
    component: VerticalNavDemo,
    children: [
      { path: '', redirectTo: 'static', pathMatch: 'full' },
      { path: 'static', component: VerticalNavStaticDemo },
      { path: 'basic', component: VerticalNavBasicDemo },
      { path: 'header-and-divider', component: VerticalNavHeaderAndDividerDemo },
      { path: 'collapsible', component: VerticalNavCollapsibleDemo },
      { path: 'icons', component: VerticalNavDirectIconDemo },
      { path: 'nested-menus', component: VerticalNavNestedMenusDemo },
      { path: 'nested-icon-menus', component: VerticalNavNestedIconMenusDemo },
      { path: 'partial-nested-menus', component: VerticalNavPartiallyNestedMenusDemo },
      { path: 'partial-nested-icon-menus', component: VerticalNavPartiallyNestedIconMenusDemo },
      {
        path: 'routing',
        component: VerticalNavRoutingDemo,
        children: [
          { path: '', redirectTo: 'beatles', pathMatch: 'full' },
          { path: 'beatles', component: BeatlesDemo },
          { path: 'beatles/abbey-road', component: AbbeyRoadDemo },
          { path: 'beatles/revolver', component: RevolverDemo },
          { path: 'beatles/rubber-soul', component: RubberSoulDemo },
          { path: 'killers', component: KillersDemo },
          { path: 'killers/hot-fuss', component: HotFussDemo },
          { path: 'killers/day-and-age', component: DayAndAgeDemo },
          { path: 'killers/sams-town', component: SamsTownDemo },
          { path: 'wikipedia', component: WikipediaDemo },
        ],
      },
      {
        path: 'without-expanded-directive',
        component: WithoutExpandedDirectiveDemo,
        children: [
          { path: '', redirectTo: 'beatles', pathMatch: 'full' },
          { path: 'beatles', component: Beatles1Demo },
          { path: 'beatles/abbey-road', component: AbbeyRoad1Demo },
          { path: 'beatles/revolver', component: Revolver1Demo },
          { path: 'beatles/rubber-soul', component: RubberSoul1Demo },
          { path: 'killers', component: Killers1Demo },
          { path: 'killers/hot-fuss', component: HotFuss1Demo },
          { path: 'killers/day-and-age', component: DayAndAge1Demo },
          { path: 'killers/sams-town', component: SamsTown1Demo },
          { path: 'wikipedia', component: Wikipedia1Demo },
        ],
      },
      {
        path: 'unstructured-routes',
        component: UnstructuredRoutesDemo,
        children: [
          { path: '', redirectTo: 'beatles', pathMatch: 'full' },
          { path: 'beatles', component: Beatles2Demo },
          { path: 'abbey-road', component: AbbeyRoad2Demo },
          { path: 'revolver', component: Revolver2Demo },
          { path: 'rubber-soul', component: RubberSoul2Demo },
          { path: 'killers', component: Killers2Demo },
          { path: 'hot-fuss', component: HotFuss2Demo },
          { path: 'day-and-age', component: DayAndAge2Demo },
          { path: 'sams-town', component: SamsTown2Demo },
          { path: 'wikipedia', component: Wikipedia2Demo },
        ],
      },
      { path: 'all', component: VerticalNavAllCases },
    ],
  },
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
