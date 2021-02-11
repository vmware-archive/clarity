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
import { createComponent } from '../converter/react-wrapper';

export const CdsNavigation = createComponent('cds-navigation', Navigation, {
  onExpandedChange: 'expandedChange',
  onCdsMotionChange: 'cdsMotionChange',
});
export const CdsNavigationGroup = createComponent('cds-navigation-group', NavigationGroup, {
  onExpandedChange: 'expandedChange',
  onCdsMotionChange: 'cdsMotionChange',
});
export const CdsNavigationStart = createComponent('cds-navigation-start', NavigationStart);
export const CdsNavigationItem = createComponent('cds-navigation-item', NavigationItem);
