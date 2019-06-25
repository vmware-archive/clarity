/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import IWindow from './lib/interfaces/window.interface';
import { runCssVarsPolyfill } from './lib/utils/css-vars/css-vars';

declare var window: IWindow;

if (typeof window !== 'undefined') {
  runCssVarsPolyfill();
}
