/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {
  ClarityMotion,
  AnimationModalEnterName,
  AnimationModalEnterConfig,
  registerElementSafely,
} from '@cds/core/internal';
import { CdsInternalOverlay } from './overlay.element.js';

ClarityMotion.add(AnimationModalEnterName, AnimationModalEnterConfig);

registerElementSafely('cds-internal-overlay', CdsInternalOverlay);

declare global {
  interface HTMLElementTagNameMap {
    'cds-internal-overlay': CdsInternalOverlay;
  }
}
