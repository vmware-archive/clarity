import {NgModule} from '@angular/core';
import {ServerModule} from '@angular/platform-server';
import {ModuleMapLoaderModule} from '@nguniversal/module-map-ngfactory-loader';
import {ServerPrebootModule} from 'preboot/server';

import {AppModule} from './app.module';
import {AppComponent, PLATFORM_TOKEN} from './app.component';

@NgModule({
  imports: [
    // The AppServerModule should import your AppModule followed
    // by the ServerModule from @angular/platform-server.
    AppModule,
    ServerModule,
    ModuleMapLoaderModule,
    ServerPrebootModule.recordEvents({appRoot: 'body'})
  ],
  providers: [
    { provide: PLATFORM_TOKEN, useValue: 'Server' }
  ],
  // Since the bootstrapped component is not inherited from your
  // imported AppModule, it needs to be repeated here.
  bootstrap: [AppComponent],
})
export class AppServerModule {}
