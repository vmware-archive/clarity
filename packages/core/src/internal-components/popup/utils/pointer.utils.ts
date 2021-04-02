/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { svg, TemplateResult } from 'lit';

/* c8 ignore next */
export function getPointer(type: string): TemplateResult<2> {
  if (type === 'angle') {
    return svg`<svg part="pointer-img" class="pointer-img angle-pointer" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" height="12" width="12">
        <path part="pointer-fill" class="pointer-fill" d="M0 12, 0 0, 12 12Z"></path>
        <path part="pointer-border" class="pointer-border" d="M0 12, 0 0, 12 12, 10 12, 1.4 3, 1.4 12Z"></path>
      </svg>`;
  } else {
    return svg`<svg part="pointer-img" class="pointer-img default-pointer" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 10L14 16H2L8 10Z" part="pointer-fill" class="pointer-fill"></path>
      <path d="M8 10L14 16H12.6L8 11.4L3.4 16H2L8 10Z" part="pointer-border" class="pointer-border"></path>
    </svg>`;
  }
}
