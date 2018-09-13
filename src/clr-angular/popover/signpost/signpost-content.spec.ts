/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, ElementRef } from '@angular/core';
import { TestBed } from '@angular/core/testing';

// I'm giving up, I'm using the datagrid ones for now.
import { addHelpers, TestContext } from '../../data/datagrid/helpers.spec';
import { ClrIconCustomTag } from '../../icon/icon';
import { IfOpenService } from '../../utils/conditional/if-open.service';
import { POPOVER_HOST_ANCHOR } from '../common/popover-host-anchor.token';

import { ClrSignpostContent } from './signpost-content';
import { SIGNPOST_POSITIONS } from './signpost-positions';

export default function(): void {
  describe('ClrSignpostContent', function() {
    addHelpers();

    let context: TestContext<ClrSignpostContent, SimpleTest>;

    beforeEach(function() {
      context = this.createOnly(ClrSignpostContent, SimpleTest, [IfOpenService], [ClrIconCustomTag]);
    });

    it('projects content when open', function() {
      expect(context.clarityElement.textContent).toContain('Signpost content');
    });

    it('has a close button that updates the IfOpenService.open value', function() {
      const closer: HTMLElement = context.clarityElement.querySelector('.signpost-action');
      expect(closer).toBeDefined();
      const service: IfOpenService = TestBed.get(IfOpenService);
      const testValue: boolean = service.open;
      closer.click();
      context.detectChanges();
      expect(testValue).not.toEqual(service.open);
    });

    it('does not allow multiple open popovers', function() {
      expect((<any>context.clarityDirective).popoverOptions.allowMultipleOpen).toBeFalsy();
    });

    it('takes an input for position', function() {
      context.testComponent.position = 'top-middle';
      context.detectChanges();
      expect(context.clarityDirective.position).toBe('top-middle');
    });

    it('has a default signpost content position', function() {
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
      it('has a ' + name + ' signpost content position', function() {
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
        expect((<any>context.clarityDirective).anchorPoint).toBe(position.anchorPoint);
        expect((<any>context.clarityDirective).popoverPoint).toBe(position.popoverPoint);
        expect((<any>context.clarityDirective).popoverOptions.offsetY).toBe(position.offsetY);
        expect((<any>context.clarityDirective).popoverOptions.offsetX).toBe(position.offsetX);
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
  position: string = 'right-middle';
}
