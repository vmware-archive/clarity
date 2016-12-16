/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component} from "@angular/core";

@Component({
    selector: "clr-search-demo",
    // Note the .css extension here, not .scss. That's the best we can have at the moment.
    styleUrls: ["./search.demo.css"],
    templateUrl: "./search.demo.html"
})

export class SearchDemo {
    searchDataS: string;
    searchDataT: string;
    searchInit: string = "some data send";
}
