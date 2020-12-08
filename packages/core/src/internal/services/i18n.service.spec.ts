/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { componentStringsDefault, I18nService } from './i18n.service.js';

describe('I18nService', () => {
  const closeButtonAriaLabelText = 'close this alert';
  const customText = "custom text for a key that doesn't exist by default.";

  it('should provide default values', () => {
    expect(I18nService.keys.dropdown).toEqual(componentStringsDefault.dropdown);
  });

  it('should allow override of default values', () => {
    expect(I18nService.keys.alert.closeButtonAriaLabel).toEqual(componentStringsDefault.alert.closeButtonAriaLabel);
    I18nService.localize({
      alert: { closeButtonAriaLabel: closeButtonAriaLabelText },
    });
    expect(I18nService.keys.alert.closeButtonAriaLabel).toEqual(closeButtonAriaLabelText);
  });

  it('should allow adding new key and values', () => {
    I18nService.localize({
      foo: { bar: customText },
    });
    expect(I18nService.keys.foo).toBeDefined();
    expect(I18nService.keys.foo.bar).toBeDefined();
    expect(I18nService.keys.foo.bar).toEqual(customText);
  });
});
