/*
* Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
* This software is released under MIT license.
* The full license information can be found in LICENSE in the root directory of this project.
*/

import { ClarityIcons } from '../icon.service';
import { IconAlias, IconShapeTuple } from '../interfaces/icon.interfaces';

import { accessibility1Icon, accessibility1IconName } from '../shapes/accessibility-1';
import { accessibility2Icon, accessibility2IconName } from '../shapes/accessibility-2';
import { addTextIcon, addTextIconName } from '../shapes/add-text';
import { alarmClockIcon, alarmClockIconName } from '../shapes/alarm-clock';
import { alarmOffIcon, alarmOffIconName } from '../shapes/alarm-off';
import { asteriskIcon, asteriskIconName } from '../shapes/asterisk';
import { banIcon, banIconName } from '../shapes/ban';
import { betaIcon, betaIconName } from '../shapes/beta';
import { boltIcon, boltIconName } from '../shapes/bolt';
import { bookIcon, bookIconName } from '../shapes/book';
import { briefcaseIcon, briefcaseIconName } from '../shapes/briefcase';
import { bubbleExclamationIcon, bubbleExclamationIconName } from '../shapes/bubble-exclamation';
import { bugIcon, bugIconName } from '../shapes/bug';
import { bullseyeIcon, bullseyeIconName } from '../shapes/bullseye';
import { childArrowIcon, childArrowIconName } from '../shapes/child-arrow';
import { circleIcon, circleIconName } from '../shapes/circle';
import { circleArrowIcon, circleArrowIconName } from '../shapes/circle-arrow';
import { clipboardIcon, clipboardIconName } from '../shapes/clipboard';
import { clockIcon, clockIconName } from '../shapes/clock';
import { cloneIcon, cloneIconName } from '../shapes/clone';
import { collapseCardIcon, collapseCardIconName } from '../shapes/collapse-card';
import { colorPickerIcon, colorPickerIconName } from '../shapes/color-picker';
import { copyIcon, copyIconName } from '../shapes/copy';
import { copyToClipboardIcon, copyToClipboardIconName } from '../shapes/copy-to-clipboard';
import { crosshairsIcon, crosshairsIconName } from '../shapes/crosshairs';
import { cursorArrowIcon, cursorArrowIconName } from '../shapes/cursor-arrow';
import { cursorHandIcon, cursorHandIconName } from '../shapes/cursor-hand';
import { cursorHandClickIcon, cursorHandClickIconName } from '../shapes/cursor-hand-click';
import { cursorHandGrabIcon, cursorHandGrabIconName } from '../shapes/cursor-hand-grab';
import { cursorHandOpenIcon, cursorHandOpenIconName } from '../shapes/cursor-hand-open';
import { cursorMoveIcon, cursorMoveIconName } from '../shapes/cursor-move';
import { detailsIcon, detailsIconName } from '../shapes/details';
import { dotCircleIcon, dotCircleIconName } from '../shapes/dot-circle';
import { downloadIcon, downloadIconName } from '../shapes/download';
import { dragHandleIcon, dragHandleIconName } from '../shapes/drag-handle';
import { dragHandleCornerIcon, dragHandleCornerIconName } from '../shapes/drag-handle-corner';
import { eraserIcon, eraserIconName } from '../shapes/eraser';
import { expandCardIcon, expandCardIconName } from '../shapes/expand-card';
import { fileIcon, fileIconName } from '../shapes/file';
import { fileGroupIcon, fileGroupIconName } from '../shapes/file-group';
import { fileSettingsIcon, fileSettingsIconName } from '../shapes/file-settings';
import { fileZipIcon, fileZipIconName } from '../shapes/file-zip';
import { filterIcon, filterIconName } from '../shapes/filter';
import { filter2Icon, filter2IconName } from '../shapes/filter-2';
import { filterOffIcon, filterOffIconName } from '../shapes/filter-off';
import { firewallIcon, firewallIconName } from '../shapes/firewall';
import { firstAidIcon, firstAidIconName } from '../shapes/first-aid';
import { fishIcon, fishIconName } from '../shapes/fish';
import { flameIcon, flameIconName } from '../shapes/flame';
import { formIcon, formIconName } from '../shapes/form';
import { fuelIcon, fuelIconName } from '../shapes/fuel';
import { gridViewIcon, gridViewIconName } from '../shapes/grid-view';
import { helpIcon, helpIconName } from '../shapes/help';
import { historyIcon, historyIconName } from '../shapes/history';
import { hourglassIcon, hourglassIconName } from '../shapes/hourglass';
import { idBadgeIcon, idBadgeIconName } from '../shapes/id-badge';
import { keyIcon, keyIconName } from '../shapes/key';
import { landscapeIcon, landscapeIconName } from '../shapes/landscape';
import { libraryIcon, libraryIconName } from '../shapes/library';
import { lightbulbIcon, lightbulbIconName } from '../shapes/lightbulb';
import { listIcon, listIconName } from '../shapes/list';
import { lockIcon, lockIconName } from '../shapes/lock';
import { loginIcon, loginIconName } from '../shapes/login';
import { logoutIcon, logoutIconName } from '../shapes/logout';
import { minusIcon, minusIconName } from '../shapes/minus';
import { minusCircleIcon, minusCircleIconName } from '../shapes/minus-circle';
import { moonIcon, moonIconName } from '../shapes/moon';
import { newIcon, newIconName } from '../shapes/new';
import { noAccessIcon, noAccessIconName } from '../shapes/no-access';
import { noteIcon, noteIconName } from '../shapes/note';
import { objectsIcon, objectsIconName } from '../shapes/objects';
import { organizationIcon, organizationIconName } from '../shapes/organization';
import { paperclipIcon, paperclipIconName } from '../shapes/paperclip';
import { pasteIcon, pasteIconName } from '../shapes/paste';
import { pencilIcon, pencilIconName } from '../shapes/pencil';
import { pinIcon, pinIconName } from '../shapes/pin';
import { pinboardIcon, pinboardIconName } from '../shapes/pinboard';
import { plusIcon, plusIconName } from '../shapes/plus';
import { plusCircleIcon, plusCircleIconName } from '../shapes/plus-circle';
import { popOutIcon, popOutIconName } from '../shapes/pop-out';
import { portraitIcon, portraitIconName } from '../shapes/portrait';
import { printerIcon, printerIconName } from '../shapes/printer';
import { recycleIcon, recycleIconName } from '../shapes/recycle';
import { redoIcon, redoIconName } from '../shapes/redo';
import { refreshIcon, refreshIconName } from '../shapes/refresh';
import { repeatIcon, repeatIconName } from '../shapes/repeat';
import { resizeIcon, resizeIconName } from '../shapes/resize';
import { scissorsIcon, scissorsIconName } from '../shapes/scissors';
import { scrollIcon, scrollIconName } from '../shapes/scroll';
import { shrinkIcon, shrinkIconName } from '../shapes/shrink';
import { sliderIcon, sliderIconName } from '../shapes/slider';
import { snowflakeIcon, snowflakeIconName } from '../shapes/snowflake';
import { sortByIcon, sortByIconName } from '../shapes/sort-by';
import { sunIcon, sunIconName } from '../shapes/sun';
import { switchIcon, switchIconName } from '../shapes/switch';
import { syncIcon, syncIconName } from '../shapes/sync';
import { tableIcon, tableIconName } from '../shapes/table';
import { tagIcon, tagIconName } from '../shapes/tag';
import { tagsIcon, tagsIconName } from '../shapes/tags';
import { targetIcon, targetIconName } from '../shapes/target';
import { thermometerIcon, thermometerIconName } from '../shapes/thermometer';
import { timesCircleIcon, timesCircleIconName } from '../shapes/times-circle';
import { toolsIcon, toolsIconName } from '../shapes/tools';
import { trashIcon, trashIconName } from '../shapes/trash';
import { treeIcon, treeIconName } from '../shapes/tree';
import { treeViewIcon, treeViewIconName } from '../shapes/tree-view';
import { twoWayArrowsIcon, twoWayArrowsIconName } from '../shapes/two-way-arrows';
import { undoIcon, undoIconName } from '../shapes/undo';
import { unlockIcon, unlockIconName } from '../shapes/unlock';
import { uploadIcon, uploadIconName } from '../shapes/upload';
import { usersIcon, usersIconName } from '../shapes/users';
import { viewCardsIcon, viewCardsIconName } from '../shapes/view-cards';
import { viewListIcon, viewListIconName } from '../shapes/view-list';
import { volumeIcon, volumeIconName } from '../shapes/volume';
import { wandIcon, wandIconName } from '../shapes/wand';
import { windowCloseIcon, windowCloseIconName } from '../shapes/window-close';
import { windowMaxIcon, windowMaxIconName } from '../shapes/window-max';
import { windowMinIcon, windowMinIconName } from '../shapes/window-min';
import { windowRestoreIcon, windowRestoreIconName } from '../shapes/window-restore';
import { worldIcon, worldIconName } from '../shapes/world';
import { wrenchIcon, wrenchIconName } from '../shapes/wrench';
import { zoomInIcon, zoomInIconName } from '../shapes/zoom-in';
import { zoomOutIcon, zoomOutIconName } from '../shapes/zoom-out';

