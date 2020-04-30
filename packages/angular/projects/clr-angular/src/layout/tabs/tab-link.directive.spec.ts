/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, QueryList, ViewChildren } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IfActiveService } from '../../utils/conditional/if-active.service';

import { TabsWillyWonka } from './chocolate/tabs-willy-wonka';
import { TabsService } from './providers/tabs.service';
import { ClrTabLink } from './tab-link.directive';
import { TABS_ID_PROVIDER } from './tabs-id.provider';
import { ClrTabsModule } from './tabs.module';
import { TabsLayout } from './enums/tabs-layout.enum';

@Component({
  template: `
    <clr-tab>
      <button clrTabLink [clrTabLinkInOverflow]="inOverflow">Tab1</button>
    </clr-tab>
    <clr-tab>
      <button clrTabLink [clrTabLinkInOverflow]="inOverflow">Tab2</button>
    </clr-tab>
  `,
})
class TestComponent {
  @ViewChildren(ClrTabLink) tabLinkChildren: QueryList<ClrTabLink>;
  inOverflow = false;
}

describe('TabLink Directive', () => {
  let fixture: ComponentFixture<any>;
  let compiled: any;
  let instance: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ClrTabsModule],
      declarations: [TestComponent],
      providers: [IfActiveService, TabsService, TabsWillyWonka, TABS_ID_PROVIDER],
    });

    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
    compiled = fixture.nativeElement;
    instance = fixture.componentInstance;
  });

  afterEach(() => {
    fixture.destroy();
  });

  it('has the correct css classes', () => {
    expect(compiled.querySelector('.btn-link')).toBeDefined();
    expect(compiled.querySelector('.nav-link')).toBeDefined();
  });

  it('has the correct css classes in overflow', () => {
    fixture.componentInstance.inOverflow = true;
    fixture.detectChanges();
    expect(compiled.querySelector('.btn-link')).toBeNull();
    expect(compiled.querySelector('.nav-link')).toBeNull();
  });

  it('has the correct css classes when vertical', () => {
    const tabsService = TestBed.get(TabsService) as TabsService;
    tabsService.layout = TabsLayout.VERTICAL;
    fixture.detectChanges();
    expect(compiled.querySelector('.btn-link')).toBeDefined();
    expect(compiled.querySelector('.nav-link')).toBeDefined();
  });

  it('has the correct css classes when vertical with overflow', () => {
    fixture.componentInstance.inOverflow = true;
    const tabsService = TestBed.get(TabsService) as TabsService;
    tabsService.layout = TabsLayout.VERTICAL;
    fixture.detectChanges();
    expect(compiled.querySelector('.btn-link')).toBeDefined();
    expect(compiled.querySelector('.nav-link')).toBeDefined();
  });

  it('sets the role to tab', () => {
    expect(compiled.querySelector('button').getAttribute('role')).toEqual('tab');
  });

  it('sets itself as active when clicked', () => {
    const links: ClrTabLink[] = instance.tabLinkChildren.toArray();
    expect(links[0].active).toEqual(false);
    expect(links[1].active).toEqual(false);

    const tabLinks: HTMLElement[] = compiled.querySelectorAll('button');
    tabLinks[1].click();
    fixture.detectChanges();
    expect(links[0].active).toEqual(false);
    expect(links[1].active).toEqual(true);
  });

  it('puts itself in tab sequence only if active', () => {
    const tabLinks: HTMLElement[] = compiled.querySelectorAll('button');
    tabLinks[1].click();
    fixture.detectChanges();
    expect(tabLinks[0].tabIndex).toBe(-1);
    expect(tabLinks[1].tabIndex).toBe(0);
  });
});
