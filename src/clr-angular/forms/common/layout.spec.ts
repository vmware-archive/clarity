/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ClrLayout } from './layout';
import { LayoutService, Layouts } from './providers/layout.service';

@Component({ template: `<div clrLayout="vertical"></div>`, providers: [LayoutService] })
class VerticalTest {}

@Component({ template: `<div clrLayout="invalid"></div>`, providers: [LayoutService] })
class InvalidTest {}

export default function(): void {
  describe('ClrLayout', () => {
    it('sets the layout selection in LayoutService on init if provided', function() {
      TestBed.configureTestingModule({ declarations: [ClrLayout, VerticalTest] });
      const fixture = TestBed.createComponent(VerticalTest);
      const service = fixture.debugElement.injector.get(LayoutService);
      fixture.detectChanges();
      expect(service.layout).toEqual(Layouts.VERTICAL);
    });

    it('accepts layout option through layout input binding', function() {
      TestBed.configureTestingModule({ declarations: [ClrLayout, VerticalTest] });
      const fixture = TestBed.createComponent(VerticalTest);
      const component = fixture.debugElement.query(By.directive(ClrLayout));
      const directive = component.injector.get(ClrLayout);
      const service = fixture.debugElement.injector.get(LayoutService);
      fixture.detectChanges();
      expect(directive.layout).toEqual('vertical');
      expect(service.layout).toEqual(Layouts.VERTICAL);
    });

    it('ignores invalid layout types', function() {
      TestBed.configureTestingModule({ declarations: [ClrLayout, InvalidTest] });
      const fixture = TestBed.createComponent(InvalidTest);
      const service = fixture.debugElement.injector.get(LayoutService);
      fixture.detectChanges();
      expect(service.layout).toEqual(Layouts.HORIZONTAL);
    });
  });
}
