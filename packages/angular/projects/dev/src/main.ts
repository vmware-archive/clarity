import '@clr/icons';
import '@clr/icons/shapes/essential-shapes';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
// import { runCssVarsPolyfill } from '@clr/core';

if (environment.production) {
  enableProdMode();
}

// runCssVarsPolyfill();

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));
