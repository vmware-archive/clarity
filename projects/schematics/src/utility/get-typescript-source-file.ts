/*
 * Copyright (c) 2016-2022 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Tree } from '@angular-devkit/schematics/src/tree/interface';
import * as ts from 'typescript';
import { SchematicsException } from '@angular-devkit/schematics';

/**
 * Reads file from given path and returns TypeScript source file.
 * @param host {Tree} The source tree.
 * @param path {String} The path to the file to read. Relative to the root of the tree.
 * */
export function getTypeScriptSourceFile(host: Tree, path: string): ts.SourceFile {
  const buffer = host.read(path);
  if (!buffer) {
    throw new SchematicsException(`Could not find ${path}!`);
  }

  const content = buffer.toString();
  const sourceFile = ts.createSourceFile(path, content, ts.ScriptTarget.Latest, true);

  return sourceFile;
}
