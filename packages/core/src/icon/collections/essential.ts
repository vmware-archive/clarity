/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { ClarityIcons } from '../icon.service.js';
import { IconAlias, IconShapeTuple } from '../interfaces/icon.interfaces.js';

import { accessibility1Icon, accessibility1IconName } from '../shapes/accessibility-1.js';
import { accessibility2Icon, accessibility2IconName } from '../shapes/accessibility-2.js';
import { addTextIcon, addTextIconName } from '../shapes/add-text.js';
import { alarmClockIcon, alarmClockIconName } from '../shapes/alarm-clock.js';
import { alarmOffIcon, alarmOffIconName } from '../shapes/alarm-off.js';
import { asteriskIcon, asteriskIconName } from '../shapes/asterisk.js';
import { banIcon, banIconName } from '../shapes/ban.js';
import { betaIcon, betaIconName } from '../shapes/beta.js';
import { boltIcon, boltIconName } from '../shapes/bolt.js';
import { bookIcon, bookIconName } from '../shapes/book.js';
import { briefcaseIcon, briefcaseIconName } from '../shapes/briefcase.js';
import { bubbleExclamationIcon, bubbleExclamationIconName } from '../shapes/bubble-exclamation.js';
import { bugIcon, bugIconName } from '../shapes/bug.js';
import { bullseyeIcon, bullseyeIconName } from '../shapes/bullseye.js';
import { childArrowIcon, childArrowIconName } from '../shapes/child-arrow.js';
import { circleArrowIcon, circleArrowIconName } from '../shapes/circle-arrow.js';
import { circleIcon, circleIconName } from '../shapes/circle.js';
import { clipboardIcon, clipboardIconName } from '../shapes/clipboard.js';
import { clockIcon, clockIconName } from '../shapes/clock.js';
import { cloneIcon, cloneIconName } from '../shapes/clone.js';
import { collapseCardIcon, collapseCardIconName } from '../shapes/collapse-card.js';
import { colorPaletteIcon, colorPaletteIconName } from '../shapes/color-palette.js';
import { colorPickerIcon, colorPickerIconName } from '../shapes/color-picker.js';
import { copyToClipboardIcon, copyToClipboardIconName } from '../shapes/copy-to-clipboard.js';
import { copyIcon, copyIconName } from '../shapes/copy.js';
import { crosshairsIcon, crosshairsIconName } from '../shapes/crosshairs.js';
import { cursorArrowIcon, cursorArrowIconName } from '../shapes/cursor-arrow.js';
import { cursorHandClickIcon, cursorHandClickIconName } from '../shapes/cursor-hand-click.js';
import { cursorHandGrabIcon, cursorHandGrabIconName } from '../shapes/cursor-hand-grab.js';
import { cursorHandOpenIcon, cursorHandOpenIconName } from '../shapes/cursor-hand-open.js';
import { cursorHandIcon, cursorHandIconName } from '../shapes/cursor-hand.js';
import { cursorMoveIcon, cursorMoveIconName } from '../shapes/cursor-move.js';
import { detailsIcon, detailsIconName } from '../shapes/details.js';
import { dotCircleIcon, dotCircleIconName } from '../shapes/dot-circle.js';
import { downloadIcon, downloadIconName } from '../shapes/download.js';
import { dragHandleCornerIcon, dragHandleCornerIconName } from '../shapes/drag-handle-corner.js';
import { dragHandleIcon, dragHandleIconName } from '../shapes/drag-handle.js';
import { eraserIcon, eraserIconName } from '../shapes/eraser.js';
import { expandCardIcon, expandCardIconName } from '../shapes/expand-card.js';
import { fileGroupIcon, fileGroupIconName } from '../shapes/file-group.js';
import { fileSettingsIcon, fileSettingsIconName } from '../shapes/file-settings.js';
import { fileZipIcon, fileZipIconName } from '../shapes/file-zip.js';
import { fileIcon, fileIconName } from '../shapes/file.js';
import { filter2Icon, filter2IconName } from '../shapes/filter-2.js';
import { filterOffIcon, filterOffIconName } from '../shapes/filter-off.js';
import { filterIcon, filterIconName } from '../shapes/filter.js';
import { firewallIcon, firewallIconName } from '../shapes/firewall.js';
import { firstAidIcon, firstAidIconName } from '../shapes/first-aid.js';
import { fishIcon, fishIconName } from '../shapes/fish.js';
import { flameIcon, flameIconName } from '../shapes/flame.js';
import { formIcon, formIconName } from '../shapes/form.js';
import { fuelIcon, fuelIconName } from '../shapes/fuel.js';
import { gridViewIcon, gridViewIconName } from '../shapes/grid-view.js';
import { helpIcon, helpIconName } from '../shapes/help.js';
import { historyIcon, historyIconName } from '../shapes/history.js';
import { hourglassIcon, hourglassIconName } from '../shapes/hourglass.js';
import { idBadgeIcon, idBadgeIconName } from '../shapes/id-badge.js';
import { keyIcon, keyIconName } from '../shapes/key.js';
import { landscapeIcon, landscapeIconName } from '../shapes/landscape.js';
import { libraryIcon, libraryIconName } from '../shapes/library.js';
import { lightbulbIcon, lightbulbIconName } from '../shapes/lightbulb.js';
import { listIcon, listIconName } from '../shapes/list.js';
import { lockIcon, lockIconName } from '../shapes/lock.js';
import { loginIcon, loginIconName } from '../shapes/login.js';
import { logoutIcon, logoutIconName } from '../shapes/logout.js';
import { minusCircleIcon, minusCircleIconName } from '../shapes/minus-circle.js';
import { minusIcon, minusIconName } from '../shapes/minus.js';
import { moonIcon, moonIconName } from '../shapes/moon.js';
import { newIcon, newIconName } from '../shapes/new.js';
import { noAccessIcon, noAccessIconName } from '../shapes/no-access.js';
import { noteIcon, noteIconName } from '../shapes/note.js';
import { objectsIcon, objectsIconName } from '../shapes/objects.js';
import { organizationIcon, organizationIconName } from '../shapes/organization.js';
import { paperclipIcon, paperclipIconName } from '../shapes/paperclip.js';
import { pasteIcon, pasteIconName } from '../shapes/paste.js';
import { pencilIcon, pencilIconName } from '../shapes/pencil.js';
import { pinIcon, pinIconName } from '../shapes/pin.js';
import { pinboardIcon, pinboardIconName } from '../shapes/pinboard.js';
import { plusCircleIcon, plusCircleIconName } from '../shapes/plus-circle.js';
import { plusIcon, plusIconName } from '../shapes/plus.js';
import { popOutIcon, popOutIconName } from '../shapes/pop-out.js';
import { portraitIcon, portraitIconName } from '../shapes/portrait.js';
import { printerIcon, printerIconName } from '../shapes/printer.js';
import { recycleIcon, recycleIconName } from '../shapes/recycle.js';
import { redoIcon, redoIconName } from '../shapes/redo.js';
import { refreshIcon, refreshIconName } from '../shapes/refresh.js';
import { repeatIcon, repeatIconName } from '../shapes/repeat.js';
import { resizeIcon, resizeIconName } from '../shapes/resize.js';
import { scissorsIcon, scissorsIconName } from '../shapes/scissors.js';
import { scrollIcon, scrollIconName } from '../shapes/scroll.js';
import { shrinkIcon, shrinkIconName } from '../shapes/shrink.js';
import { sliderIcon, sliderIconName } from '../shapes/slider.js';
import { snowflakeIcon, snowflakeIconName } from '../shapes/snowflake.js';
import { sortByIcon, sortByIconName } from '../shapes/sort-by.js';
import { sunIcon, sunIconName } from '../shapes/sun.js';
import { switchIcon, switchIconName } from '../shapes/switch.js';
import { syncIcon, syncIconName } from '../shapes/sync.js';
import { tableIcon, tableIconName } from '../shapes/table.js';
import { tagIcon, tagIconName } from '../shapes/tag.js';
import { tagsIcon, tagsIconName } from '../shapes/tags.js';
import { targetIcon, targetIconName } from '../shapes/target.js';
import { thermometerIcon, thermometerIconName } from '../shapes/thermometer.js';
import { timesCircleIcon, timesCircleIconName } from '../shapes/times-circle.js';
import { toolsIcon, toolsIconName } from '../shapes/tools.js';
import { trashIcon, trashIconName } from '../shapes/trash.js';
import { treeViewIcon, treeViewIconName } from '../shapes/tree-view.js';
import { treeIcon, treeIconName } from '../shapes/tree.js';
import { twoWayArrowsIcon, twoWayArrowsIconName } from '../shapes/two-way-arrows.js';
import { undoIcon, undoIconName } from '../shapes/undo.js';
import { unlockIcon, unlockIconName } from '../shapes/unlock.js';
import { uploadIcon, uploadIconName } from '../shapes/upload.js';
import { usersIcon, usersIconName } from '../shapes/users.js';
import { viewCardsIcon, viewCardsIconName } from '../shapes/view-cards.js';
import { viewListIcon, viewListIconName } from '../shapes/view-list.js';
import { volumeIcon, volumeIconName } from '../shapes/volume.js';
import { wandIcon, wandIconName } from '../shapes/wand.js';
import { windowCloseIcon, windowCloseIconName } from '../shapes/window-close.js';
import { windowMaxIcon, windowMaxIconName } from '../shapes/window-max.js';
import { windowMinIcon, windowMinIconName } from '../shapes/window-min.js';
import { windowRestoreIcon, windowRestoreIconName } from '../shapes/window-restore.js';
import { worldIcon, worldIconName } from '../shapes/world.js';
import { wrenchIcon, wrenchIconName } from '../shapes/wrench.js';
import { zoomInIcon, zoomInIconName } from '../shapes/zoom-in.js';
import { zoomOutIcon, zoomOutIconName } from '../shapes/zoom-out.js';

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
  colorPaletteIcon,
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
 * import '@cds/core/icon/register.js';
 * import { loadEssentialIconSet } from '@cds/core/icon';
 *
 * loadEssentialIconSet();
 * ```
 *
 */
export function loadEssentialIconSet() {
  ClarityIcons.addIcons(...essentialCollectionIcons);
  ClarityIcons.addAliases(...essentialCollectionAliases);
}

declare module '@cds/core/internal' {
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
    [colorPaletteIconName]: string;
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
