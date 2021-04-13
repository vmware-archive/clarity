/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClrTimelineStepTitle } from './timeline-step-title';
import { UNIQUE_ID_PROVIDER } from '../utils/id-generator/id-generator.service';
import { TimelineStepIdService } from './providers/timeline-step-id.service';

export default function (): void {
  describe('ClrTimelineStepTitle', () => {
    let fixture: ComponentFixture<TestTimelineStepTitle>;
    let nativeElement: HTMLElement;

    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [ClrTimelineStepTitle, TestTimelineStepTitle],
        providers: [UNIQUE_ID_PROVIDER, TimelineStepIdService],
      });

      fixture = TestBed.createComponent(TestTimelineStepTitle);
      fixture.detectChanges();

      nativeElement = fixture.nativeElement.querySelector('clr-timeline-step-title');
    });

    describe('Template API', () => {
      it('should add host classes', () => {
        expect(nativeElement.className).toContain('clr-timeline-step-title');
      });

      it('adds the aria-hidden attribute', () => {
        expect(nativeElement.getAttribute('aria-hidden')).toBeTruthy();
      });
    });

    describe('View', () => {
      it('should project content', () => {
        expect(nativeElement.textContent.trim()).toContain('Title Content');
      });
    });
  });
}

@Component({
  template: ` <clr-timeline-step-title>Title Content</clr-timeline-step-title> `,
})
class TestTimelineStepTitle {}
