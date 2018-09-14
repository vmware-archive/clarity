/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
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

@Component({
  template: `
        <clr-tab>
            <button clrTabLink>Tab1</button>
        </clr-tab>
        <clr-tab>
            <button clrTabLink>Tab2</button>
        </clr-tab>
    `,
})
class TestComponent {
  @ViewChildren(ClrTabLink) tabLinkChildren: QueryList<ClrTabLink>;
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

  it('has the correct css classes', () => {
    expect(compiled.querySelector('.nav-item')).not.toBeNull();
    expect(compiled.querySelector('.nav-link')).not.toBeNull();
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
});
