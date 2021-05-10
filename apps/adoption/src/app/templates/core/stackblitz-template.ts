import { StackblitzProject } from '../../components/stackblitz/types';
import { ClarityPackageVersions } from '../clarity-package-versions';
import { LocalTemplate } from '../types';

export const files: LocalTemplate = {
  'tsconfig.json': 'tsconfig.json.txt',
  'angular.json': 'angular-cli.json.txt',
  'src/polyfills.ts': 'polyfills.ts.txt',
  'src/main.ts': 'main.ts.txt',
  'src/index.html': 'index.html.txt',
  'src/styles.css': 'styles.css.txt',
  'src/app/app.module.ts': 'app.module.ts.txt',
  'src/app/app.component.ts': 'app.component.ts.txt',
};

export const template: StackblitzProject = {
  title: 'Clarity Demo Application',
  description: 'Clarity auto-generated application',
  template: 'angular-cli',
  tags: ['clarity'],
  files: files,
  dependencies: {
    '@angular/animations': '11.0.8',
    '@angular/common': '11.0.8',
    '@angular/compiler': '11.0.8',
    '@angular/core': '11.0.8',
    '@angular/forms': '11.0.8',
    '@angular/platform-browser': '11.0.8',
    '@angular/platform-browser-dynamic': '11.0.8',
    '@angular/router': '11.0.8',
    '@webcomponents/custom-elements': '1.4.3',
    rxjs: '6.6.3',
    tslib: '2.1.0',
    'zone.js': '0.11.3',
    ...ClarityPackageVersions,
  },
};
