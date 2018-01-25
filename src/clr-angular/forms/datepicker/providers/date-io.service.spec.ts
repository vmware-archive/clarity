/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {DateIOService} from "./date-io.service";
import {registerLocaleData} from "@angular/common";
import localeDe from "@angular/common/locales/de";
import localeAk from "@angular/common/locales/ak";

registerLocaleData(localeDe);
registerLocaleData(localeAk);

export default function () {
    fdescribe("Date IO Service", () => {
        let dateIOUS: DateIOService;
        let dateIODE: DateIOService;
        let dateIOAk: DateIOService;

        beforeEach(() => {
            dateIOUS = new DateIOService("en-US");
            dateIODE = new DateIOService("de");
            dateIOAk = new DateIOService("ak");
        });

        it("Retrieves the correct locale format from Angular " +
            "when the date IO service is initialized", () => {
            expect(dateIOUS.locale).toBe("en-US");
            expect(dateIOUS.cldrLocaleDateFormat).toBe("M/d/yy");

            expect(dateIODE.locale).toBe("de");
            expect(dateIODE.cldrLocaleDateFormat).toBe("dd.MM.yy");

            expect(dateIOAk.locale).toBe("ak");
            expect(dateIOAk.cldrLocaleDateFormat).toBe("yy/MM/dd");
        });

        it("Displays date in the correct format based on the locale", () => {
            const date1 = new Date(2018,1,5);
            const date2 = new Date(2018, 10, 10);

            let output: string = dateIOUS.toLocaleDisplayFormatString(date1);
            expect(output).toBe("02/05/2018");

            output = dateIOUS.toLocaleDisplayFormatString(date2);
            expect(output).toBe("11/10/2018");

            output = dateIODE.toLocaleDisplayFormatString(date1);
            expect(output).toBe("05/02/2018");

            output = dateIODE.toLocaleDisplayFormatString(date2);
            expect(output).toBe("10/11/2018");

            output = dateIOAk.toLocaleDisplayFormatString(date1);
            expect(output).toBe("2018/02/05");

            output = dateIOAk.toLocaleDisplayFormatString(date2);
            expect(output).toBe("2018/11/10");
        });
    });
}
