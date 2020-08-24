import { Tree } from '@angular-devkit/schematics';
import { getAppModulePath } from '@schematics/angular/utility/ng-ast-utils';
import { getMainPath } from './get-main-path';

export function findAppModule(host: Tree, config: any, projectName: string): string {
  const mainPath = getMainPath(config, projectName);
  const appModulePath = getAppModulePath(host, mainPath);

  return appModulePath;
}
