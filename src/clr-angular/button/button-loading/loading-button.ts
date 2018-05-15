/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */


import {animate, keyframes, style, transition, trigger} from "@angular/animations";
import {Component, ElementRef, EventEmitter, Output, Renderer2} from "@angular/core";
import {ClrLoadingState, LoadingListener} from "../../utils/loading";

@Component({
    selector: "button[clrLoading]",
    template: `
        <ng-container [ngSwitch]="state">
            <span *ngSwitchCase="buttonState.LOADING">
                <span @spinner class="spinner spinner-inline"></span>
            </span>
            <span *ngSwitchCase="buttonState.SUCCESS">
                <span @validated class="spinner spinner-inline spinner-check"></span>
            </span>
            <span *ngSwitchCase="buttonState.DEFAULT" @defaultButton>
                <ng-content></ng-content>
            </span>
        </ng-container>
    `,
    providers: [{provide: LoadingListener, useExisting: ClrLoadingButton}],
    animations: [
        trigger("defaultButton",
                [
                    transition(":enter", [style({opacity: 0}), animate("200ms 100ms ease-in", style({opacity: 1}))]),
                    // TODO: see if we can get leave animation to work before spinner's enter animation
                    transition(":leave", [style({opacity: 0})])
                ]),
        trigger("spinner",
                [
                    transition(":enter", [style({opacity: 0}), animate("200ms 100ms ease-in", style({opacity: 1}))]),
                    transition(":leave", [style({opacity: 1}), animate("100ms ease-out", style({opacity: 0}))])
                ]),
        trigger("validated",
                [
                    transition(":enter",
                               [animate("300ms", keyframes([
                                            style({transform: "scale(0,0)"}), style({opacity: 1}),
                                            style({transform: "scale(1.2,1.2)"}), style({transform: "scale(.9,.9)"}),
                                            style({transform: "scale(1,1)"})
                                        ]))]),
                    transition(":leave", [style({opacity: 1}), animate("100ms ease-out", style({opacity: 0}))])
                ])
    ]
})
export class ClrLoadingButton implements LoadingListener {
    public buttonState = ClrLoadingState;
    public state: ClrLoadingState = ClrLoadingState.DEFAULT;

    @Output("clrLoadingChange")
    public clrLoadingChange: EventEmitter<ClrLoadingState> = new EventEmitter<ClrLoadingState>(false);

    constructor(private el: ElementRef, private renderer: Renderer2) {}

    loadingStateChange(state: ClrLoadingState): void {
        this.state = state;

        switch (state) {
            case ClrLoadingState.DEFAULT:
                this.renderer.removeStyle(this.el.nativeElement, "width");
                this.renderer.removeAttribute(this.el.nativeElement, "disabled");
                break;
            case ClrLoadingState.LOADING:
                this.setExplicitButtonWidth();
                this.renderer.setAttribute(this.el.nativeElement, "disabled", "");
                break;
            case ClrLoadingState.SUCCESS:
                this.setExplicitButtonWidth();
                setTimeout(() => {
                    this.loadingStateChange(ClrLoadingState.DEFAULT);
                }, 1000);
                break;
            case ClrLoadingState.ERROR:
                this.loadingStateChange(ClrLoadingState.DEFAULT);
                break;
            default:
                break;
        }

        this.clrLoadingChange.emit(state);
    }

    private setExplicitButtonWidth() {
        if (getComputedStyle) {
            const width = getComputedStyle(this.el.nativeElement).getPropertyValue("width");
            this.renderer.setStyle(this.el.nativeElement, "width", width);
        }
    }
}
