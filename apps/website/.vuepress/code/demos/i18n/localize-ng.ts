export const klingonLocale: ClrCommonStrings = {
  open: 'ghIt',
  close: 'SoQmoH',
};

import { ClrCommonStringsService } from '@clr/angular';
import { klingonLocale } from './translations/klingon';

@Component({})
export class AppComponent {
  constructor(commonStrings: ClrCommonStringsService) {
    // Call this method to set the new locale values into the service, defaults for English
    // will be used for any missing strings
    commonStrings.localize(klingonLocale);
  }
}
