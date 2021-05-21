/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { registerElementSafely } from '@cds/core/internal';
import { CdsCardTagName, CdsCard } from './card.element.js';

registerElementSafely(CdsCardTagName, CdsCard);

declare global {
  interface HTMLElementTagNameMap {
    [CdsCardTagName]: CdsCard;
  }
}
