/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import * as LZString from 'lz-string';
import { CodesandboxProject } from './types';

function compress(content: string): string {
  return LZString.compressToBase64(content)
    .replace(/\+/g, `-`) // Convert '+' to '-'
    .replace(/\//g, `_`) // Convert '/' to '_'
    .replace(/=+$/, ``); // Remove ending '='
}

export function compressParams(content: CodesandboxProject): string {
  return compress(JSON.stringify(content));
}
