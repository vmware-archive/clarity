/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';

import { UNIQUE_ID_PROVIDER } from '../utils/id-generator/id-generator.service';
import { ClrAccordionModule } from './accordion.module';
import { ClrAccordionPanel } from './accordion-panel';
import { AccordionService } from './providers/accordion.service';
import { AccordionPanelModel } from './models/accordion.model';
import { IfExpandService } from '../utils/conditional/if-expanded.service';

@Component({
  template: `
    <clr-accordion>
      <clr-accordion-panel [(clrAccordionPanelOpen)]="open" [clrAccordionPanelDisabled]="disabled">
        <clr-accordion-title>title</clr-accordion-title>
        <clr-accordion-description *ngIf="showDescription">description</clr-accordion-description>
        <clr-accordion-content>panel</clr-accordion-content>
      </clr-accordion-panel>
    </clr-accordion>
  `,
})
class TestComponent {
  open = false;
  disabled = false;
  showDescription = false;
}

describe('ClrAccordionPanel', () => {
  describe('TypeScript API', () => {
    let fixture: ComponentFixture<ClrAccordionPanel>;
    let accordionPanel: ClrAccordionPanel;
    let accordionService: AccordionService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [UNIQUE_ID_PROVIDER, AccordionService, IfExpandService],
        imports: [ClrAccordionModule, ReactiveFormsModule, NoopAnimationsModule],
      });

      fixture = TestBed.createComponent(ClrAccordionPanel);
      fixture.detectChanges();
      accordionPanel = fixture.componentInstance;
      accordionService = fixture.debugElement.injector.get(AccordionService);
    });

    it('should add panel to service', () => {
      spyOn(accordionService, 'addPanel');
      accordionPanel.ngOnInit();
      expect(accordionService.addPanel).toHaveBeenCalled();
    });

    it('should toggle panel', () => {
      spyOn(accordionService, 'togglePanel');
      accordionPanel.togglePanel();
      expect(accordionService.togglePanel).toHaveBeenCalled();
    });

    it('should collapse panel when animation done is triggered', () => {
      const ifExpandService = fixture.debugElement.injector.get(IfExpandService);
      const panelModel = new AccordionPanelModel('0', '0');
      panelModel.open = true;
      ifExpandService.expanded = true;

      panelModel.open = false;
      accordionPanel.collapsePanelOnAnimationDone(panelModel);
      expect(ifExpandService.expanded).toBe(false);
    });
  });

  describe('Template API', () => {
    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;
    let accordionPanelInstance: ClrAccordionPanel;

    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [TestComponent],
        providers: [UNIQUE_ID_PROVIDER],
        imports: [ClrAccordionModule, ReactiveFormsModule, NoopAnimationsModule],
      });

      fixture = TestBed.createComponent(TestComponent);
      fixture.detectChanges();
      testComponent = fixture.componentInstance;
      accordionPanelInstance = fixture.debugElement.query(By.directive(ClrAccordionPanel)).componentInstance;
    });

    it('offers a [(clrAccordionPanelOpen)] two-way binding', () => {
      // input
      testComponent.open = true;
      fixture.detectChanges();
      expect(fixture.nativeElement.textContent).toContain('panel');

      // output
      accordionPanelInstance.togglePanel();
      fixture.detectChanges();
      expect(fixture.componentInstance.open).toBe(false);
      expect(fixture.nativeElement.textContent).toContain('');
    });

    it('offers a [clrAccordionPanelDisabled] one-way binding', () => {
      testComponent.disabled = true;
      fixture.detectChanges();
      expect(fixture.componentInstance.disabled).toBe(true);
    });
  });

  describe('View', () => {
    let fixture: ComponentFixture<TestComponent>;
    let panelElement: HTMLElement;

    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [TestComponent],
        providers: [UNIQUE_ID_PROVIDER],
        imports: [ClrAccordionModule, ReactiveFormsModule, NoopAnimationsModule],
      });

      fixture = TestBed.createComponent(TestComponent);
      fixture.detectChanges();
      panelElement = fixture.debugElement.query(By.directive(ClrAccordionPanel)).nativeElement;
    });

    it('projects content', () => {
      panelElement.querySelector('button').click();
      fixture.detectChanges();
      expect(fixture.nativeElement.textContent.trim()).toMatch('panel');
    });

    it('toggles content when header button is clicked', () => {
      panelElement.querySelector('button').click();
      fixture.detectChanges();
      expect(fixture.nativeElement.textContent).toContain('panel');

      panelElement.querySelector('button').click();
      fixture.detectChanges();
      expect(fixture.nativeElement.textContent).toContain('');
    });

    it('adds a .clr-accordion-panel class on the host element', () => {
      expect(panelElement.classList.contains('clr-accordion-panel')).toBe(true);
    });

    it('should set the appropriate aria attribute values', () => {
      const panelRegion = panelElement.querySelector('[role="region"]');
      const headerButton = panelElement.querySelector('button');

      expect(panelRegion.getAttribute('aria-labelledby')).toBe(headerButton.getAttribute('id'));
      expect(panelRegion.getAttribute('aria-hidden')).toBe('true');

      expect(headerButton.getAttribute('id')).toBeTruthy();
      expect(headerButton.getAttribute('aria-expanded')).toBe('false');
      expect(headerButton.getAttribute('aria-controls')).toBe(panelRegion.getAttribute('id'));
      expect(headerButton.getAttribute('disabled')).toBe(null);

      headerButton.click();
      fixture.detectChanges();

      expect(headerButton.getAttribute('aria-expanded')).toBe('true');
      expect(panelRegion.getAttribute('aria-hidden')).toBe('false');
    });

    it('should set proper disable attribute when disabled programmatically', () => {
      const headerButton = panelElement.querySelector('button');
      expect(headerButton.getAttribute('disabled')).toBe(null);

      fixture.componentInstance.disabled = true;
      fixture.detectChanges();

      expect(headerButton.getAttribute('disabled')).toBe('');
    });

    it('should get the appropriate panel class based on current panel state', () => {
      const panelGroup = panelElement.querySelector('[role="group"]');
      const headerButton = panelElement.querySelector('button');

      expect(panelGroup.classList.contains('clr-accordion-panel-inactive')).toBe(true);
      expect(panelGroup.classList.contains('clr-accordion-panel-open')).toBe(false);

      headerButton.click();
      fixture.detectChanges();

      expect(panelGroup.classList.contains('clr-accordion-panel-inactive')).toBe(true);
      expect(panelGroup.classList.contains('clr-accordion-panel-open')).toBe(true);
    });

    it('should apply the appropriate class to header if the header has a description', () => {
      expect(panelElement.querySelector('.clr-accordion-header-has-description')).toBeFalsy();
      fixture.componentInstance.showDescription = true;
      fixture.detectChanges();
      expect(panelElement.querySelector('.clr-accordion-header-has-description')).toBeTruthy();
    });
  });
});
