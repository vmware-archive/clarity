import { StackblitzProject } from '../components/stackblitz/types';

export type SupportedTemplates = 'angular' | 'core' | 'hybrid';
export type LocalTemplate = {
  [externalPath: string]: string;
};

export const templateCore: StackblitzProject = {
  title: 'Clarity Core Demo Application',
  description: 'Clarity Core starter',
  template: 'node',
  tags: ['clarity', 'core', '@cds/core'],
  files: {
    'package.json': 'v5/core.package.json.txt',
    'tsconfig.json': 'tsconfig.json.txt',
    'angular.json': 'core.angular.json.txt',
    'src/polyfills.ts': 'polyfills.ts.txt',
    'src/main.ts': 'main.ts.txt',
    'src/index.html': 'core.index.html.txt',
    'src/styles.scss': 'styles.scss.txt',
    'src/app/app.module.ts': 'core.app.module.ts.txt',
    'src/app/app.component.ts': 'app.component.ts.txt',
  },
  dependencies: {},
};

export const templateAngular: StackblitzProject = {
  title: 'Clarity Angular Demo Application',
  description: 'Clarity Angular starter',
  template: 'node',
  tags: ['clarity', 'angular', '@cds/angular', '@cds/core'],
  files: {
    'package.json': 'v5/angular.package.json.txt',
    'tsconfig.json': 'tsconfig.json.txt',
    'angular.json': 'angular.angular.json.txt',
    'src/polyfills.ts': 'polyfills.ts.txt',
    'src/main.ts': 'main.ts.txt',
    'src/index.html': 'angular.index.html.txt',
    'src/styles.scss': 'styles.scss.txt',
    'src/app/app.module.ts': 'angular.app.module.ts.txt',
    'src/app/app.component.ts': 'angular.app.component.ts.txt',
  },
  dependencies: {},
};

export const templateHybrid: StackblitzProject = {
  title: 'Clarity Angular & Core Demo Application',
  description: 'Clarity Angular & Core starter',
  template: 'node',
  tags: ['clarity', 'angular', '@cds/angular', '@cds/core'],
  files: {
    'package.json': 'v5/angular.package.json.txt',
    'tsconfig.json': 'tsconfig.json.txt',
    'angular.json': 'hybrid.angular.json.txt',
    'src/polyfills.ts': 'polyfills.ts.txt',
    'src/main.ts': 'main.ts.txt',
    'src/index.html': 'core.index.html.txt',
    'src/styles.scss': 'styles.scss.txt',
    'src/app/app.module.ts': 'angular.app.module.ts.txt',
    'src/app/app.component.ts': 'app.component.ts.txt',
  },
  dependencies: {},
};
