/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline: '',

  outlineAlerted: '',

  outlineBadged: '',

  solid: '',

  solidAlerted: '',

  solidBadged: '',
};

export const tmplIconName = 'tmpl';
export const tmplIcon: IconShapeTuple = [tmplIconName, renderIcon(icon)];
