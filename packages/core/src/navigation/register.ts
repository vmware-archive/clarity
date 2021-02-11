/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import '@cds/core/button/register.js';
import '@cds/core/icon/register.js';
import '@cds/core/divider/register.js';
import {
  AnimationNavigationGroupOpenConfig,
  AnimationNavigationGroupOpenName,
  AnimationNavigationOpenConfig,
  AnimationNavigationOpenName,
  ClarityMotion,
  registerElementSafely,
} from '@cds/core/internal';
import { CdsNavigation, CdsNavigationTagName } from './navigation.element.js';
import { CdsNavigationGroup, CdsNavigationGroupTagName } from './navigation-group.element.js';
import { CdsNavigationStart, CdsNavigationStartTagName } from './navigation-start.element.js';
import { CdsNavigationItem, CdsNavigationItemTagName } from './navigation-item.element.js';

import { ClarityIcons } from '@cds/core/icon/icon.service.js';
import { angleIcon } from '@cds/core/icon/shapes/angle.js';
import { angleDoubleIcon } from '@cds/core/icon/shapes/angle-double.js';

ClarityIcons.addIcons(angleIcon);
ClarityIcons.addIcons(angleDoubleIcon);
ClarityMotion.add(AnimationNavigationGroupOpenName, AnimationNavigationGroupOpenConfig);
ClarityMotion.add(AnimationNavigationOpenName, AnimationNavigationOpenConfig);

registerElementSafely(CdsNavigationTagName, CdsNavigation);
registerElementSafely(CdsNavigationGroupTagName, CdsNavigationGroup);
registerElementSafely(CdsNavigationStartTagName, CdsNavigationStart);
registerElementSafely(CdsNavigationItemTagName, CdsNavigationItem);

declare global {
  interface HTMLElementTagNameMap {
    'cds-navigation': CdsNavigation;
    'cds-navigation-group': CdsNavigationGroup;
    'cds-navigation-start': CdsNavigationStart;
    'cds-navigation-item': CdsNavigationItem;
  }
}
