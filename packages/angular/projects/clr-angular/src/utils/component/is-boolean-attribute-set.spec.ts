/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { isBooleanAttributeSet } from './is-boolean-attribute-set';

describe('isAttributeSet', () => {
  it('should return boolean true', () => {
    expect(isBooleanAttributeSet('')).toBeTruthy();
    expect(isBooleanAttributeSet(true)).toBeTruthy();
    expect(isBooleanAttributeSet('true')).toBeTruthy();
    expect(isBooleanAttributeSet('false')).toBeTruthy();
    expect(isBooleanAttributeSet('random string ')).toBeTruthy();
  });

  it('should return boolean false', () => {
    expect(isBooleanAttributeSet(null)).toBeFalsy();
    expect(isBooleanAttributeSet(false)).toBeFalsy();
  });
});
