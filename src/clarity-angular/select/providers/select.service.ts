/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Injectable, Optional, SkipSelf} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject";

import {IfOpenService} from "./../../utils/conditional/if-open.service";
import {Option} from "./../option";

@Injectable()
export class RootSelectService {
    private _changes: Subject<boolean> = new Subject<boolean>();
    private _input: string;
    private _inputChange: Subject<string> = new Subject<string>();
    private _specialKey: Subject<string> = new Subject<string>();
    private _highlightedChange: Subject<Option> = new Subject<Option>();
    private _selectedChange: Subject<Option> = new Subject<Option>();
    public _highlighted: Option;
    public _selected: Option;
    public _options: Option[];
    private _optionsChange: Subject<Option[]> = new Subject<Option[]>();

    //    constructor(private ifOpenService: IfOpenService) {}

    get changes(): Observable<boolean> {
        return this._changes.asObservable();
    }
    get input(): string {
        return this._input;
    }
    set input(input: string) {
        this._input = input;
        this._inputChange.next(input);
    }
    public get inputChange(): Observable<string> {
        return this._inputChange.asObservable();
    }

    get specialKey(): any {
        return this._specialKey.asObservable();
    }

    set specialKey(specialKey: any) {
        this._specialKey.next(specialKey);
    }

    get highlighted(): Option {
        return this._highlighted;
    }
    public get highlightedChange(): Observable<Option> {
        return this._highlightedChange.asObservable();
    }

    set highlighted(highlighted: Option) {
        this._highlighted = highlighted;
        this._highlightedChange.next(this._highlighted);
    }

    get selected(): any {
        return this._selected;
    }
    public get selectedChange(): any {
        return this._selectedChange.asObservable();
    }

    set selected(selected: any) {
        this._selected = selected;
        this._selectedChange.next(this._selected);
    }

    get options(): Option[] {
        return this._options;
    }

    set options(options: Option[]) {
        this._options = options;
        this._optionsChange.next(options);
    }

    closeMenus(): void {
        this._changes.next(false);
    }

    focusPrevious() {
        const availableOptions = this.options.filter((option: Option) => {
            return option.visible;
        });
        if (availableOptions[0] === this.highlighted) {
            return;
        }
        const elementPos = availableOptions
                               .map((x) => {
                                   if (x) return x.clrValue;
                               })
                               .indexOf(this.highlighted.clrValue);
        this.highlighted = availableOptions[elementPos - 1];
    }
    focusNext() {
        if (!this.highlighted) {
            this.highlighted = this.options[0];
            return;
        }
        const availableOptions = this.options.filter((option: Option) => {
            return option.visible;
        });
        if (availableOptions[availableOptions.length - 1] === this.highlighted) {
            return;
        }
        const elementPos = availableOptions
                               .map((x) => {
                                   if (x) return x.clrValue;
                               })
                               .indexOf(this.highlighted.clrValue);
        this.highlighted = availableOptions[elementPos + 1];
    }
    selectCurrentFocused() {
        this.selected = this.highlighted;
        this.input = this.highlighted.toString();
    }
}

export function clrRootSelectFactory(existing: RootSelectService) {
    return existing || new RootSelectService();
}
