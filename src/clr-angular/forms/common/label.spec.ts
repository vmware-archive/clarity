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

@Component({ template: `<label></label>` })
class NoForTest {}

@Component({ template: `<label for="hello"></label>` })
class ExplicitForTest {}

@Component({ template: `<clr-input-container><label for="hello"></label></clr-input-container>` })
class ContainerizedTest {}

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
      TestBed.configureTestingModule({ declarations: [ClrLabel, NoForTest], providers: [ControlIdService] });
      const fixture = TestBed.createComponent(NoForTest);
      fixture.detectChanges();
      expect(
        fixture.debugElement.query(By.css('label')).nativeElement.classList.contains('clr-control-label')
      ).toBeFalse();
    });

    it('does set the the class when its inside of a container', function() {
      TestBed.configureTestingModule({
        imports: [ClrIconModule],
        declarations: [ClrLabel, ClrInputContainer, ContainerizedTest],
      });
      const fixture = TestBed.createComponent(ContainerizedTest);
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

    it('leaves the for attribute untouched if it exists', function() {
      TestBed.configureTestingModule({ declarations: [ClrLabel, ExplicitForTest], providers: [ControlIdService] });
      const fixture = TestBed.createComponent(ExplicitForTest);
      fixture.detectChanges();
      const label = fixture.nativeElement.querySelector('label');
      expect(label.getAttribute('for')).toBe('hello');
    });
  });
}
