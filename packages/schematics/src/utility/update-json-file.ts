/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Tree } from '@angular-devkit/schematics';
import { getJsonFile } from './get-json-file';

// Writes changes to a JSON file
export function updateJsonFile(tree: Tree, path: string, callback: (a: any) => any): void {
  const json = getJsonFile(tree, path);
  callback(json);
  tree.overwrite(path, JSON.stringify(json, null, 2));
}
