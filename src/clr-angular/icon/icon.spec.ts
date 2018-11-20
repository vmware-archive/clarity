/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ClrIconCustomTag } from './icon';

describe('ClrIcon component', function() {
  let fixture, icon;
  beforeEach(function() {
    TestBed.configureTestingModule({
      declarations: [ClrIconCustomTag, TestIcon],
    });
    fixture = TestBed.createComponent(TestIcon);
    icon = fixture.debugElement.query(By.directive(ClrIconCustomTag));
    fixture.detectChanges();
  });

  afterEach(function() {
    fixture.destroy();
  });

  it('binds the shape input to shape attribute', function() {
    expect(fixture.componentInstance.shape).toEqual('home');
    expect(icon.nativeElement.getAttribute('shape')).toEqual('home');
  });
});

@Component({ template: `<clr-icon [shape]="shape"></clr-icon>` })
export class TestIcon {
  shape = 'home';
}
