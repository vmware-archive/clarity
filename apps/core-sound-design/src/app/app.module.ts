import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// import { CdsAlertModule } from '@cds/angular/alert';
// import { CdsButtonModule } from '@cds/angular/button';
// import { CdsFormsModule } from '@cds/angular/forms';
// import { CdsInputModule } from '@cds/angular/input';
// import { CdsNavigationModule } from '@cds/angular/navigation';
// import { CdsPasswordModule } from '@cds/angular/password';
// import { CdsToggleModule } from '@cds/angular/toggle';
import '@cds/core/button/register';
import { ClarityIcons, userIcon, headphonesIcon } from '@cds/core/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // CdsButtonModule,
    // CdsFormsModule,
    // CdsInputModule,
    // CdsNavigationModule,
    // CdsPasswordModule,
    // CdsToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {
  constructor() {
    ClarityIcons.addIcons(userIcon, headphonesIcon);
  }
}
