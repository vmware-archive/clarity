/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { ClrCommonStringsService } from './common-strings.service';
import { commonStringsDefault } from './common-strings.default';

describe('Common Strings Service', function() {
  let service;

  beforeEach(function() {
    service = new ClrCommonStringsService();
  });

  it('can get a value from common strings default', function() {
    expect(service.keys.open).toEqual(commonStringsDefault.open);
  });

  it('can update its definitions', function() {
    service.localize({ open: 'CUSTOM_OPEN' });
    expect(service.keys.open).toEqual('CUSTOM_OPEN');
  });

  it('can replace a set of tokens when getting a string', function() {
    service.localize({ open: 'Open {OPEN}' });
    expect(service.parse(service.keys.open, { OPEN: 'Seaseme' })).toEqual('Open Seaseme');

    service.localize({ close: 'Close {ONE} {TWO}' });
    expect(service.parse(service.keys.close, { ONE: 'Uno', TWO: 'Dos' })).toEqual('Close Uno Dos');
  });
});
