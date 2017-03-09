/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {Component, ContentChildren, QueryList, Input, HostListener, ElementRef} from "@angular/core";
import {Button} from "./button";
import {ButtonInGroupService} from "./providers/buttonInGroup.service";
import {menuPositions} from "../dropdown/menu-positions";

@Component({
    selector: "clr-button-group",
    templateUrl: "button-group.html",
    providers: [ButtonInGroupService],
    host: {
        "[class.btn-group]" : "true"
    }
})
export class ButtonGroup {
    @ContentChildren(Button) buttons: QueryList<Button>;

    constructor(
        public buttonGroupNewService: ButtonInGroupService,
        private elementRef: ElementRef) {}

    inlineButtons: Button[] = [];
    menuButtons: Button[] = [];

    /**
     * 1. Initializes the initial Button Group View
     * 2. Subscribes to changes on the ContentChildren
     *    in case the user content projection changes
     */
    ngAfterContentInit() {
        this.initializeButtons();
        this.buttonGroupNewService.changes.subscribe(button => this.rearrangeButton(button));
        this.buttons.changes.subscribe(() => {
            this.initializeButtons();
        });
    }

    /**
     * Moves the button into the other ViewContainer
     * when an update is received.
     *
     * @param button
     */
    rearrangeButton(button: Button): void {
        let fromView: Button[];
        let toView: Button[];
        if (button.inMenu) {
            fromView = this.inlineButtons;
            toView = this.menuButtons;
        } else {
            fromView = this.menuButtons;
            toView = this.inlineButtons;
        }
        const index: number = fromView.indexOf(button);
        if (index > -1) {
            fromView.splice(index, 1);
            const moveIndex = this.getMoveIndex(button);
            if (moveIndex <= toView.length) {
                toView.splice(moveIndex, 0, button);
            }
        }
    }

    /**
     * Author: Eudes
     *
     * Finds the order of a button w.r.t other buttons
     *
     * @param buttonToMove
     * @returns {number}
     */
    getMoveIndex(buttonToMove: Button): number {
        let tempArr: Button[] = this.buttons.filter(button => (button.inMenu === buttonToMove.inMenu));
        return tempArr.indexOf(buttonToMove);
    }

    /**
     * Finds where each button belongs based on
     * the ContentChildren
     */
    initializeButtons(): void {
        let tempInlineButtons: Button[] = [];
        let tempInMenuButtons: Button[] = [];
        this.buttons.forEach((button) => {
            if (button.inMenu) {
                tempInMenuButtons.push(button);
            } else {
                tempInlineButtons.push(button);
            }
        });
        this.inlineButtons = tempInlineButtons;
        this.menuButtons = tempInMenuButtons;
    }

    /**
     * Overflow Menu
     *
     */

    //Indicates the position of the overflow menu
    private _menuPosition: string;

    get menuPosition(): string {
        return this._menuPosition;
    }

    @Input("clrMenuPosition")
    set menuPosition(pos: string) {
        if (pos && (menuPositions.indexOf(pos) > -1)) {
            this._menuPosition = pos;
        } else {
            this._menuPosition = "bottom-left";
        }
    }

    private _openMenu: boolean = false;

    get openMenu(): boolean {
        return this._openMenu;
    }

    /**
     * Toggle the Dropdown Menu when the Dropdown Toggle is
     * clicked. Also set a flag that indicates that the toggle
     * was clicked so that we don't traverse the DOM to find the
     * location of the click.
     */
    toggleMenu(): void {
        this._openMenu = !this.openMenu;
        this._overflowMenuToggleClicked = true;
    }

    /**
     * Flag with indicates if the overflow menu toggle was clicked.
     * If true, this can save us traversing the DOM to find
     * whether the click was withing the button group toggle
     * or menu in the onMouseClick method
     * @type {boolean}
     * @private
     */
    private _overflowMenuToggleClicked: boolean = false;

    //TODO: Generic Directive to handle this
    /**
     * Called on mouse clicks anywhere in the DOM.
     * Checks to see if the mouseclick happened on the host or outside
     * @param target
     */
    @HostListener("document:click", ["$event.target"])
    onMouseClick(target: any): void {
        if (this._openMenu && !this._overflowMenuToggleClicked) {
            //Reset the overflow menu toggle clicked flag
            this._overflowMenuToggleClicked = false;
            let current: any = target; //Get the element in the DOM on which the mouse was clicked
            let host: any = this.elementRef.nativeElement; //Current Button Group

            if (current.classList.contains("dropdown-menu")) {
                current = current.parentNode;
                while (current) {
                    if (current === document) {
                        this._openMenu = false;
                        return;
                    }

                    //If clicked on dropdown menu and menu is in host
                    //do nothing
                    if (current === host) {
                        return;
                    }
                    current = current.parentNode;
                }
            }
            this._openMenu = false;
        }
        this._overflowMenuToggleClicked = false; //Reset the overflow menu toggle clicked flag
    }
}