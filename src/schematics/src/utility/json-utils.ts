/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

// Read a file
import * as fs from 'fs';

export function readJsonFile(path: string) {
  return JSON.parse(fs.readFileSync(path, 'utf-8'));
}

// Writes changes to a JSON file
export function updateJsonFile(path: string, callback: (a: any) => any) {
  const json = readJsonFile(path);
  callback(json);
  fs.writeFileSync(path, JSON.stringify(json, null, 2));
}
