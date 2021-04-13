/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClrTimelineStepDescription } from './timeline-step-description';

export default function (): void {
  describe('ClrTimelineStepDescription', () => {
    let fixture: ComponentFixture<TestTimelineStepDescription>;
    let nativeElement: HTMLElement;

    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [ClrTimelineStepDescription, TestTimelineStepDescription],
      });

      fixture = TestBed.createComponent(TestTimelineStepDescription);
      fixture.detectChanges();

      nativeElement = fixture.nativeElement.querySelector('clr-timeline-step-description');
    });

    describe('Template API', () => {
      it('should add host classes', () => {
        expect(nativeElement.className).toContain('clr-timeline-step-description');
      });
    });

    describe('View', () => {
      it('should project content', () => {
        expect(nativeElement.textContent.trim()).toContain('Description Content');
      });
    });
  });
}

@Component({
  template: ` <clr-timeline-step-description>Description Content</clr-timeline-step-description> `,
})
class TestTimelineStepDescription {}
