/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component, Input, Output, EventEmitter/*, forwardRef*/} from "@angular/core";
// import {NG_VALUE_ACCESSOR, ControlValueAccessor} from "@angular/forms";

/**
 * Private counter to generate unique IDs for the checkboxes, to bind the labels to them.
 */

@Component({
    selector: "clr-search",
    template: `
  <div class="search-container">
    <label for="search_input">
        <clr-icon shape="search"></clr-icon>
        <input 
        [placeholder]="placeholder" 
        type="text" 
        [ngModel]="search" 
        (ngModelChange) = "onSelectedChange($event)">
    </label>
    <div class="dropdown bottom" [class.open]="autoCompeateOpen">
        <div class="dropdown-menu">
           <a class="dropdown-item" *ngFor="let item of autoCompleateDataShow" 
           (click)="autoCompleteClick(item)">{{item}}</a>
       </div>
    </div>
</div>
    `,
    styles: [`
    .search-container {
      position: relative;
    }
    .dropdown.bottom {
        position: absolute;
        top: 100%;
        left: 20px;
    }
    clr-search {
      position: absolute;
      top: 100%;
      left: 0;
    }
    `],
    providers: []
})
export class Search {
    @Input() placeholder: string = "";

    @Input() search: string = "";

    // @Input() caseInsensitive: bool = true;

    @Input() autoCompleateData: string[];

    @Output() searchChange = new EventEmitter<string>();

    autoCompleteClick(item: string) {
        this.search = item;
        this.autoCompeateOpen = false;
    }

    private autoCompeateOpen: boolean = false;
    autoCompleateDataShow: string[];

   validateRegex(pattern: string) {
        let parts = pattern.split("/");
        let regex = pattern;
        let options = "";
        let ret: any;
        if (parts.length > 2) {
            regex = parts[1];
            options = parts[2];
        } else {
            return pattern;
        }
        try {
            ret = new RegExp(regex, options);
            return ret;
        } catch (e) {
            ret = pattern;
        }
        return ret;
    }

    onSelectedChange(search: string) {
        this.search = search;
        if (this.search && this.autoCompleateData) {

            this.autoCompleateDataShow = this.autoCompleateData.filter( item => {
                let pattern = this.validateRegex(this.search.toLocaleLowerCase());
                if (pattern instanceof RegExp) {
                    return item.toLocaleLowerCase().search(pattern) > -1;
                }
                return item.toLocaleLowerCase().indexOf(pattern) > -1;
            });

            if (this.autoCompleateDataShow.length) {
                this.autoCompeateOpen = true;
            } else {
                this.autoCompeateOpen = false;
            }
        } else {
            this.autoCompeateOpen = false;
        }
        this.searchChange.emit(search);
    }
}
