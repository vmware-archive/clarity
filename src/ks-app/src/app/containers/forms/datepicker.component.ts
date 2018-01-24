/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";

@Component({
    selector: "clr-datepicker-in-forn-demo",
    // Note the .css extension here, not .scss. That's the best we can have at the moment.
    templateUrl: "./datepicker.component.html"
})
export class KSDatepicker {
    buttonClick(): void {
        console.log("Form Submitted");
    }

    datepickerOutput: string = "";

    isSubmitted: boolean = false;

    onSubmit(): void {
        console.log("Submitting");
        this.isSubmitted = true;
    }

    date: string = "";

    name: string = "";

    reset(): void {
        this.isSubmitted = false;
        this.date = "";
        this.name = "";
    }

    dateChanged(date: Date): void {
        this.datepickerOutput = date.toLocaleDateString();
        setTimeout(() => {
            this.datepickerOutput = "";
        }, 2000);
    }
}
