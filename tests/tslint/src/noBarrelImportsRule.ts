/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { IRuleMetadata } from 'tslint';
import * as ts from 'typescript';
import * as Lint from 'tslint';
import { resolve } from 'path';
import { statSync } from 'fs';

export class Rule extends Lint.Rules.AbstractRule {
  public static metadata: IRuleMetadata = {
    ruleName: 'no-barrel-imports',
    type: 'maintainability',
    description: 'Prevents imports from referencing an index file',
    hasFix: false,
    options: null,
    optionsDescription: '',
    typescriptOnly: false,
  };

  public apply(sourceFile: ts.SourceFile): Lint.RuleFailure[] {
    return this.applyWithWalker(new NoBarrelImportsWalker(sourceFile, this.getOptions()));
  }
}

// The walker takes care of all the work.
class NoBarrelImportsWalker extends Lint.RuleWalker {
  // This will run anytime TSLint runs into an import declaration, so we want to
  // use it to detect if relative imports are pointing to a file or directory
  public visitImportDeclaration(node: ts.ImportDeclaration) {
    // This is the file that is currently being checked
    const importFile = node.parent.getSourceFile().fileName;
    // Here we chop off the filename to get just the host directory
    const importDir = importFile.substring(0, importFile.lastIndexOf('/'));
    // Here we get the path of the file being imported, and add `.ts` for full path
    const path = node.moduleSpecifier.getText().replace(/'|"/gi, '') + '.ts';

    // We only care if this is a relative path, otherwise its fine
    if (path.startsWith('.')) {
      // Try to get file stats, or else its not a file and we throw fail
      try {
        // Using resolve we get the full path of what is being imported to check if
        // it is a file or not
        statSync(resolve(importDir, path)).isFile();
      } catch (e) {
        // IF this fails (because statSync will fail if the path is not known),
        // we catch it and throw an error because its a barrel.
        this.addFailureAtNode(node, `Not allowed to import from a barrel`);
      }
    }

    // call the base version of this visitor to actually parse this node
    super.visitImportDeclaration(node);
  }
}
