/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IfActiveService } from '../../utils/conditional/if-active.service';

import { TabsWillyWonka } from './chocolate/tabs-willy-wonka';
import { TabsService } from './providers/tabs.service';
import { ClrTab } from './tab';
import { TABS_ID_PROVIDER } from './tabs-id.provider';
import { ClrTabsModule } from './tabs.module';

@Component({
  template: `
        <clr-tab>
            <button clrTabLink>Tab1</button>
            <clr-tab-content>Content1</clr-tab-content>
        </clr-tab>
    `,
})
class TestComponent {
  @ViewChild(ClrTab) tabInstance: ClrTab;
}

describe('Tab', () => {
  let fixture: ComponentFixture<any>;
  let instance: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ClrTabsModule],
      declarations: [TestComponent],
      providers: [IfActiveService, TabsService, TabsWillyWonka, TABS_ID_PROVIDER],
    });
    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
    instance = fixture.componentInstance.tabInstance;
  });

  it('initializes the correct aria attribute values', () => {
    instance.tabContent.ifActiveService.current = instance.self;
    fixture.detectChanges();

    expect(instance.tabLink.ariaControls).toMatch(/clr-tab-content-[0-9]/);
    expect(instance.tabContent.ariaLabelledBy).toMatch(/clr-tab-link-[0-9]/);
  });
});
