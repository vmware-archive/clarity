/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClrTimelineStepHeader } from './timeline-step-header';

export default function (): void {
  describe('ClrTimelineStepHeader', () => {
    let fixture: ComponentFixture<TestTimelineStepHeader>;
    let nativeElement: HTMLElement;

    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [ClrTimelineStepHeader, TestTimelineStepHeader],
      });

      fixture = TestBed.createComponent(TestTimelineStepHeader);
      fixture.detectChanges();

      nativeElement = fixture.nativeElement.querySelector('clr-timeline-step-header');
    });

    describe('Template API', () => {
      it('should add host classes', () => {
        expect(nativeElement.className).toContain('clr-timeline-step-header');
      });
    });

    describe('View', () => {
      it('should project content', () => {
        expect(nativeElement.textContent.trim()).toContain('Header Content');
      });
    });
  });
}

@Component({
  template: ` <clr-timeline-step-header>Header Content</clr-timeline-step-header> `,
})
class TestTimelineStepHeader {}
