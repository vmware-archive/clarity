/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { ClarityIcons, AllShapes } from '@clr/icons';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// Theme toggling, run `ng serve -c dark` to get dark theme
if (environment.dark) {
  // tslint:disable-next-line
  require('style-loader!./../../clr-angular/dark-theme.scss');
} else {
  // tslint:disable-next-line
  require('style-loader!./../../clr-angular/main.scss');
}

ClarityIcons.init(AllShapes);

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.log(err));