export const essentialCollectionIcons: IconShapeTuple[] = [
  accessibility1Icon,
  accessibility2Icon,
  addTextIcon,
  alarmClockIcon,
  alarmOffIcon,
  asteriskIcon,
  banIcon,
  betaIcon,
  boltIcon,
  bookIcon,
  briefcaseIcon,
  bubbleExclamationIcon,
  bugIcon,
  bullseyeIcon,
  childArrowIcon,
  circleIcon,
  circleArrowIcon,
  clipboardIcon,
  clockIcon,
  cloneIcon,
  collapseCardIcon,
  colorPickerIcon,
  copyIcon,
  copyToClipboardIcon,
  crosshairsIcon,
  cursorArrowIcon,
  cursorHandIcon,
  cursorHandClickIcon,
  cursorHandGrabIcon,
  cursorHandOpenIcon,
  cursorMoveIcon,
  detailsIcon,
  dotCircleIcon,
  downloadIcon,
  dragHandleIcon,
  dragHandleCornerIcon,
  eraserIcon,
  expandCardIcon,
  fileGroupIcon,
  fileIcon,
  fileSettingsIcon,
  fileZipIcon,
  filterIcon,
  filter2Icon,
  filterOffIcon,
  firewallIcon,
  firstAidIcon,
  fishIcon,
  flameIcon,
  formIcon,
  fuelIcon,
  gridViewIcon,
  helpIcon,
  historyIcon,
  hourglassIcon,
  idBadgeIcon,
  keyIcon,
  landscapeIcon,
  libraryIcon,
  lightbulbIcon,
  listIcon,
  lockIcon,
  loginIcon,
  logoutIcon,
  minusIcon,
  minusCircleIcon,
  moonIcon,
  newIcon,
  noAccessIcon,
  noteIcon,
  objectsIcon,
  organizationIcon,
  paperclipIcon,
  pasteIcon,
  pencilIcon,
  pinIcon,
  pinboardIcon,
  plusIcon,
  plusCircleIcon,
  popOutIcon,
  portraitIcon,
  printerIcon,
  recycleIcon,
  redoIcon,
  refreshIcon,
  repeatIcon,
  resizeIcon,
  scissorsIcon,
  scrollIcon,
  shrinkIcon,
  sliderIcon,
  snowflakeIcon,
  sortByIcon,
  sunIcon,
  switchIcon,
  syncIcon,
  tableIcon,
  tagIcon,
  tagsIcon,
  targetIcon,
  thermometerIcon,
  timesCircleIcon,
  toolsIcon,
  trashIcon,
  treeIcon,
  treeViewIcon,
  twoWayArrowsIcon,
  undoIcon,
  unlockIcon,
  uploadIcon,
  usersIcon,
  viewCardsIcon,
  viewListIcon,
  volumeIcon,
  wandIcon,
  windowCloseIcon,
  windowMaxIcon,
  windowMinIcon,
  windowRestoreIcon,
  worldIcon,
  wrenchIcon,
  zoomInIcon,
  zoomOutIcon,
];

