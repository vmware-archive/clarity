/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {
  CdsNavigation as Navigation,
  CdsNavigationGroup as NavigationGroup,
  CdsNavigationStart as NavigationStart,
  CdsNavigationItem as NavigationItem,
} from '@cds/core/navigation';
import '@cds/core/navigation/register';
import { createComponent } from '@lit-labs/react';
import * as React from 'react';
import { logReactVersion } from '../utils/index.js';

export const CdsNavigation = createComponent(
  React,
  'cds-navigation',
  Navigation,
  {
    onExpandedChange: 'expandedChange',
    onCdsMotionChange: 'cdsMotionChange',
  },
  'CdsNavigation'
);
export const CdsNavigationGroup = createComponent(
  React,
  'cds-navigation-group',
  NavigationGroup,
  {
    onExpandedChange: 'expandedChange',
    onCdsMotionChange: 'cdsMotionChange',
  },
  'CdsNavigationGroup'
);
export const CdsNavigationStart = createComponent(
  React,
  'cds-navigation-start',
  NavigationStart,
  {},
  'CdsNavigationStart'
);
export const CdsNavigationItem = createComponent(React, 'cds-navigation-item', NavigationItem, {}, 'CdsNavigationItem');

logReactVersion(React);
