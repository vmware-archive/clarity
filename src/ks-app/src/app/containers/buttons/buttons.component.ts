/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {Component} from "@angular/core";

@Component({templateUrl: "./buttons.component.html"})
export class KSButtons {
    numbers: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    display: number[];

    constructor() {
        this.display = this.numbers;
    }

    changeNumbers() {
        this.display.length = 0;
        for (const num of this.numbers) {
            console.log("num: ", num);
            this.display.push(this.numbers[Math.floor(Math.random() * this.numbers.length)]);
        }
        console.log(this.display);
    }
}
