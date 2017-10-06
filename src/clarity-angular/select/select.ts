/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {ViewChild} from "@angular/core";
import {AfterViewInit} from "@angular/core";
import {
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
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import {Subscription} from "rxjs/Subscription";

import {IfOpenService} from "../utils/conditional/if-open.service";

import {Option} from "./option";
import {RootSelectService} from "./providers/select.service";
import {SelectInput} from "./select-input";
import {SelectMenu} from "./select-menu";

@Component({
    selector: "clr-select",
    templateUrl: "./select.html",
    host: {"[class.clr-select]": "true"},
    providers: [
        IfOpenService, RootSelectService,
        {provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => Select), multi: true}
    ]
})
/**
 * Basic Version very much WIP
 */
export class Select implements OnDestroy, ControlValueAccessor, AfterViewInit {
    @ContentChildren(Option) options: QueryList<Option>;
    @ViewChild(SelectMenu) selectMenu: ElementRef;
    private model: any;
    private input: string;
    private _loading: boolean;
    private _clrLoadingText: string;
    private _subOpen: Subscription;
    private _subInput: Subscription;
    private _subHighlighted: Subscription;
    private _subSelected: Subscription;

    /**
     *
     *
     * @param {IfOpenService} ifOpenService
     * @param {RootSelectService} selectService
     * @memberof Select
     */
    constructor(public ifOpenService: IfOpenService, public selectService: RootSelectService) {
        this._subInput = selectService.inputChange.subscribe((input: string) => {
            this.handleInput(input);
        });
        this._subOpen = ifOpenService.openChange.subscribe((value: boolean) => {
            if (value === false) {
                this.onTouchedCallback();
            }
        });
        this._subHighlighted = selectService.highlightedChange.subscribe((option: Option) => {
            if (this.selectService.highlighted) {
                this.model = this.selectService.highlighted.clrValue;
            }
        });
        this._subSelected = selectService.selectedChange.subscribe((option: Option) => {
            if (option === null) {
                this.onChangeCallback(null);
            } else {
                this.onChangeCallback(option.clrValue);
            }
        });
    }
    ngAfterViewInit() {
        this.processOptions();

        this.options.changes.subscribe(_ => this.processOptions());
    }

    private processOptions(): void {
        this.selectService.options = this.options.toArray();
    }

    @Output("clrRefresh") public refresh = new EventEmitter<string>(false);

    /**
     * Shows a loading message
     */
    public get loading(): boolean {
        return this._loading;
    }
    @Output("clrLoadingChange") clrLoadingChange: EventEmitter<boolean> = new EventEmitter<boolean>();

    @Input("clrLoading")
    public set loading(value: boolean) {
        this._loading = value;
        this.clrLoadingChange.next(value);
    }

    @Input()
    set clrLoadingText(text: string) {
        this._clrLoadingText = text;
    }
    get clrLoadingText() {
        return this._clrLoadingText;
    }

    ngOnDestroy() {
        this._subInput.unsubscribe();
        this._subHighlighted.unsubscribe();
        this._subOpen.unsubscribe();
        this._subSelected.unsubscribe();
    }
    /**
     * Opens the select menu on input and filters the options
     *
     * @param {string} input
     * @memberof Select
     */
    handleInput(input: string) {
        this.refresh.emit(this.input = input);
        if (input !== "" && input !== undefined && input !== null) {
            this.ifOpenService.open = true;
            this.options.map((option) => {
                // this is quite restrictive as it its case-sensitive right now, is that expected behaviour ?
                if (input && option.toString().indexOf(input) === -1) {
                    option.visible = false;
                } else {
                    option.visible = true;
                }
            });
        } else {
            if (!this.options || this.options.length === 0) {
                this.ifOpenService.open = false;
            } else {
                this.options.map((option) => {
                    option.visible = true;
                });
            }
        }
        if (this.selectService.selected && input &&
            input.toLowerCase().indexOf(this.selectService.selected.toString().toLowerCase()) === -1) {
            this.selectService.selected = null;
            this.model = null;
        }
    }
    writeValue(obj: any) {
        this.selectService.input = obj;
    }
    /*
     * These callbacks will be given to us through the ControlValueAccessor interface,
     * and we need to call them when the user interacts with the checkbox.
     */
    private onChangeCallback = (_: any) => {};

    registerOnChange(onChange: any): void {
        this.onChangeCallback = onChange;
    }

    private onTouchedCallback = () => {};

    registerOnTouched(onTouched: any): void {
        this.onTouchedCallback = onTouched;
    }

    onMenuTriggerClick(e: Event) {
        this.ifOpenService.toggleWithEvent(e);
    }
}
