import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';

registerLocaleData(localeFr);

@Component({
  providers: [{ provide: LOCALE_ID, useValue: 'fr' }],
})
export class AppComponent {}
