/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { AccordionService } from './providers/accordion.service';
import { ClrAccordionModule } from './accordion.module';
import { ClrAccordion } from './accordion';
import { ClrAccordionPanel } from './accordion-panel';

@Component({
  template: `
    <clr-accordion [clrAccordionMultiPanel]="multi">
      <clr-accordion-panel>panel 1</clr-accordion-panel>
      <clr-accordion-panel *ngIf="showSecondStep">panel 2</clr-accordion-panel>
      <clr-accordion-panel [clrAccordionPanelOpen]="openThirdStep">panel 3</clr-accordion-panel>
    </clr-accordion>
  `,
})
class TestComponent {
  multi = false;
  openThirdStep = false;
  showSecondStep = true;
}

describe('ClrAccordion', () => {
  describe('TypeScript API', () => {
    let fixture: ComponentFixture<ClrAccordion>;
    let accordion: ClrAccordion;
    let accordionService: AccordionService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [TestComponent],
        imports: [ClrAccordionModule, ReactiveFormsModule, NoopAnimationsModule],
      });

      fixture = TestBed.createComponent(ClrAccordion);
      fixture.detectChanges();
      accordion = fixture.componentInstance;
      accordionService = fixture.debugElement.injector.get(AccordionService);
    });

    it('should set the accordion strategy for the accordion service', () => {
      spyOn(accordionService, 'setStrategy');
      accordion.ngOnInit();
      expect(accordionService.setStrategy).toHaveBeenCalled();
    });
  });

  describe('Template API', () => {
    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;

    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [TestComponent],
        imports: [ClrAccordionModule, ReactiveFormsModule, NoopAnimationsModule],
      });

      fixture = TestBed.createComponent(TestComponent);
      fixture.detectChanges();
      testComponent = fixture.componentInstance;
    });

    it('offers a [clrAccordionMultiPanel] binding', () => {
      const accordionInstance: ClrAccordion = fixture.debugElement.query(By.directive(ClrAccordion)).componentInstance;
      expect(testComponent.multi).toBe(false);
      expect(accordionInstance.multiPanel).toBe(false);

      testComponent.multi = true;
      fixture.detectChanges();

      expect(testComponent.multi).toBe(true);
      expect(accordionInstance.multiPanel).toBe(true);
    });
  });

  describe('View', () => {
    let fixture: ComponentFixture<any>;
    let testComponent: TestComponent;
    let accordionService: AccordionService;
    let accordionInstance: ClrAccordion;
    let accordionPanels: DebugElement[];

    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [TestComponent],
        imports: [ClrAccordionModule, ReactiveFormsModule, NoopAnimationsModule],
      });

      fixture = TestBed.createComponent(TestComponent);
      fixture.detectChanges();
      testComponent = fixture.componentInstance;
      accordionInstance = fixture.debugElement.query(By.directive(ClrAccordion)).componentInstance;
      accordionService = fixture.debugElement.query(By.directive(ClrAccordion)).injector.get(AccordionService);
      accordionPanels = fixture.debugElement.queryAll(By.directive(ClrAccordionPanel));
    });

    it('should project panels', () => {
      expect(accordionPanels.length).toBe(3);
    });

    it('should open one panel at a time', fakeAsync(() => {
      const panels = fixture.debugElement.queryAll(By.directive(ClrAccordionPanel));

      expect(accordionInstance.multiPanel).toBe(false);

      panels[0].nativeElement.querySelector('button').click();
      fixture.detectChanges();
      expect(fixture.nativeElement.textContent.trim()).toContain('panel 1');

      panels[1].nativeElement.querySelector('button').click();
      fixture.detectChanges();
      tick(200); // delay for animation

      expect(fixture.nativeElement.textContent.trim()).toContain('panel 2');
      expect(fixture.nativeElement.textContent.trim()).not.toContain('panel 1');
    }));

    it('should allow multiple open panels when in multi panel mode', () => {
      testComponent.multi = true;
      fixture.detectChanges();

      accordionPanels[0].nativeElement.querySelector('button').click();
      accordionPanels[1].nativeElement.querySelector('button').click();
      fixture.detectChanges();

      expect(fixture.nativeElement.textContent.trim()).toContain('panel 1');
      expect(fixture.nativeElement.textContent.trim()).toContain('panel 2');
      expect(fixture.nativeElement.textContent.trim()).not.toContain('panel 3');
    });

    it('should reorder panels when panel content children has changed', fakeAsync(() => {
      spyOn(accordionService, 'updatePanelOrder');
      testComponent.showSecondStep = false;
      fixture.detectChanges();
      tick();
      expect(accordionService.updatePanelOrder).toHaveBeenCalled();
      expect(fixture.debugElement.queryAll(By.directive(ClrAccordionPanel)).length).toBe(2);
    }));
  });
});
