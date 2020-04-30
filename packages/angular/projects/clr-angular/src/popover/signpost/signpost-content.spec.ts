/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, ElementRef } from '@angular/core';
import { TestBed } from '@angular/core/testing';

// I'm giving up, I'm using the datagrid ones for now.
import { TestContext } from '../../data/datagrid/helpers.spec';
import { ClrIconCustomTag } from '../../icon/icon';
import { ClrPopoverToggleService } from '../../utils/popover/providers/popover-toggle.service';
import { POPOVER_HOST_ANCHOR } from '../common/popover-host-anchor.token';

import { ClrSignpostContent } from './signpost-content';
import { SIGNPOST_POSITIONS } from './signpost-positions';
import { SignpostIdService } from './providers/signpost-id.service';
import { SignpostFocusManager } from './providers/signpost-focus-manager.service';

export default function (): void {
  describe('ClrSignpostContent', function () {
    let context: TestContext<ClrSignpostContent, SimpleTest>;

    beforeEach(function () {
      context = this.createOnly(
        ClrSignpostContent,
        SimpleTest,
        [SignpostIdService, ClrPopoverToggleService, SignpostFocusManager],
        [ClrIconCustomTag]
      );
    });

    afterEach(() => {
      context.fixture.destroy();
    });

    it('has an id', () => {
      expect(context.clarityElement.getAttribute('id')).toBeDefined();
    });

    it('projects content when open', function () {
      expect(context.clarityElement.textContent).toContain('Signpost content');
    });

    it('has a close button that updates the ClrPopoverToggleService.open value', function () {
      const closer: HTMLElement = context.clarityElement.querySelector('.signpost-action');
      expect(closer).toBeDefined();
      const service: ClrPopoverToggleService = TestBed.get(ClrPopoverToggleService);
      service.open = true;
      closer.click();
      context.detectChanges();
      expect(service.open).toBeFalse();
    });

    it('does not allow multiple open popovers', function () {
      expect((context.clarityDirective as any).popoverOptions.allowMultipleOpen).toBeFalsy();
    });

    it('takes an input for position', function () {
      context.testComponent.position = 'top-middle';
      context.detectChanges();
      expect(context.clarityDirective.position).toBe('top-middle');
    });

    it('has a default signpost content position', function () {
      expect(context.clarityDirective.position).toBe('right-middle');
      expect(context.clarityElement.classList).toContain('right-middle');
    });

    // Not iterating here on purpose, we want to keep these hard-coded in the tests.
    testPosition('top-left');
    testPosition('top-middle');
    testPosition('top-right');
    testPosition('right-top');
    testPosition('right-middle');
    testPosition('right-bottom');
    testPosition('bottom-right');
    testPosition('bottom-middle');
    testPosition('bottom-left');
    testPosition('left-bottom');
    testPosition('left-middle');
    testPosition('left-top');

    function testPosition(name: string): void {
      it('has a ' + name + ' signpost content position', function () {
        context.clarityDirective.position = name;
        context.detectChanges();
        const position = SIGNPOST_POSITIONS[name];
        /*********
         *
         * There are 5 things to test here
         * 0. correct class on the host
         * 1. correct anchor point
         * 2. correct popover point
         * 3. Correct Y offset
         * 4. Correct X offset
         *
         */
        expect(context.clarityElement.classList).toContain(name);
        expect((context.clarityDirective as any).anchorPoint).toBe(position.anchorPoint);
        expect((context.clarityDirective as any).popoverPoint).toBe(position.popoverPoint);
        expect((context.clarityDirective as any).popoverOptions.offsetY).toBe(position.offsetY);
        expect((context.clarityDirective as any).popoverOptions.offsetX).toBe(position.offsetX);
      });
    }
  });
}

@Component({
  template: `
    <button class="outside-click-test" (click)="bodyClickHandler()">
      Button to test clicks outside of the dropdown component
    </button>
    <clr-signpost-content [clrPosition]="position">
      Signpost content
    </clr-signpost-content>
  `,
  providers: [{ provide: POPOVER_HOST_ANCHOR, useExisting: ElementRef }],
})
class SimpleTest {
  position = 'right-middle';
  bodyClickHandler() {
    // Do nothing
  }
}
