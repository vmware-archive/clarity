/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";

import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import localeRu from "@angular/common/locales/ru";
import localeAk from "@angular/common/locales/ak";
import localeHi from "@angular/common/locales/hi";

registerLocaleData(localeFr);
registerLocaleData(localeRu);
registerLocaleData(localeAk);
registerLocaleData(localeHi);

@Component({
    selector: "clr-datepicker-demo",
    // Note the .css extension here, not .scss. That's the best we can have at the moment.
    styleUrls: ["./datepicker.demo.scss"],
    templateUrl: "./datepicker.demo.html"
})
export class DatepickerDemo {
}
