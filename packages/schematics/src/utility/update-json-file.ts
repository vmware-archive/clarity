import { Tree } from '@angular-devkit/schematics';
import { getJsonFile } from './get-json-file';

// Writes changes to a JSON file
export function updateJsonFile(tree: Tree, path: string, callback: (a: any) => any) {
  const json = getJsonFile(tree, path);
  callback(json);
  tree.overwrite(path, JSON.stringify(json, null, 2));
}