export const essentialCollectionAliases: IconAlias[] = [
  [pencilIconName, ['edit']],
  [noteIconName, ['note-edit']],
  [usersIconName, ['group']],
  [fileIconName, ['document']],
  [plusIconName, ['add']],
  [banIconName, ['cancel']],
  [timesCircleIconName, ['remove']],
  [loginIconName, ['sign-in']],
  [logoutIconName, ['sign-out']],
  [boltIconName, ['lightning']],
  [organizationIconName, ['flow-chart']],
  [bubbleExclamationIconName, ['alert']],
  [pinboardIconName, ['pinned']],
  [paperclipIconName, ['attachment']],
  [shrinkIconName, ['resize-down']],
  [resizeIconName, ['resize-up']],
];

/**
 * Function that can be called to load the core icon set.
 *
 * ```typescript
 * import '@clr/core/icon';
 * import { loadEssentialIconSet } from '@clr/core/icon-shapes';
 *
 * loadEssentialIconSet();
 * ```
 *
 */
export function loadEssentialIconSet() {
  ClarityIcons.addIcons(...essentialCollectionIcons);
  ClarityIcons.addAliases(...essentialCollectionAliases);
}

declare module '@clr/core/common' {
  interface IconRegistrySources {
    [accessibility1IconName]: string;
    [accessibility2IconName]: string;
    [addTextIconName]: string;
    [alarmClockIconName]: string;
    [alarmOffIconName]: string;
    [asteriskIconName]: string;
    [banIconName]: string;
    [betaIconName]: string;
    [boltIconName]: string;
    [bookIconName]: string;
    [briefcaseIconName]: string;
    [bubbleExclamationIconName]: string;
    [bugIconName]: string;
    [bullseyeIconName]: string;
    [childArrowIconName]: string;
    [circleIconName]: string;
    [circleArrowIconName]: string;
    [clipboardIconName]: string;
    [clockIconName]: string;
    [cloneIconName]: string;
    [collapseCardIconName]: string;
    [colorPickerIconName]: string;
    [copyIconName]: string;
    [copyToClipboardIconName]: string;
    [crosshairsIconName]: string;
    [cursorArrowIconName]: string;
    [cursorHandIconName]: string;
    [cursorHandClickIconName]: string;
    [cursorHandGrabIconName]: string;
    [cursorHandOpenIconName]: string;
    [cursorMoveIconName]: string;
    [detailsIconName]: string;
    [dotCircleIconName]: string;
    [downloadIconName]: string;
    [dragHandleIconName]: string;
    [dragHandleCornerIconName]: string;
    [eraserIconName]: string;
    [expandCardIconName]: string;
    [fileGroupIconName]: string;
    [fileIconName]: string;
    [fileSettingsIconName]: string;
    [fileZipIconName]: string;
    [filterIconName]: string;
    [filter2IconName]: string;
    [filterOffIconName]: string;
    [firewallIconName]: string;
    [firstAidIconName]: string;
    [fishIconName]: string;
    [flameIconName]: string;
    [formIconName]: string;
    [fuelIconName]: string;
    [gridViewIconName]: string;
    [helpIconName]: string;
    [historyIconName]: string;
    [hourglassIconName]: string;
    [idBadgeIconName]: string;
    [keyIconName]: string;
    [landscapeIconName]: string;
    [libraryIconName]: string;
    [lightbulbIconName]: string;
    [listIconName]: string;
    [lockIconName]: string;
    [loginIconName]: string;
    [logoutIconName]: string;
    [minusIconName]: string;
    [minusCircleIconName]: string;
    [moonIconName]: string;
    [newIconName]: string;
    [noAccessIconName]: string;
    [noteIconName]: string;
    [objectsIconName]: string;
    [organizationIconName]: string;
    [paperclipIconName]: string;
    [pasteIconName]: string;
    [pencilIconName]: string;
    [pinIconName]: string;
    [pinboardIconName]: string;
    [plusIconName]: string;
    [plusCircleIconName]: string;
    [popOutIconName]: string;
    [portraitIconName]: string;
    [printerIconName]: string;
    [recycleIconName]: string;
    [redoIconName]: string;
    [refreshIconName]: string;
    [repeatIconName]: string;
    [resizeIconName]: string;
    [scissorsIconName]: string;
    [scrollIconName]: string;
    [shrinkIconName]: string;
    [sliderIconName]: string;
    [snowflakeIconName]: string;
    [sortByIconName]: string;
    [sunIconName]: string;
    [switchIconName]: string;
    [syncIconName]: string;
    [tableIconName]: string;
    [tagIconName]: string;
    [tagsIconName]: string;
    [targetIconName]: string;
    [thermometerIconName]: string;
    [timesCircleIconName]: string;
    [trashIconName]: string;
    [toolsIconName]: string;
    [treeIconName]: string;
    [treeViewIconName]: string;
    [twoWayArrowsIconName]: string;
    [undoIconName]: string;
    [unlockIconName]: string;
    [uploadIconName]: string;
    [usersIconName]: string;
    [viewCardsIconName]: string;
    [viewListIconName]: string;
    [volumeIconName]: string;
    [wandIconName]: string;
    [windowCloseIconName]: string;
    [windowMaxIconName]: string;
    [windowMinIconName]: string;
    [windowRestoreIconName]: string;
    [worldIconName]: string;
    [wrenchIconName]: string;
    [zoomInIconName]: string;
    [zoomOutIconName]: string;
  }
}
