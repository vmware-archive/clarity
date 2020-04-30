/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { ClarityIcons } from '../icon.service.js';
import { IconAlias, IconShapeTuple } from '../interfaces/icon.interfaces.js';

import { alignBottomIcon, alignBottomIconName } from '../shapes/align-bottom.js';
import { alignCenterIcon, alignCenterIconName } from '../shapes/align-center.js';
import { alignLeftTextIcon, alignLeftTextIconName } from '../shapes/align-left-text.js';
import { alignLeftIcon, alignLeftIconName } from '../shapes/align-left.js';
import { alignMiddleIcon, alignMiddleIconName } from '../shapes/align-middle.js';
import { alignRightTextIcon, alignRightTextIconName } from '../shapes/align-right-text.js';
import { alignRightIcon, alignRightIconName } from '../shapes/align-right.js';
import { alignTopIcon, alignTopIconName } from '../shapes/align-top.js';
import { blockQuoteIcon, blockQuoteIconName } from '../shapes/block-quote.js';
import { boldIcon, boldIconName } from '../shapes/bold.js';
import { bulletListIcon, bulletListIconName } from '../shapes/bullet-list.js';
import { centerTextIcon, centerTextIconName } from '../shapes/center-text.js';
import { checkboxListIcon, checkboxListIconName } from '../shapes/checkbox-list.js';
import { fontSizeIcon, fontSizeIconName } from '../shapes/font-size.js';
import { highlighterIcon, highlighterIconName } from '../shapes/highlighter.js';
import { indentIcon, indentIconName } from '../shapes/indent.js';
import { italicIcon, italicIconName } from '../shapes/italic.js';
import { justifyTextIcon, justifyTextIconName } from '../shapes/justify-text.js';
import { languageIcon, languageIconName } from '../shapes/language.js';
import { numberListIcon, numberListIconName } from '../shapes/number-list.js';
import { outdentIcon, outdentIconName } from '../shapes/outdent.js';
import { paintRollerIcon, paintRollerIconName } from '../shapes/paint-roller.js';
import { strikethroughIcon, strikethroughIconName } from '../shapes/strikethrough.js';
import { subscriptIcon, subscriptIconName } from '../shapes/subscript.js';
import { superscriptIcon, superscriptIconName } from '../shapes/superscript.js';
import { textColorIcon, textColorIconName } from '../shapes/text-color.js';
import { textIcon, textIconName } from '../shapes/text.js';
import { underlineIcon, underlineIconName } from '../shapes/underline.js';

export const textEditCollectionIcons: IconShapeTuple[] = [
  alignBottomIcon,
  alignCenterIcon,
  alignLeftIcon,
  alignLeftTextIcon,
  alignMiddleIcon,
  alignRightIcon,
  alignRightTextIcon,
  alignTopIcon,
  blockQuoteIcon,
  boldIcon,
  bulletListIcon,
  centerTextIcon,
  checkboxListIcon,
  fontSizeIcon,
  highlighterIcon,
  indentIcon,
  italicIcon,
  justifyTextIcon,
  languageIcon,
  numberListIcon,
  outdentIcon,
  paintRollerIcon,
  strikethroughIcon,
  subscriptIcon,
  superscriptIcon,
  textIcon,
  textColorIcon,
  underlineIcon,
];

export const textEditCollectionAliases: IconAlias[] = [];

/**
 * Function that can be called to load the core icon set.
 *
 * ```typescript
 * import '@clr/core/icon';
 * import { loadTextEditIconSet } from '@clr/core/icon-shapes';
 *
 * loadTextEditIconSet();
 * ```
 *
 */
export function loadTextEditIconSet() {
  ClarityIcons.addIcons(...textEditCollectionIcons);
  ClarityIcons.addAliases(...textEditCollectionAliases);
}

declare module '@clr/core/internal' {
  interface IconRegistrySources {
    [alignBottomIconName]: string;
    [alignCenterIconName]: string;
    [alignLeftIconName]: string;
    [alignLeftTextIconName]: string;
    [alignMiddleIconName]: string;
    [alignRightIconName]: string;
    [alignRightTextIconName]: string;
    [alignTopIconName]: string;
    [blockQuoteIconName]: string;
    [boldIconName]: string;
    [bulletListIconName]: string;
    [centerTextIconName]: string;
    [checkboxListIconName]: string;
    [fontSizeIconName]: string;
    [highlighterIconName]: string;
    [indentIconName]: string;
    [italicIconName]: string;
    [justifyTextIconName]: string;
    [languageIconName]: string;
    [numberListIconName]: string;
    [outdentIconName]: string;
    [paintRollerIconName]: string;
    [strikethroughIconName]: string;
    [subscriptIconName]: string;
    [superscriptIconName]: string;
    [textIconName]: string;
    [textColorIconName]: string;
    [underlineIconName]: string;
  }
}
