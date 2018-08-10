/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';

export default function(): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    _context.logger.info(`Updating for Clarity 0.13.0`);

    const root = 'src';

    function replaceContent(path: string) {
      const dir = tree.getDir(path);
      if (dir.subfiles.length) {
        dir.subfiles.forEach(file => {
          if (!file.endsWith('.ts')) {
            return;
          }

          const filePath = path + '/' + file;
          const buffer = tree.read(filePath);
          if (!buffer) {
            return;
          }
          const content = buffer.toString('utf-8');
          let updated = content.replace('ClarityModule.forChild()', 'ClarityModule');
          updated = updated.replace('ClarityModule.forRoot()', 'ClarityModule');
          tree.overwrite(filePath, updated);
        });
      }
      if (dir.subdirs.length) {
        dir.subdirs.forEach(d => {
          replaceContent(path + '/' + d);
        });
      }
    }

    replaceContent(root);

    return tree;
  };
}
