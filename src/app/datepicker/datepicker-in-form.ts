/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";

@Component({
    selector: "clr-datepicker-in-forn-demo",
    // Note the .css extension here, not .scss. That's the best we can have at the moment.
    styleUrls: ["./datepicker.demo.scss"],
    template: `
        <form class="form" #simpleForm="ngForm" (ngSubmit)="onSubmit()" *ngIf="!isSubmitted">
            <div class="form-group">
                <label for="date">Enter Date</label>
                <input type="text" id="date" name="date" [(ngModel)]="date" clrDatepicker (clrDatepickerChange)="dateChanged($event)">
            </div>
            <div class="form-group">
                <label for="name">Enter Name</label>
                <input id="name" type="text" name="name" [(ngModel)]="name">
            </div>
            <button class="btn" (click)="buttonClick()" type="submit">Submit</button>
            <p>
                {{simpleForm.value | json}}
            </p>
        </form>
        <div *ngIf="isSubmitted">
            <p>Date: {{date}}</p>
            <p>Name: {{name}}</p>
            <button type="button" class="btn" (click)="reset()">Reset</button>
        </div>
    `
})
export class DatepickerInFormDemo {
    buttonClick(): void {
        console.log("Button Clicked");
    }

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
        console.log("Valid Date Entered", date);
    }
}
