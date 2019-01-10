/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, ViewChild } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IF_ACTIVE_ID_PROVIDER, IfActiveService } from '../../utils/conditional/if-active.service';

import { AriaService } from './providers/aria.service';
import { ClrTabContent } from './tab-content';

@Component({
  template: `
        <clr-tab-content>Content1</clr-tab-content>
        <!-- Project the content manually, so we can test without a clr-tabs container parent -->
        <ng-container [ngTemplateOutlet]="tabContent.templateRef"></ng-container>
   `,
})
class TestComponent {
  @ViewChild(ClrTabContent) tabContent: ClrTabContent;
}

describe('TabContent', () => {
  let fixture: ComponentFixture<any>;
  let compiled: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent, ClrTabContent],
      providers: [AriaService, IfActiveService, IF_ACTIVE_ID_PROVIDER],
    });
    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it('projects template content', () => {
    expect(compiled.textContent.trim()).toMatch('Content1');
  });
});
