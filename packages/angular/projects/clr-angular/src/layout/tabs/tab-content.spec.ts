/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IF_ACTIVE_ID_PROVIDER, IfActiveService } from '../../utils/conditional/if-active.service';

import { AriaService } from './providers/aria.service';
import { ClrTabContent } from './tab-content';
import { TabsService } from './providers/tabs.service';

@Component({
  selector: 'test-wrapper',
  template: ` <ng-container #tabContentViewContainer></ng-container> `,
})
class TestWrapper {
  @ViewChild('tabContentViewContainer', { read: ViewContainerRef, static: true })
  set tabContentViewContainer(value: ViewContainerRef) {
    this.tabsService.tabContentViewContainer = value;
  }
  constructor(private tabsService: TabsService) {}
}

@Component({
  template: `
    <test-wrapper>
      <clr-tab-content>Content1</clr-tab-content>
    </test-wrapper>
  `,
})
class TestComponent {}

describe('TabContent', () => {
  let fixture: ComponentFixture<any>;
  let compiled: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent, TestWrapper, ClrTabContent],
      providers: [AriaService, IfActiveService, IF_ACTIVE_ID_PROVIDER, TabsService],
    });
    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it('projects template content', () => {
    expect(compiled.textContent.trim()).toMatch('Content1');
  });
});
