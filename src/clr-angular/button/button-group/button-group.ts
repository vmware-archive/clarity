/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component, ContentChildren, ElementRef, HostListener, Input, QueryList } from '@angular/core';

import { Point } from '../../popover/common/popover';
import { CLR_MENU_POSITIONS } from '../../popover/dropdown/menu-positions';
import { ButtonInGroupService } from '../providers/button-in-group.service';
import { ClrCommonStrings } from '../../utils/i18n/common-strings.interface';

import { ClrButton } from './button';

@Component({
  selector: 'clr-button-group',
  templateUrl: 'button-group.html',
  providers: [ButtonInGroupService],
  host: { '[class.btn-group]': 'true' },
})
export class ClrButtonGroup {
  @ContentChildren(ClrButton) buttons: QueryList<ClrButton>;

  constructor(
    public buttonGroupNewService: ButtonInGroupService,
    private elementRef: ElementRef,
    public commonStrings: ClrCommonStrings
  ) {}

  inlineButtons: ClrButton[] = [];
  menuButtons: ClrButton[] = [];

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
  rearrangeButton(button: ClrButton): void {
    let fromView: ClrButton[];
    let toView: ClrButton[];
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
   * @returns
   */
  getMoveIndex(buttonToMove: ClrButton): number {
    const tempArr: ClrButton[] = this.buttons.filter(button => button.inMenu === buttonToMove.inMenu);
    return tempArr.indexOf(buttonToMove);
  }

  initializeButtons(): void {
    const tempInlineButtons: ClrButton[] = [];
    const tempInMenuButtons: ClrButton[] = [];
    this.buttons.forEach(button => {
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

  // Indicates the position of the overflow menu
  private _menuPosition: string;

  get menuPosition(): string {
    return this._menuPosition;
  }

  @Input('clrMenuPosition')
  set menuPosition(pos: string) {
    if (pos && CLR_MENU_POSITIONS.indexOf(pos) > -1) {
      this._menuPosition = pos;
    } else {
      this._menuPosition = 'bottom-left';
    }
    // set the popover values based on menu position
    switch (this._menuPosition) {
      case 'top-right':
        this.anchorPoint = Point.TOP_RIGHT;
        this.popoverPoint = Point.RIGHT_BOTTOM;
        break;
      case 'top-left':
        this.anchorPoint = Point.TOP_LEFT;
        this.popoverPoint = Point.LEFT_BOTTOM;
        break;
      case 'bottom-right':
        this.anchorPoint = Point.BOTTOM_RIGHT;
        this.popoverPoint = Point.RIGHT_TOP;
        break;
      case 'bottom-left':
        this.anchorPoint = Point.BOTTOM_LEFT;
        this.popoverPoint = Point.LEFT_TOP;
        break;
      case 'right-top':
        this.anchorPoint = Point.RIGHT_TOP;
        this.popoverPoint = Point.LEFT_TOP;
        break;
      case 'right-bottom':
        this.anchorPoint = Point.RIGHT_BOTTOM;
        this.popoverPoint = Point.LEFT_BOTTOM;
        break;
      case 'left-top':
        this.anchorPoint = Point.LEFT_TOP;
        this.popoverPoint = Point.RIGHT_TOP;
        break;
      case 'left-bottom':
        this.anchorPoint = Point.LEFT_BOTTOM;
        this.popoverPoint = Point.RIGHT_BOTTOM;
        break;
      default:
        this.anchorPoint = Point.BOTTOM_LEFT;
        this.popoverPoint = Point.LEFT_TOP;
        break;
    }
  }

  private _openMenu: boolean = false;

  get openMenu(): boolean {
    return this._openMenu;
  }

  set openMenu(value: boolean) {
    this._openMenu = value;
  }

  public anchorPoint: Point = Point.BOTTOM_LEFT; // default if menuPosition isn't set
  public popoverPoint: Point = Point.LEFT_TOP; // default if menuPosition isn't set

  /**
   * Toggle the ClrDropdown Menu when the ClrDropdown Toggle is
   * clicked. Also set a flag that indicates that the toggle
   * was clicked so that we don't traverse the DOM to find the
   * location of the click.
   */
  toggleMenu(): void {
    this.openMenu = !this.openMenu;
    this._overflowMenuToggleClicked = true;
  }

  /**
   * Flag with indicates if the overflow menu toggle was clicked.
   * If true, this can save us traversing the DOM to find
   * whether the click was withing the button group toggle
   * or menu in the onMouseClick method
   */
  private _overflowMenuToggleClicked: boolean = false;

  // TODO: Generic Directive to handle this
  /**
   * Called on mouse clicks anywhere in the DOM.
   * Checks to see if the mouseclick happened on the host or outside
   */
  @HostListener('document:click', ['$event.target'])
  onMouseClick(target: any): void {
    if (this.openMenu && !this._overflowMenuToggleClicked) {
      // Reset the overflow menu toggle clicked flag
      this._overflowMenuToggleClicked = false;
      let current: any = target; // Get the element in the DOM on which the mouse was clicked
      const host: any = this.elementRef.nativeElement; // Current Button Group

      if (current.classList.contains('dropdown-menu')) {
        current = current.parentNode;
        while (current) {
          if (current === document) {
            this.openMenu = false;
            return;
          }

          // If clicked on dropdown menu and menu is in host
          // do nothing
          if (current === host) {
            return;
          }
          current = current.parentNode;
        }
      }
      this.openMenu = false;
    }
    this._overflowMenuToggleClicked = false; // Reset the overflow menu toggle clicked flag
  }
}
