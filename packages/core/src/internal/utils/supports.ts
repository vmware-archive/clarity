/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { camelCaseToKebabCase } from './string.js';

export interface FeatureSupportMatrix {
  js?: boolean;
  flexGap?: boolean;
}

class BrowserFeatures {
  supports = {
    js: true,
    flexGap: supportsFlexGap(),
  };

  constructor() {
    if (!document.body.hasAttribute('cds-supports') || document.body.getAttribute('cds-supports') === 'no-js') {
      const supports = camelCaseToKebabCase(
        Object.keys(this.supports).reduce(
          (prev, next) => `${prev} ${(this.supports as any)[next] ? next : `no-${next}`}`,
          ''
        )
      ).trim();
      document.body.setAttribute('cds-supports', supports);
    }
  }
}

export const browserFeatures = new BrowserFeatures();

function supportsFlexGap(): boolean {
  const flex = document.createElement('div');
  flex.style.display = 'flex';
  flex.style.flexDirection = 'column';
  flex.style.rowGap = '1px';

  // create two, elements inside it
  flex.appendChild(document.createElement('div'));
  flex.appendChild(document.createElement('div'));

  // append to the DOM (needed to obtain scrollHeight)
  document.body.appendChild(flex);
  const isSupported = flex.scrollHeight === 1; // flex container should be 1px high from the row-gap
  (flex.parentNode as Element).removeChild(flex);
  return isSupported;
}
