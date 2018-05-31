/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IfOpenService } from '../../utils/conditional/if-open.service';

import { ClrTabOverflowContent } from './tab-overflow-content';

@Component({
  template: `
        <clr-tab-overflow-content>
            Hello world
        </clr-tab-overflow-content>
    `,
})
class TestComponent {}

describe('TabOverflowContent', () => {
  let fixture: ComponentFixture<any>;
  let compiled: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClrTabOverflowContent, TestComponent],
      providers: [IfOpenService],
    });

    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it('has the correct css classes', () => {
    expect(compiled.querySelector('.dropdown-menu')).not.toBeNull();
  });

  it('projects content', () => {
    expect(compiled.textContent.trim()).toMatch('Hello world');
  });
});
