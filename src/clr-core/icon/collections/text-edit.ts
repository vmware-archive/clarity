/*
* Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
* This software is released under MIT license.
* The full license information can be found in LICENSE in the root directory of this project.
*/

import { ClarityIcons } from '../icon.service';
import { IconAlias, IconShapeTuple } from '../interfaces/icon.interfaces';

import { alignBottomIcon, alignBottomIconName } from '../shapes/align-bottom';
import { alignCenterIcon, alignCenterIconName } from '../shapes/align-center';
import { alignLeftIcon, alignLeftIconName } from '../shapes/align-left';
import { alignLeftTextIcon, alignLeftTextIconName } from '../shapes/align-left-text';
import { alignMiddleIcon, alignMiddleIconName } from '../shapes/align-middle';
import { alignRightIcon, alignRightIconName } from '../shapes/align-right';
import { alignRightTextIcon, alignRightTextIconName } from '../shapes/align-right-text';
import { alignTopIcon, alignTopIconName } from '../shapes/align-top';
import { blockQuoteIcon, blockQuoteIconName } from '../shapes/block-quote';
import { boldIcon, boldIconName } from '../shapes/bold';
import { bulletListIcon, bulletListIconName } from '../shapes/bullet-list';
import { centerTextIcon, centerTextIconName } from '../shapes/center-text';
import { checkboxListIcon, checkboxListIconName } from '../shapes/checkbox-list';
import { fontSizeIcon, fontSizeIconName } from '../shapes/font-size';
import { highlighterIcon, highlighterIconName } from '../shapes/highlighter';
import { indentIcon, indentIconName } from '../shapes/indent';
import { italicIcon, italicIconName } from '../shapes/italic';
import { justifyTextIcon, justifyTextIconName } from '../shapes/justify-text';
import { languageIcon, languageIconName } from '../shapes/language';
import { numberListIcon, numberListIconName } from '../shapes/number-list';
import { outdentIcon, outdentIconName } from '../shapes/outdent';
import { paintRollerIcon, paintRollerIconName } from '../shapes/paint-roller';
import { strikethroughIcon, strikethroughIconName } from '../shapes/strikethrough';
import { subscriptIcon, subscriptIconName } from '../shapes/subscript';
import { superscriptIcon, superscriptIconName } from '../shapes/superscript';
import { textIcon, textIconName } from '../shapes/text';
import { textColorIcon, textColorIconName } from '../shapes/text-color';
import { underlineIcon, underlineIconName } from '../shapes/underline';

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
 * import { loadTextEditIconSet } from '@clr/core/icon';
 *
 * loadTextEditIconSet();
 * ```
 *
 */
export function loadTextEditIconSet() {
  ClarityIcons.addIcons(...textEditCollectionIcons);
  ClarityIcons.addAliases(...textEditCollectionAliases);
}

declare module '@clr/core/common' {
  interface IconRegistrySources {
    [alignBottomIconName]?: string;
    [alignCenterIconName]?: string;
    [alignLeftIconName]?: string;
    [alignLeftTextIconName]?: string;
    [alignMiddleIconName]?: string;
    [alignRightIconName]?: string;
    [alignRightTextIconName]?: string;
    [alignTopIconName]?: string;
    [blockQuoteIconName]?: string;
    [boldIconName]?: string;
    [bulletListIconName]?: string;
    [centerTextIconName]?: string;
    [checkboxListIconName]?: string;
    [fontSizeIconName]?: string;
    [highlighterIconName]?: string;
    [indentIconName]?: string;
    [italicIconName]?: string;
    [justifyTextIconName]?: string;
    [languageIconName]?: string;
    [numberListIconName]?: string;
    [outdentIconName]?: string;
    [paintRollerIconName]?: string;
    [strikethroughIconName]?: string;
    [subscriptIconName]?: string;
    [superscriptIconName]?: string;
    [textIconName]?: string;
    [textColorIconName]?: string;
    [underlineIconName]?: string;
  }
}
