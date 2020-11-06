/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { ClarityIcons } from '../icon.service.js';
import { IconAlias, IconShapeTuple } from '../interfaces/icon.interfaces.js';

import { angleDoubleIcon, angleDoubleIconName } from '../shapes/angle-double.js';
import { angleIcon, angleIconName } from '../shapes/angle.js';
import { arrowIcon, arrowIconName } from '../shapes/arrow.js';
import { barsIcon, barsIconName } from '../shapes/bars.js';
import { bellIcon, bellIconName } from '../shapes/bell.js';
import { calendarIcon, calendarIconName } from '../shapes/calendar.js';
import { checkCircleIcon, checkCircleIconName } from '../shapes/check-circle.js';
import { checkIcon, checkIconName } from '../shapes/check.js';
import { cloudIcon, cloudIconName } from '../shapes/cloud.js';
import { cogIcon, cogIconName } from '../shapes/cog.js';
import { ellipsisHorizontalIcon, ellipsisHorizontalIconName } from '../shapes/ellipsis-horizontal.js';
import { ellipsisVerticalIcon, ellipsisVerticalIconName } from '../shapes/ellipsis-vertical.js';
import { errorStandardIcon, errorStandardIconName } from '../shapes/error-standard.js';
import { eventIcon, eventIconName } from '../shapes/event.js';
import { exclamationCircleIcon, exclamationCircleIconName } from '../shapes/exclamation-circle.js';
import { exclamationTriangleIcon, exclamationTriangleIconName } from '../shapes/exclamation-triangle.js';
import { eyeHideIcon, eyeHideIconName } from '../shapes/eye-hide.js';
import { eyeIcon, eyeIconName } from '../shapes/eye.js';
import { filterGridCircleIcon, filterGridCircleIconName } from '../shapes/filter-grid-circle.js';
import { filterGridIcon, filterGridIconName } from '../shapes/filter-grid.js';
import { folderOpenIcon, folderOpenIconName } from '../shapes/folder-open.js';
import { folderIcon, folderIconName } from '../shapes/folder.js';
import { helpInfoIcon, helpInfoIconName } from '../shapes/help-info.js';
import { homeIcon, homeIconName } from '../shapes/home.js';
import { imageIcon, imageIconName } from '../shapes/image.js';
import { infoCircleIcon, infoCircleIconName } from '../shapes/info-circle.js';
import { infoStandardIcon, infoStandardIconName } from '../shapes/info-standard.js';
import { searchIcon, searchIconName } from '../shapes/search.js';
import { stepForward2Icon, stepForward2IconName } from '../shapes/step-forward-2.js';
import { successStandardIcon, successStandardIconName } from '../shapes/success-standard.js';
import { timesIcon, timesIconName } from '../shapes/times.js';
import { unknownStatusIcon, unknownStatusIconName } from '../shapes/unknown-status.js';
import { unknownIconName } from '../shapes/unknown.js';
import { userIcon, userIconName } from '../shapes/user.js';
import { viewColumnsIcon, viewColumnsIconName } from '../shapes/view-columns.js';
import { vmBugInverseIcon, vmBugInverseIconName } from '../shapes/vm-bug-inverse.js';
import { vmBugIcon, vmBugIconName } from '../shapes/vm-bug.js';
import { warningStandardIcon, warningStandardIconName } from '../shapes/warning-standard.js';

export const coreCollectionIcons: IconShapeTuple[] = [
  angleIcon,
  angleDoubleIcon,
  arrowIcon,
  barsIcon,
  bellIcon,
  calendarIcon,
  checkIcon,
  checkCircleIcon,
  cloudIcon,
  cogIcon,
  ellipsisHorizontalIcon,
  ellipsisVerticalIcon,
  errorStandardIcon,
  eventIcon,
  exclamationCircleIcon,
  exclamationTriangleIcon,
  eyeIcon,
  eyeHideIcon,
  filterGridIcon,
  filterGridCircleIcon,
  folderIcon,
  folderOpenIcon,
  helpInfoIcon,
  homeIcon,
  imageIcon,
  infoCircleIcon,
  infoStandardIcon,
  searchIcon,
  stepForward2Icon,
  successStandardIcon,
  timesIcon,
  unknownStatusIcon,
  userIcon,
  viewColumnsIcon,
  vmBugIcon,
  vmBugInverseIcon,
  warningStandardIcon,
];

export const coreCollectionAliases: IconAlias[] = [
  [homeIconName, ['house']],
  [cogIconName, ['settings']],
  [checkIconName, ['success']],
  [timesIconName, ['close']],
  [exclamationTriangleIconName, ['warning']],
  [exclamationCircleIconName, ['error']],
  [infoCircleIconName, ['info']],
  [barsIconName, ['menu']],
  [userIconName, ['avatar']],
  [angleIconName, ['caret']],
  [folderIconName, ['directory']],
  [bellIconName, ['notification']],
  [angleDoubleIconName, ['collapse']],
];

/**
 * Function that can be called to load the core icon set.
 *
 * ```typescript
 * import '@cds/core/icon/register.js';
 * import { loadCoreIconSet } from '@cds/core/icon';
 *
 * loadCoreIconSet();
 * ```
 *
 */
export function loadCoreIconSet() {
  ClarityIcons.addIcons(...coreCollectionIcons);
  ClarityIcons.addAliases(...coreCollectionAliases);
}

declare module '@cds/core/internal' {
  interface IconRegistrySources {
    [unknownIconName]: string;
    [angleIconName]: string;
    [angleDoubleIconName]: string;
    [arrowIconName]: string;
    [barsIconName]: string;
    [bellIconName]: string;
    [calendarIconName]: string;
    [checkIconName]: string;
    [checkCircleIconName]: string;
    [cloudIconName]: string;
    [cogIconName]: string;
    [ellipsisHorizontalIconName]: string;
    [ellipsisVerticalIconName]: string;
    [errorStandardIconName]: string;
    [eventIconName]: string;
    [exclamationCircleIconName]: string;
    [exclamationTriangleIconName]: string;
    [eyeIconName]: string;
    [eyeHideIconName]: string;
    [filterGridIconName]: string;
    [filterGridCircleIconName]: string;
    [folderIconName]: string;
    [folderOpenIconName]: string;
    [helpInfoIconName]: string;
    [homeIconName]: string;
    [imageIconName]: string;
    [infoCircleIconName]: string;
    [infoStandardIconName]: string;
    [searchIconName]: string;
    [stepForward2IconName]: string;
    [successStandardIconName]: string;
    [timesIconName]: string;
    [unknownStatusIconName]: string;
    [userIconName]: string;
    [viewColumnsIconName]: string;
    [vmBugIconName]: string;
    [vmBugInverseIconName]: string;
    [warningStandardIconName]: string;
  }
}
