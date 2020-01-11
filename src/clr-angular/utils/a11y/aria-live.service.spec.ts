/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component } from '@angular/core';
import { AriaLiveService, AriaLivePoliteness, ARIA_LIVE_TICK } from './aria-live.service';
import { TestBed, fakeAsync, tick } from '@angular/core/testing';

@Component({
  selector: 'aria-live-test',
  template: '',
  providers: [AriaLiveService],
})
class AriaLiveTest {
  // tslint:disable
  constructor(private ariaLiveService: AriaLiveService) {}
  // tslint:enable
}

interface TestContext {
  ariaLiveService: AriaLiveService;
}

let fixture, ariaLiveContent: HTMLElement, ariaLiveService: AriaLiveService;

describe('AriaLive service', function() {
  beforeEach(function() {
    TestBed.configureTestingModule({
      declarations: [AriaLiveTest],
    });

    fixture = TestBed.createComponent(AriaLiveTest);
    ariaLiveService = fixture.debugElement.injector.get(AriaLiveService, null);
  });

  it('should set default aria-live value to `polite`', function(this: TestContext) {
    ariaLiveService.announce('test');
    ariaLiveContent = document.getElementById(ariaLiveService.id);
    expect(ariaLiveContent.getAttribute('aria-live')).toBe('polite');
  });

  it('should return you the ID of the aria-live DOM', function(this: TestContext) {
    expect(ariaLiveService.id).toContain('clr-aria-live-element-');
  });

  describe('announce', function() {
    it('should not create dom element until `announce` is called', () => {
      ariaLiveContent = document.getElementById(ariaLiveService.id);
      expect(ariaLiveContent).toBe(null);
      ariaLiveService.announce('test');
      ariaLiveContent = document.getElementById(ariaLiveService.id);
      expect(ariaLiveContent).not.toBe(null);
    });

    it(
      'should add message to aria-live content',
      fakeAsync(function(this: TestContext) {
        ariaLiveService.announce('hello world');
        tick(ARIA_LIVE_TICK);
        ariaLiveContent = document.getElementById(ariaLiveService.id);
        expect(ariaLiveContent.innerText).toBe('hello world');
      })
    );

    it(
      'should let you change the aria-live value',
      fakeAsync(function(this: TestContext) {
        ariaLiveService.announce('Must be Assertive', AriaLivePoliteness.assertive);
        tick(ARIA_LIVE_TICK);
        ariaLiveContent = document.getElementById(ariaLiveService.id);
        expect(ariaLiveContent.getAttribute('aria-live')).toBe('assertive');
      })
    );

    it(
      'should not create aria-live container when politness is off',
      fakeAsync(function(this: TestContext) {
        ariaLiveService.announce('message you never gonna see', AriaLivePoliteness.off);
        tick(ARIA_LIVE_TICK);
        ariaLiveContent = document.getElementById(ariaLiveService.id);
        expect(ariaLiveContent).toBe(null);
      })
    );
  });

  describe('ngOnDestroy', function() {
    it(
      'should remove the DOM element from the document',
      fakeAsync(function(this: TestContext) {
        ariaLiveService.announce('hello');
        tick(ARIA_LIVE_TICK);
        ariaLiveContent = document.getElementById(ariaLiveService.id);
        expect(ariaLiveContent.innerText).toBe('hello');
        ariaLiveService.ngOnDestroy();
        expect(document.getElementById(ariaLiveService.id)).toEqual(null);
      })
    );
  });
});
