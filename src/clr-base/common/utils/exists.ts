/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

export function exists(obj: { [key: string]: any }, ...args: string[]): boolean {
  if (typeof obj === 'undefined') {
    return false;
  }

  if (args.length < 1) {
    return true;
  }

  return exists(obj[args.shift() as any], ...args);
}
