/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { EventSubject } from './event-subject.js';

describe('EventSubject', () => {
  it('executes callback when calling next', () => {
    const subject = new EventSubject<number>();
    let count = 0;
    subject.subscribe(v => (count = count + v));

    subject.emit(1);
    subject.emit(1);

    expect(count).toBe(2);
  });

  it('stops executing when unsubscribed', () => {
    const subject = new EventSubject<number>();
    let count = 0;
    const subscription = subject.subscribe(v => (count = count + v));

    let count2 = 0;
    const subscription2 = subject.subscribe(v => (count2 = count2 + v));

    subject.emit(1);
    subject.emit(1);

    expect(count).toBe(2);
    expect(count2).toBe(2);

    subscription.unsubscribe();

    subject.emit(1);
    expect(count).toBe(2);
    expect(count2).toBe(3);

    subscription2.unsubscribe();
    subject.emit(1);
    expect(count2).toBe(3);
  });
});
