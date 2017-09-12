/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {animate, AnimationEvent, state, style, transition, trigger} from "@angular/animations";
import {Component, EventEmitter, HostListener, Input, OnChanges, OnDestroy, Output, SimpleChange} from "@angular/core";

import {ScrollingService} from "../utils/scrolling/scrolling-service";

import {GHOST_PAGE_ANIMATION} from "./utils/ghost-page-animations";

@Component({
    selector: "clr-modal",
    viewProviders: [ScrollingService],
    templateUrl: "./modal.html",
    styles: [`
        :host { display: inline-block; }
    `],
    animations: [
        trigger("fadeDown",
                [
                    transition("* => false",
                               [style({opacity: 0, transform: "translate(0, -25%)"}), animate("0.2s ease-in-out")]),
                    transition("false => *",
                               [animate("0.2s ease-in-out", style({opacity: 0, transform: "translate(0, -25%)"}))])
                ]),
        trigger("fade",
                [
                    transition("void => *", [style({opacity: 0}), animate("0.2s ease-in-out", style({opacity: 0.85}))]),
                    transition("* => void", [animate("0.2s ease-in-out", style({opacity: 0}))])
                ]),
        trigger("ghostPageOneState",
                [
                    state(GHOST_PAGE_ANIMATION.STATES.NO_PAGES, style({left: "-24px"})),
                    state(GHOST_PAGE_ANIMATION.STATES.ALL_PAGES, style({left: "0"})),
                    state(GHOST_PAGE_ANIMATION.STATES.NEXT_TO_LAST_PAGE, style({left: "-24px"})),
                    state(GHOST_PAGE_ANIMATION.STATES.LAST_PAGE, style({left: "-24px"})),
                    transition(GHOST_PAGE_ANIMATION.STATES.NO_PAGES + " => *",
                               animate(GHOST_PAGE_ANIMATION.TRANSITIONS.IN)),
                    transition(GHOST_PAGE_ANIMATION.STATES.ALL_PAGES + " => *",
                               animate(GHOST_PAGE_ANIMATION.TRANSITIONS.OUT)),
                    transition(GHOST_PAGE_ANIMATION.STATES.LAST_PAGE + " => *",
                               animate(GHOST_PAGE_ANIMATION.TRANSITIONS.IN)),
                    transition(GHOST_PAGE_ANIMATION.STATES.NEXT_TO_LAST_PAGE + " => *",
                               animate(GHOST_PAGE_ANIMATION.TRANSITIONS.OUT))
                ]),
        // TODO: USE TRANSFORM, NOT LEFT...
        trigger("ghostPageTwoState",
                [
                    state(GHOST_PAGE_ANIMATION.STATES.NO_PAGES, style({left: "-24px", top: "24px", bottom: "24px"})),
                    state(GHOST_PAGE_ANIMATION.STATES.ALL_PAGES, style({left: "24px"})),
                    state(GHOST_PAGE_ANIMATION.STATES.NEXT_TO_LAST_PAGE,
                          style({left: "0px", top: "24px", bottom: "24px", background: "#bbb"})),
                    state(GHOST_PAGE_ANIMATION.STATES.LAST_PAGE, style({left: "-24px", top: "24px", bottom: "24px"})),
                    transition(GHOST_PAGE_ANIMATION.STATES.NO_PAGES + " => *",
                               animate(GHOST_PAGE_ANIMATION.TRANSITIONS.IN)),
                    transition(GHOST_PAGE_ANIMATION.STATES.ALL_PAGES + " => *",
                               animate(GHOST_PAGE_ANIMATION.TRANSITIONS.OUT)),
                    transition(GHOST_PAGE_ANIMATION.STATES.LAST_PAGE + " => *",
                               animate(GHOST_PAGE_ANIMATION.TRANSITIONS.IN)),
                    transition(GHOST_PAGE_ANIMATION.STATES.NEXT_TO_LAST_PAGE + " => *",
                               animate(GHOST_PAGE_ANIMATION.TRANSITIONS.OUT))
                ])
    ]
})
export class Modal implements OnChanges, OnDestroy {
    @Input("clrModalOpen") _open: boolean = false;
    @Output("clrModalOpenChange") _openChanged: EventEmitter<boolean> = new EventEmitter<boolean>(false);

    @Input("clrModalClosable") closable: boolean = true;
    @Input("clrModalSize") size: string;
    @Input("clrModalStaticBackdrop") staticBackdrop: boolean = false;
    @Input("clrModalSkipAnimation") skipAnimation: string = "false";

    // presently this is only used by wizards
    @Input("clrModalGhostPageState") ghostPageState: string = "hidden";
    @Input("clrModalOverrideScrollService") bypassScrollService: boolean = false;
    @Input("clrModalPreventClose") stopClose: boolean = false;
    @Output("clrModalAlternateClose") altClose: EventEmitter<boolean> = new EventEmitter<boolean>(false);

    constructor(private _scrollingService: ScrollingService) {}

    get sizeClass(): string {
        if (this.size) {
            return "modal-" + this.size;
        } else {
            return "";
        }
    }

    // Detect when _open is set to true and set no-scrolling to true
    ngOnChanges(changes: {[propName: string]: SimpleChange}): void {
        if (!this.bypassScrollService && changes && changes.hasOwnProperty("_open")) {
            if (changes._open.currentValue) {
                this._scrollingService.stopScrolling();
            } else {
                this._scrollingService.resumeScrolling();
            }
        }
    }

    ngOnDestroy(): void {
        this._scrollingService.resumeScrolling();
    }

    open(): void {
        if (this._open === true) {
            return;
        }
        this._open = true;
        this._openChanged.emit(true);
    }

    @HostListener("body:keyup.escape")
    close(): void {
        if (this.stopClose) {
            this.altClose.emit(false);
            return;
        }
        if (!this.closable || this._open === false) {
            return;
        }
        this._open = false;
        // todo: remove this after animation bug is fixed https://github.com/angular/angular/issues/15798
        // this was handled by the fadeDone event below, but that AnimationEvent is not firing in Angular 4.0.
        this._openChanged.emit(false);
        // SPECME
    }

    fadeDone(e: AnimationEvent) {
        if (e.toState === "void") {
            this._openChanged.emit(false);
        }
    }
}
