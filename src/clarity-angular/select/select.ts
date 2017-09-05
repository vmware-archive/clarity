/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {ViewChild} from "@angular/core";
import {
    AfterViewInit,
    Component,
    ContentChildren,
    ElementRef,
    EventEmitter,
    forwardRef,
    Input,
    OnDestroy,
    Optional,
    Output,
    QueryList,
    SkipSelf
} from "@angular/core";
import {Subscription} from "rxjs/Subscription";

import {IfOpenService} from "../utils/conditional/if-open.service";

import {State} from "./interfaces/state";
import {Option} from "./option";
import {ROOT_SELECT_PROVIDER, RootSelectService} from "./providers/select.service";
import {SelectInput} from "./select-input";
import {SelectMenu} from "./select-menu";

@Component({selector: "clr-select", templateUrl: "./select.html", providers: [IfOpenService, ROOT_SELECT_PROVIDER]})
/**
 * Basic Version very much WIP
 */
export class Select implements OnDestroy {
    @ContentChildren(Option) options: QueryList<Option>;
    private model: any;
    private _loading: boolean;
    private _clrLoadingText: string;
    private _subOpen: Subscription;
    private _subInput: Subscription;
    private _subSpecialKeys: Subscription;
    @ViewChild(SelectMenu) selectMenu: ElementRef;

    constructor(public ifOpenService: IfOpenService, public selectService: RootSelectService) {
        this._subOpen = ifOpenService.openChange.subscribe((value) => {
            if (value === true) {
                this.selectService.highlighted = this.options.first;
            }
        });
        this._subInput = selectService.input.subscribe((input: string) => {
            this.handleInput(input);
        });
        this._subSpecialKeys = selectService.specialKey.subscribe((specialKeys: string) => {
            this.handleSpecialKeys(specialKeys);
        });
    }

    @Output("clrDgRefresh") public refresh = new EventEmitter<State>(false);

    /**
     * Shows a loading message
     */
    public get loading(): boolean {
        return this._loading;
    }

    @Input("clrDgLoading")
    public set loading(value: boolean) {
        this._loading = value;
    }

    @Input()
    set clrLoadingText(text: string) {
        this._clrLoadingText = text;
    }
    get clrLoadingText() {
        return this._clrLoadingText;
    }

    get ngModel() {
        return this.model;
    }
    @Input()
    set ngModel(model: any) {
        this.model = model;
        this.ngModelChange.next(model);
    }
    @Output("ngModelChange") ngModelChange: EventEmitter<any> = new EventEmitter<any>();

    ngOnDestroy() {
        this._subOpen.unsubscribe();
        this._subInput.unsubscribe();
        this._subSpecialKeys.unsubscribe();
    }
    /**
     * Opens the select menu on input and filters the options
     *
     * @param {string} input
     * @memberof Select
     */
    handleInput(input: string) {
        const state: State = {search: input};
        this.refresh.emit(state);
        if (input !== "") {
            this.ifOpenService.open = true;
            this.options.map((option) => {
                // this is quite restrictive as it its case-sensitive right now, is that expected behaviour ?
                if (input && option.clrTitle.indexOf(input) === -1) {
                    option.visible = false;
                } else {
                    option.visible = true;
                }
            });
        } else {
            this.ifOpenService.open = false;
            this.options.map((option) => {
                option.visible = true;
            });
        }
        if (this.selectService.selected &&
            input.toLowerCase().indexOf(this.selectService.selected.clrTitle.toLowerCase()) === -1) {
            this.selectService.selected = null;
            this.ngModel = null;
        }
    }
    /**
     * Handles ArrowUp, -Down and Enter
     *
     * @param {string} key
     * @returns
     * @memberof Select
     */
    handleSpecialKeys(key: string) {
        if (key === "ArrowUp") {
            this.selectService.highlighted = this.getPrevOption(this.selectService.highlighted);
        } else if (key === "ArrowDown") {
            if (!this.ifOpenService.open) {
                this.ifOpenService.open = true;
                const state: State = {search: ""};
                this.refresh.emit(state);
                return;
            }
            this.selectService.highlighted = this.getNextOption(this.selectService.highlighted);
        } else if (key === "Enter") {
            if (this.ifOpenService.open && this.selectService.highlighted != null) {
                this.selectOption(this.selectService.highlighted);
                this.ifOpenService.open = false;
            }
        }
    }
    selectOption(option: Option) {
        this.selectService.selected = option;
        this.ngModel = option.clrValue;
        this.selectService.input = option.clrTitle;
    }
    getPrevOption(pivotOption: Option): Option {
        const availableOptions = this.options.filter((option: Option) => {
            return option.visible;
        });
        if (availableOptions[0] === pivotOption) {
            return pivotOption;
        }
        const elementPos = availableOptions
                               .map((x) => {
                                   return x.clrValue;
                               })
                               .indexOf(pivotOption.clrValue);
        return availableOptions[elementPos - 1];
    }
    getNextOption(pivotOption: Option): Option {
        const availableOptions = this.options.filter((option: Option) => {
            return option.visible;
        });
        if (availableOptions[availableOptions.length - 1] === pivotOption) {
            return pivotOption;
        }
        const elementPos = availableOptions
                               .map((x) => {
                                   return x.clrValue;
                               })
                               .indexOf(pivotOption.clrValue);
        return availableOptions[elementPos + 1];
    }
}
