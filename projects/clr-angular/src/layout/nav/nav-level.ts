/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

import { ResponsiveNavigationService } from './providers/responsive-navigation.service';
import { ResponsiveNavCodes } from './responsive-nav-codes';

@Directive({ selector: '[clr-nav-level]' })
export class ClrNavLevel implements OnInit {
  @Input('clr-nav-level') _level: number;

  constructor(private responsiveNavService: ResponsiveNavigationService, private elementRef: ElementRef) {}

  ngOnInit() {
    if (this.level !== ResponsiveNavCodes.NAV_LEVEL_1 && this.level !== ResponsiveNavCodes.NAV_LEVEL_2) {
      console.error('Nav Level can only be 1 or 2');
      return;
    }
    this.responsiveNavService.registerNav(this.level);
    this.addNavClass(this.level);
  }

  addNavClass(level: number) {
    const navHostClassList = this.elementRef.nativeElement.classList;
    if (level === ResponsiveNavCodes.NAV_LEVEL_1) {
      navHostClassList.add(ResponsiveNavCodes.NAV_CLASS_LEVEL_1);
    } else if (level === ResponsiveNavCodes.NAV_LEVEL_2) {
      navHostClassList.add(ResponsiveNavCodes.NAV_CLASS_LEVEL_2);
    }
  }

  get level(): number {
    return this._level;
  }

  // getter to access the responsive navigation codes from the template
  get responsiveNavCodes(): ResponsiveNavCodes {
    return ResponsiveNavCodes;
  }

  open(): void {
    this.responsiveNavService.sendControlMessage(ResponsiveNavCodes.NAV_OPEN, this.level);
  }

  close(): void {
    this.responsiveNavService.sendControlMessage(ResponsiveNavCodes.NAV_CLOSE, this.level);
  }

  // TODO: Figure out whats the best way to do this. Possible methods
  // 1. HostListener (current solution)
  // 2. Directives on the .nav-link class. We discussed on moving away from class selectors but I forget the reason
  // why
  @HostListener('click', ['$event.target'])
  onMouseClick(target: any) {
    let current: any = target; // Get the element in the DOM on which the mouse was clicked
    const navHost: any = this.elementRef.nativeElement; // Get the current nav native HTML element

    // Start checking if current and navHost are equal.
    // If not traverse to the parentNode and check again.
    while (current) {
      if (current === navHost) {
        return;
      } else if (current.classList.contains('nav-link')) {
        this.close();
        return;
      }
      current = current.parentNode;
    }
  }

  ngOnDestroy() {
    this.responsiveNavService.unregisterNav(this.level);
  }
}
