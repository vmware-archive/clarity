/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component, ViewChild, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ClrTimeline } from './timeline';
import { ClrTimelineStep } from './timeline-step';
import { ClrTimelineModule } from './timeline.module';

import { ClrTimelineLayout } from './enums/timeline-layout.enum';

export default function (): void {
  describe('ClrTimeline component', () => {
    describe('Template API', () => {
      let fixture: ComponentFixture<TestTimeline>;
      let hostComponent: TestTimeline;

      let nativeElement: HTMLElement;
      let nativeComponent: ClrTimeline;

      beforeEach(() => {
        TestBed.configureTestingModule({
          declarations: [ClrTimeline, TestTimeline],
        });

        fixture = TestBed.createComponent(TestTimeline);
        fixture.detectChanges();

        hostComponent = fixture.componentInstance;
        nativeElement = fixture.nativeElement.querySelector('#timeline');
        nativeComponent = hostComponent.timeline;
      });

      it('should add host classes', () => {
        expect(nativeElement.className).toContain('clr-timeline');
      });

      it('has the right default layout', () => {
        expect(hostComponent.noLayout.layout).toBe(ClrTimelineLayout.HORIZONTAL);
      });

      it('accepts a [clrLayout] input', () => {
        expect(nativeComponent.layout).toBe(ClrTimelineLayout.HORIZONTAL);

        hostComponent.layout = ClrTimelineLayout.VERTICAL;
        fixture.detectChanges();
        expect(nativeComponent.layout).toBe(ClrTimelineLayout.VERTICAL);
      });

      it('renders correctly the layout', () => {
        expect(nativeElement.className).toContain('clr-timeline');

        hostComponent.layout = ClrTimelineLayout.HORIZONTAL;
        fixture.detectChanges();
        expect(nativeElement.className).not.toContain('clr-timeline-vertical');

        hostComponent.layout = ClrTimelineLayout.VERTICAL;
        fixture.detectChanges();
        expect(nativeElement.className).toContain('clr-timeline-vertical');
      });
    });

    describe('View', () => {
      let fixture: ComponentFixture<TestTimelineContent>;
      let timelineSteps: DebugElement[];

      beforeEach(() => {
        TestBed.configureTestingModule({
          declarations: [TestTimelineContent],
          imports: [ClrTimelineModule],
        });

        fixture = TestBed.createComponent(TestTimelineContent);
        fixture.detectChanges();

        timelineSteps = fixture.debugElement.queryAll(By.directive(ClrTimelineStep));
      });

      it('should project steps', () => {
        fixture.detectChanges();
        expect(timelineSteps.length).toBe(3);
      });
    });
  });
}

@Component({
  template: `
    <clr-timeline #noLayout id="no-layout"></clr-timeline>
    <clr-timeline [clrLayout]="layout" #timeline id="timeline"></clr-timeline>
  `,
})
class TestTimeline {
  @ViewChild('noLayout', { static: false })
  noLayout: ClrTimeline;
  @ViewChild('timeline', { static: false })
  timeline: ClrTimeline;

  layout: ClrTimelineLayout = ClrTimelineLayout.HORIZONTAL;
}

@Component({
  template: `
    <clr-timeline>
      <clr-timeline-step></clr-timeline-step>
      <clr-timeline-step></clr-timeline-step>
      <clr-timeline-step></clr-timeline-step>
    </clr-timeline>
  `,
})
class TestTimelineContent {}
