/*
* Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
* This software is released under MIT license.
* The full license information can be found in LICENSE in the root directory of this project.
*/

import { ClarityIcons } from '../icon.service';
import { IconAlias, IconShapeTuple } from '../interfaces/icon.interfaces';

import { angleIcon, angleIconName } from '../shapes/angle';
import { angleDoubleIcon, angleDoubleIconName } from '../shapes/angle-double';
import { arrowIcon, arrowIconName } from '../shapes/arrow';
import { barsIcon, barsIconName } from '../shapes/bars';
import { bellIcon, bellIconName } from '../shapes/bell';
import { calendarIcon, calendarIconName } from '../shapes/calendar';
import { checkIcon, checkIconName } from '../shapes/check';
import { checkCircleIcon, checkCircleIconName } from '../shapes/check-circle';
import { cloudIcon, cloudIconName } from '../shapes/cloud';
import { cogIcon, cogIconName } from '../shapes/cog';
import { ellipsisHorizontalIcon, ellipsisHorizontalIconName } from '../shapes/ellipsis-horizontal';
import { ellipsisVerticalIcon, ellipsisVerticalIconName } from '../shapes/ellipsis-vertical';
import { errorStandardIcon, errorStandardIconName } from '../shapes/error-standard';
import { eventIcon, eventIconName } from '../shapes/event';
import { exclamationCircleIcon, exclamationCircleIconName } from '../shapes/exclamation-circle';
import { exclamationTriangleIcon, exclamationTriangleIconName } from '../shapes/exclamation-triangle';
import { eyeIcon, eyeIconName } from '../shapes/eye';
import { eyeHideIcon, eyeHideIconName } from '../shapes/eye-hide';
import { filterGridIcon, filterGridIconName } from '../shapes/filter-grid';
import { filterGridCircleIcon, filterGridCircleIconName } from '../shapes/filter-grid-circle';
import { folderIcon, folderIconName } from '../shapes/folder';
import { folderOpenIcon, folderOpenIconName } from '../shapes/folder-open';
import { helpInfoIcon, helpInfoIconName } from '../shapes/help-info';
import { homeIcon, homeIconName } from '../shapes/home';
import { imageIcon, imageIconName } from '../shapes/image';
import { infoCircleIcon, infoCircleIconName } from '../shapes/info-circle';
import { infoStandardIcon, infoStandardIconName } from '../shapes/info-standard';
import { searchIcon, searchIconName } from '../shapes/search';
import { stepForward2Icon, stepForward2IconName } from '../shapes/step-forward-2';
import { successStandardIcon, successStandardIconName } from '../shapes/success-standard';
import { timesIcon, timesIconName } from '../shapes/times';
import { unknownIconName } from '../shapes/unknown';
import { unknownStatusIcon, unknownStatusIconName } from '../shapes/unknown-status';
import { userIcon, userIconName } from '../shapes/user';
import { viewColumnsIcon, viewColumnsIconName } from '../shapes/view-columns';
import { vmBugIcon, vmBugIconName } from '../shapes/vm-bug';
import { vmBugInverseIcon, vmBugInverseIconName } from '../shapes/vm-bug-inverse';
import { warningStandardIcon, warningStandardIconName } from '../shapes/warning-standard';

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
 * import '@clr/core/icon';
 * import { loadCoreIconSet } from '@clr/core/icon-shapes';
 *
 * loadCoreIconSet();
 * ```
 *
 */
export function loadCoreIconSet() {
  ClarityIcons.addIcons(...coreCollectionIcons);
  ClarityIcons.addAliases(...coreCollectionAliases);
}

declare module '@clr/core/common' {
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
