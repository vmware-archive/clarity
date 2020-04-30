/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component, ViewChild } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';

import { ClrKeyFocusModule } from './key-focus.module';
import { ClrKeyFocusItem } from './key-focus-item';

@Component({
  template: ` <button clrKeyFocusItem>Button 1</button> `,
})
class TestComponent {
  @ViewChild(ClrKeyFocusItem, { static: true })
  button: ClrKeyFocusItem;
}

let fixture: ComponentFixture<any>;
let component: TestComponent;

describe('Typescript API', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ClrKeyFocusModule],
      declarations: [TestComponent],
    });
    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
    component = fixture.componentInstance;
  });

  it('should focus host element', () => {
    component.button.focus();
    expect(document.activeElement).toBe(fixture.nativeElement.querySelector('button'));
  });
});
