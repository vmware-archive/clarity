/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

// we export any non component code such as utilities at the root '@clr/core'
export { I18nService, componentStringsDefault } from '@cds/core/internal';

// type global attribute utilities
declare global {
  interface HTMLElement {
    'cds-text': string;
    'cds-layout': string;
    'cds-list': string;
    'cds-table': string;
  }

  interface HTMLElementTagNameMap {
    'cds-demo': HTMLElement;
    'cds-placeholder': HTMLElement;
  }
}
