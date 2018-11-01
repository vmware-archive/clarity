/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ClrIconModule } from '../../icon/icon.module';
import { ClrInputContainer } from '../input/input-container';

import { ClrLabel } from './label';
import { ControlIdService } from './providers/control-id.service';
import { Layouts, LayoutService } from './providers/layout.service';
import { NgControlService } from './providers/ng-control.service';

@Component({ template: `<label></label>` })
class NoForTest {}

@Component({ template: `<label for="hello"></label>` })
class ExplicitForTest {}

@Component({
  template: `<div><label for="hello"></label></div>`,
  providers: [ControlIdService],
})
class ContainerizedTest {}

@Component({
  template: `<div><label for="hello"></label></div>`,
  providers: [NgControlService],
})
class WrapperTest {}

@Component({
  template: `<label for="hello" class="clr-col-xs-12 clr-col-md-3"></label>`,
})
class ExistingGridTest {}

export default function(): void {
  describe('ClrLabel', () => {
    it("doesn't crash if it is not used in an Angular form", function() {
      TestBed.configureTestingModule({ declarations: [ClrLabel, NoForTest] });
      expect(() => {
        const fixture = TestBed.createComponent(NoForTest);
        fixture.detectChanges();
      }).not.toThrow();
    });

    it("doesn't set the the class unless its inside of a container", function() {
      TestBed.configureTestingModule({ declarations: [ClrLabel, NoForTest] });
      const fixture = TestBed.createComponent(NoForTest);
      fixture.detectChanges();
      expect(
        fixture.debugElement.query(By.css('label')).nativeElement.classList.contains('clr-control-label')
      ).toBeFalse();
    });

    it('does set the the class when its inside of a container', function() {
      TestBed.configureTestingModule({
        imports: [ClrIconModule],
        declarations: [ClrLabel, ContainerizedTest],
      });
      const fixture = TestBed.createComponent(ContainerizedTest);
      fixture.detectChanges();
      expect(
        fixture.debugElement.query(By.css('label')).nativeElement.classList.contains('clr-control-label')
      ).toBeTrue();
    });

    it('does set the class when its inside of a wrapper', function() {
      TestBed.configureTestingModule({
        imports: [ClrIconModule],
        declarations: [ClrLabel, WrapperTest],
      });
      const fixture = TestBed.createComponent(WrapperTest);
      fixture.detectChanges();
      expect(
        fixture.debugElement.query(By.css('label')).nativeElement.classList.contains('clr-control-label')
      ).toBeTrue();
    });

    it('sets the for attribute to the id given by the service', function() {
      TestBed.configureTestingModule({ declarations: [ClrLabel, NoForTest], providers: [ControlIdService] });
      const fixture = TestBed.createComponent(NoForTest);
      fixture.detectChanges();
      const controlIdService = fixture.debugElement.injector.get(ControlIdService);
      const label = fixture.nativeElement.querySelector('label');
      expect(label.getAttribute('for')).toBe(controlIdService.id);
      controlIdService.id = 'test';
      fixture.detectChanges();
      expect(label.getAttribute('for')).toBe('test');
    });

    it('adds the grid classes for non-vertical layouts', function() {
      TestBed.configureTestingModule({
        imports: [ClrIconModule],
        declarations: [ClrLabel, ClrInputContainer, ContainerizedTest],
        providers: [LayoutService],
      });
      const fixture = TestBed.createComponent(ContainerizedTest);
      const layoutService = fixture.debugElement.injector.get(LayoutService);
      layoutService.layout = Layouts.HORIZONTAL;
      fixture.detectChanges();
      const label = fixture.nativeElement.querySelector('label');
      expect(label.classList.contains('clr-col-md-2')).toBeTrue();
      expect(label.classList.contains('clr-col-xs-12')).toBeTrue();
    });

    it('leaves the grid classes untouched if they exist', function() {
      TestBed.configureTestingModule({ declarations: [ClrLabel, ExistingGridTest], providers: [ControlIdService] });
      const fixture = TestBed.createComponent(ExistingGridTest);
      fixture.detectChanges();
      const label = fixture.nativeElement.querySelector('label');
      expect(label.className).not.toContain('clr-col-md-2');
      expect(label.className).toContain('clr-col-md-3');
    });

    it('leaves the for attribute untouched if it exists', function() {
      TestBed.configureTestingModule({ declarations: [ClrLabel, ExplicitForTest], providers: [ControlIdService] });
      const fixture = TestBed.createComponent(ExplicitForTest);
      fixture.detectChanges();
      const label = fixture.nativeElement.querySelector('label');
      expect(label.getAttribute('for')).toBe('hello');
    });
  });
}
