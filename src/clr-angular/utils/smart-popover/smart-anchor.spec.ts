/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 *
 */

import { Component, ElementRef, ViewChild } from '@angular/core';
import { ClrSmartPopoverEventsService } from '../../utils/smart-popover/providers/smart-popover-events.service';
import { ClrSmartPopoverToggleService } from '../../utils/smart-popover/providers/smart-popover-toggle.service';
import { ClrSmartPopoverAnchor } from '../../utils/smart-popover/smart-anchor';
import { spec, TestContext } from '../testing/helpers.spec';

@Component({
  selector: 'test-host',
  template: '<button #testAnchor clrSmartAnchor>Smart Anchor</button>',
  providers: [ClrSmartPopoverEventsService, ClrSmartPopoverToggleService],
})
class TestHost {
  @ViewChild('testAnchor', { read: ElementRef })
  anchor: ElementRef;
}

export default function(): void {
  describe('ClrSmartPopoverAnchor', function() {
    type Context = TestContext<ClrSmartPopoverAnchor, TestHost> & {
      eventService: ClrSmartPopoverEventsService;
    };
    describe('Template API', () => {
      spec(ClrSmartPopoverAnchor, TestHost, undefined, { providers: [ClrSmartPopoverEventsService] });

      beforeEach(function(this: Context) {
        this.eventService = this.getClarityProvider(ClrSmartPopoverEventsService);
        this.detectChanges();
      });

      it('registers the anchor element with the event service', function(this: Context) {
        expect(this.eventService.anchorButtonRef).toEqual(this.hostComponent.anchor);
      });
    });
    describe('View Basics', function(this: Context) {
      spec(ClrSmartPopoverAnchor, TestHost, undefined, { providers: [ClrSmartPopoverEventsService] });
      it('adds the clr-anchor classname', function(this: Context) {
        expect(this.clarityElement.classList).toContain('clr-anchor');
      });
    });
  });
}
