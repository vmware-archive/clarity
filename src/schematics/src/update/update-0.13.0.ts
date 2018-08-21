/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';

export default function(): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    _context.logger.info(`---------------------------
Start changes for Clarity 0.13.0
---------------------------`);

    const root = 'src';
    const messageFlags: { [key: string]: boolean } = {};
    function logMessage(type: 'error' | 'warn' | 'info', message: string, filePath: string, version: string) {
      if (!messageFlags[message]) {
        _context.logger[type](`${message} (${filePath}) More info at https://vmware.github.io/clarity/news/${version}`);
      }
      messageFlags[message] = true;
    }

    // Recurse through the directory scanning and changing text as we go
    function replaceContent(path: string) {
      const dir = tree.getDir(path);
      if (dir.subfiles.length) {
        dir.subfiles.forEach(file => {
          // Only care about typescript and html files
          if (!file.endsWith('.ts') && !file.endsWith('.html')) {
            return;
          }

          const filePath = path + '/' + file;
          const buffer = tree.read(filePath);
          if (!buffer) {
            return;
          }
          const content = buffer.toString('utf-8');
          let updated = content;

          // Remove forRoot and forChild usage (https://github.com/vmware/clarity/pull/2526)
          if (updated.search(/ClarityModule.forChild/g) > -1 || updated.search(/ClarityModule.forRoot/g) > -1) {
            logMessage(
              'info',
              'UPDATED: ClarityModule.forChild() and .forRoot() have been updated to just ClarityModule',
              filePath,
              '0.13.0-beta.1'
            );
            updated = updated.replace('ClarityModule.forChild()', 'ClarityModule');
            updated = updated.replace('ClarityModule.forRoot()', 'ClarityModule');
          }

          // Alert to using ClrCodeHighlight
          if (
            updated.search(/ClrCodeHighlight/g) > -1 ||
            updated.search(/clr-code-highlight/g) > -1 ||
            updated.search(/ClrCodeModule/g) > -1 ||
            updated.search(/ClrSyntaxHighlightModule/g) > -1
          ) {
            logMessage(
              'error',
              'ACTION REQUIRED: Clarity has removed ClrCodeHighlight component and ClrCodeModule, you need either remove all uses or follow migration instructions.',
              filePath,
              '0.13.0-beta.2'
            );
          }

          // Alert to wizard ghost pages (https://github.com/vmware/clarity/pull/2531)
          if (updated.search(/clrWizardShowGhostPages/g) > -1) {
            logMessage(
              'error',
              'ACTION REQUIRED: Clarity has removed ghost pages from the Wizard component, please update your wizards accordingly.',
              filePath,
              '0.13.0-beta.2'
            );
          }

          if (content !== updated) {
            tree.overwrite(filePath, updated);
          }
        });
      }
      if (dir.subdirs.length) {
        dir.subdirs.forEach(d => {
          replaceContent(path + '/' + d);
        });
      }
    }

    replaceContent(root);

    _context.logger.info(`---------------------------
End changes for Clarity 0.13.0
---------------------------`);

    return tree;
  };
}
