/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Observable, Subject } from 'rxjs';
import { wrapObservable } from './wrap-observable';

interface TestContext {
  original: Subject<string>;
  wrapped: Observable<string>;
  log: string[];
}

export default function (): void {
  describe('wrapObservable()', function () {
    beforeEach(function (this: TestContext) {
      this.log = [];
      this.original = new Subject<string>();
      this.wrapped = wrapObservable(
        this.original,
        () => this.log.push('Subscribed'),
        () => this.log.push('Unsubscribed')
      );
    });

    afterEach(function (this: TestContext) {
      this.original.complete();
    });

    it('executes the onSubscribe function on subscription', function (this: TestContext) {
      expect(this.log).toEqual([]);
      this.wrapped.subscribe(value => this.log.push(value));
      expect(this.log).toEqual(['Subscribed']);
    });

    it('executes the onUnsubscribe function on unsubscription', function (this: TestContext) {
      expect(this.log).toEqual([]);
      const subscription = this.wrapped.subscribe(value => this.log.push(value));
      this.log.length = 0;
      subscription.unsubscribe();
      expect(this.log).toEqual(['Unsubscribed']);
    });

    it('emits the same values as the original observable', function (this: TestContext) {
      this.wrapped.subscribe(value => this.log.push(value));
      this.log.length = 0;
      this.original.next('Hello');
      expect(this.log).toEqual(['Hello']);
      this.original.next('World');
      expect(this.log).toEqual(['Hello', 'World']);
    });
  });
}
