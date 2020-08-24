import { Tree } from '@angular-devkit/schematics/src/tree/interface';
import { SchematicsException } from '@angular-devkit/schematics';
import { FileDoesNotExistException } from '@angular-devkit/core';

export const getJsonFile = <T>(tree: Tree, path: string): T => {
  const file = tree.get(path);
  if (!file) {
    throw new FileDoesNotExistException(path);
  }

  try {
    const content = JSON.parse(file.content.toString());

    return content as T;
  } catch (e) {
    throw new SchematicsException(`File ${path} could not be parsed!`);
  }
};
