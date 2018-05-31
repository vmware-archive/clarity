/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ClarityModule } from '@clr/angular';

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
import { VerticalNavCases } from './vertical-nav-cases';
import { VerticalNavDemo } from './vertical-nav.demo';
import { ROUTING } from './vertical-nav.demo.routing';
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

@NgModule({
  imports: [CommonModule, FormsModule, ClarityModule, ROUTING],
  declarations: [
    VerticalNavDemo,
    VerticalNavStaticDemo,
    VerticalNavBasicDemo,
    VerticalNavCollapsibleDemo,
    VerticalNavDirectIconDemo,
    VerticalNavNestedMenusDemo,
    VerticalNavNestedIconMenusDemo,
    VerticalNavPartiallyNestedMenusDemo,
    VerticalNavPartiallyNestedIconMenusDemo,
    VerticalNavRoutingDemo,
    VerticalNavAllCases,
    BeatlesDemo,
    AbbeyRoadDemo,
    RevolverDemo,
    RubberSoulDemo,
    KillersDemo,
    DayAndAgeDemo,
    HotFussDemo,
    SamsTownDemo,
    WikipediaDemo,
    Beatles1Demo,
    AbbeyRoad1Demo,
    Revolver1Demo,
    RubberSoul1Demo,
    DayAndAge1Demo,
    Killers1Demo,
    HotFuss1Demo,
    SamsTown1Demo,
    Wikipedia1Demo,
    WithoutExpandedDirectiveDemo,
    Beatles2Demo,
    AbbeyRoad2Demo,
    Revolver2Demo,
    RubberSoul2Demo,
    DayAndAge2Demo,
    Killers2Demo,
    HotFuss2Demo,
    SamsTown2Demo,
    Wikipedia2Demo,
    UnstructuredRoutesDemo,
    VerticalNavHeaderAndDividerDemo,
  ],
  exports: [
    VerticalNavDemo,
    VerticalNavStaticDemo,
    VerticalNavBasicDemo,
    VerticalNavCollapsibleDemo,
    VerticalNavDirectIconDemo,
    VerticalNavNestedMenusDemo,
    VerticalNavNestedIconMenusDemo,
    VerticalNavPartiallyNestedMenusDemo,
    VerticalNavPartiallyNestedIconMenusDemo,
    VerticalNavRoutingDemo,
    VerticalNavAllCases,
    BeatlesDemo,
    AbbeyRoadDemo,
    RevolverDemo,
    RubberSoulDemo,
    KillersDemo,
    DayAndAgeDemo,
    HotFussDemo,
    SamsTownDemo,
    WikipediaDemo,
    Beatles1Demo,
    AbbeyRoad1Demo,
    Revolver1Demo,
    RubberSoul1Demo,
    DayAndAge1Demo,
    Killers1Demo,
    HotFuss1Demo,
    SamsTown1Demo,
    Wikipedia1Demo,
    WithoutExpandedDirectiveDemo,
    Beatles2Demo,
    AbbeyRoad2Demo,
    Revolver2Demo,
    RubberSoul2Demo,
    DayAndAge2Demo,
    Killers2Demo,
    HotFuss2Demo,
    SamsTown2Demo,
    Wikipedia2Demo,
    UnstructuredRoutesDemo,
    VerticalNavHeaderAndDividerDemo,
  ],
  providers: [VerticalNavCases],
})
export class VerticalNavDemoModule {}
