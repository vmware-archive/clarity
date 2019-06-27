/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, ViewChild } from '@angular/core';

import { IfOpenService } from '../../utils/conditional/if-open.service';
import { spec, TestContext } from '../../utils/testing/helpers.spec';

import { ClrSignpost } from './signpost';
import { ClrSignpostModule } from './signpost.module';
import { SignpostIdService } from './providers/signpost-id.service';

interface Context extends TestContext<ClrSignpost, TestDefaultSignpost | TestCustomTriggerSignpost> {
  ifOpenService: IfOpenService;
  triggerButton: HTMLButtonElement;
  contentCloseButton: HTMLButtonElement;
  content: HTMLDivElement;
  signpostIdService: SignpostIdService;
}

export default function(): void {
  describe('Signpost', function() {
    describe('default trigger', function() {
      spec(ClrSignpost, TestDefaultSignpost, ClrSignpostModule);

      beforeEach(function(this: Context) {
        this.signpostIdService = this.getClarityProvider(SignpostIdService);
        this.ifOpenService = this.getClarityProvider(IfOpenService);
      });

      it('adds the .signpost class to clr-signpost', function(this: Context) {
        expect(this.clarityElement.classList).toContain('signpost');
      });

      it('has a default trigger that can hide/show content', function(this: Context) {
        const signpostToggle: HTMLElement = this.hostElement.querySelector('.signpost-action');
        let signpostContent: HTMLElement;

        // Test we have a trigger
        expect(signpostToggle).not.toBeNull();

        // // Test that content shows
        signpostToggle.click();
        this.detectChanges();
        signpostContent = this.hostElement.querySelector('.signpost-content');
        expect(signpostContent).not.toBeNull();
        expect(this.ifOpenService.open).toBe(true);

        // Test that content hides again
        signpostToggle.click();
        this.detectChanges();
        signpostContent = this.hostElement.querySelector('.signpost-content');
        expect(signpostContent).toBeNull();
        expect(this.ifOpenService.open).toBe(false);
      });
    });

    describe('custom trigger', function() {
      spec(ClrSignpost, TestCustomTriggerSignpost, ClrSignpostModule);

      beforeEach(function(this: Context) {
        this.ifOpenService = this.getClarityProvider(IfOpenService);
      });

      /********
       * This test assumes that if
       */
      it('does not display the default trigger', function(this: Context) {
        const triggerIcon: HTMLElement = this.hostElement.querySelector('clr-icon');

        /**********
         * If there is a clr-icon we are testing that it is not the same shape
         * used for the default trigger.
         */
        if (triggerIcon) {
          expect(triggerIcon.getAttribute('shape')).not.toBe('info');
        }
      });

      it('projects a custom trigger element to hide/show content', function(this: Context) {
        const signpostTrigger: HTMLElement = this.hostElement.querySelector('.signpost-action');
        let signpostContent: HTMLElement;

        expect(signpostTrigger.textContent.trim()).toBe('Custom trigger');

        // Test we have a trigger
        expect(signpostTrigger).not.toBeNull();

        // Test it shows after changes
        signpostTrigger.click();
        this.detectChanges();
        signpostContent = this.hostElement.querySelector('.signpost-content');
        expect(signpostContent).not.toBeNull();
        expect(this.ifOpenService.open).toBe(true);

        // Test it hide when clicked again
        signpostTrigger.click();
        this.detectChanges();
        signpostContent = this.hostElement.querySelector('.signpost-content');
        expect(signpostContent).toBeNull();
        expect(this.ifOpenService.open).toBe(false);
      });
    });

    describe('aria-control values', () => {
      spec(ClrSignpost, TestDefaultSignpost, ClrSignpostModule);

      function checkAriaControlsId(id: string, element: HTMLElement) {
        const triggerControlsValue = element.querySelector('.signpost-action').getAttribute('aria-controls');
        const closeControlsValue = element
          .querySelector('.signpost-content .signpost-action')
          .getAttribute('aria-controls');
        const contentId = element.querySelector('.signpost-content').getAttribute('id');

        expect(id).toBe(
          contentId,
          'ClrSignpostContent id is out of sync (content gets a new id each time it is created)'
        );
        expect(id).toBe(
          triggerControlsValue,
          'ClrSignpost id does not match the signpost trigger aria-controls value on the signpost trigger'
        );
        expect(id).toBe(
          closeControlsValue,
          'ClrSignpost id does not match the aria-controls value on the close button'
        );
      }

      beforeEach(function(this: Context) {
        this.signpostIdService = this.getClarityProvider(SignpostIdService);
        this.triggerButton = this.hostElement.querySelector('.signpost-action');
      });

      it('are correct when content is opened', function(this: Context) {
        let currentId;
        this.signpostIdService.id.subscribe(idChange => {
          currentId = idChange;
        });

        // First open
        this.triggerButton.click();
        this.fixture.detectChanges();

        checkAriaControlsId(currentId, this.clarityElement);

        // Close it
        this.triggerButton.click();
        this.fixture.detectChanges();

        // Second open
        this.triggerButton.click();
        this.fixture.detectChanges();

        checkAriaControlsId(currentId, this.clarityElement);
      });
    });
  });
}

@Component({
  template: `
        <button class="outside-click-test">
            Button to test clicks outside of the dropdown component
        </button>
        <clr-signpost>
            <button
                type="button"
                class="signpost-action btn btn-small btn-link"
                clrSignpostTrigger>
                Custom trigger
            </button>
            <clr-signpost-content *clrIfOpen="openState">
                Signpost content
            </clr-signpost-content>
        </clr-signpost>
    `,
})
class TestCustomTriggerSignpost {
  @ViewChild(ClrSignpost, { static: false })
  signpost: ClrSignpost;
  openState: boolean = false;

  position: string = 'right-middle';
}

@Component({
  template: `
        <button class="outside-click-test">
            Button to test clicks outside of the dropdown component
        </button>
        <clr-signpost>
            <clr-signpost-content *clrIfOpen="openState">
                Signpost content
            </clr-signpost-content>
        </clr-signpost>
    `,
})
class TestDefaultSignpost {
  @ViewChild(ClrSignpost, { static: false })
  signpost: ClrSignpost;

  openState: boolean = false;
}
