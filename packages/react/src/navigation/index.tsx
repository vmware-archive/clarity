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
import { logReactVersion } from '../utils/index';

export const CdsNavigation = createComponent(React, 'cds-navigation', Navigation, {
  onExpandedChange: 'expandedChange',
  onCdsMotionChange: 'cdsMotionChange',
});
export const CdsNavigationGroup = createComponent(React, 'cds-navigation-group', NavigationGroup, {
  onExpandedChange: 'expandedChange',
  onCdsMotionChange: 'cdsMotionChange',
});
export const CdsNavigationStart = createComponent(React, 'cds-navigation-start', NavigationStart);
export const CdsNavigationItem = createComponent(React, 'cds-navigation-item', NavigationItem);

/**
 * Setting displayName on the prototype is a workaround for now.
 * See: https://github.com/lit/lit/issues/2154
 * Follow: https://github.com/lit/lit/pull/2155
 */
CdsNavigation.displayName = 'CdsNavigation';
CdsNavigationGroup.displayName = 'CdsNavigationGroup';
CdsNavigationStart.displayName = 'CdsNavigationStart';
CdsNavigationItem.displayName = 'CdsNavigationItem';

logReactVersion(React);
