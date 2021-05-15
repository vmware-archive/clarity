/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CONTROL_SUFFIX } from './abstract-control';

import { ClrControlHelper } from './helper';
import { ContainerIdService } from './providers/container-id.service';
import { ControlIdService } from './providers/control-id.service';

@Component({ template: `<clr-control-helper>Test helper</clr-control-helper>` })
class SimpleTest {}

export default function (): void {
  describe('ClrControlHelper', () => {
    describe('Default:', () => {
      let fixture: ComponentFixture<SimpleTest>;
      let element: HTMLElement;

      beforeEach(async function () {
        TestBed.configureTestingModule({
          declarations: [ClrControlHelper, SimpleTest],
          providers: [ControlIdService],
        }).compileComponents();
        fixture = TestBed.createComponent(SimpleTest);
        fixture.detectChanges();
        element = fixture.debugElement.query(By.directive(ClrControlHelper)).nativeElement;
      });

      it('projects content', function () {
        expect(element.innerText).toContain('Test helper');
      });

      it('adds the .clr-subtext class to host', function () {
        expect(element.classList.contains('clr-subtext')).toBeTrue();
      });

      it('adds the id to host', function () {
        expect(element.getAttribute('id')).toContain('clr-form-control');
        expect(element.getAttribute('id')).toContain(CONTROL_SUFFIX.HELPER);
      });
    });

    describe('Provide: ContainerIdService as service', () => {
      let fixture: ComponentFixture<SimpleTest>;
      let element: HTMLElement;

      beforeEach(async function () {
        TestBed.configureTestingModule({
          declarations: [ClrControlHelper, SimpleTest],
          providers: [ControlIdService, ContainerIdService],
        }).compileComponents();
        fixture = TestBed.createComponent(SimpleTest);
        fixture.detectChanges();
        element = fixture.debugElement.query(By.directive(ClrControlHelper)).nativeElement;
      });

      it('should have `*-container-*` as part of the id', () => {
        expect(element.getAttribute('id')).toContain('clr-form-container');
        expect(element.getAttribute('id')).toContain(CONTROL_SUFFIX.HELPER);
      });
    });
  });
}
