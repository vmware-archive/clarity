/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {
  Component,
  OnDestroy,
  ViewChildren,
  QueryList,
  ElementRef,
  AfterViewInit,
  Renderer2,
  PLATFORM_ID,
  Inject,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { IconsViewService } from '../icons-view.service';
import { ActiveFragmentService } from '../utils/active-fragment.service';
import { ICONS_INVENTORY } from './icons-inventory';
import { FragmentContentComponent } from '../utils/fragment-content.component';
import { style, state, animate, transition, trigger } from '@angular/animations';
import { Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import jump from 'jump.js';

import { COMMON_PATH } from '../icons.component';

@Component({
  selector: 'icons-sets',
  templateUrl: './icons-sets.component.html',
  styleUrls: ['./icons-sets.component.scss'],
  animations: [
    trigger('showDetail', [
      state(
        'void',
        style({
          height: '0px',
        })
      ),
      state(
        '*',
        style({
          overflow: 'hidden',
        })
      ),
      transition('void => *', animate('250ms ease-out')),
      transition('* => void', animate('250ms ease-out')),
    ]),
  ],
})
export class IconsSetsComponent implements AfterViewInit, OnDestroy {
  private subscriptions: Subscription[] = [];

  commonPath = COMMON_PATH;

  // When we filter out icons by searching, we shouldn't shrink the initial container height
  initialHeight: number;

  // Window Resize Event to be used for cancelling the event
  windowResizeEvent: Function;

  // A "received" object value that comes when users adjust the preview settings for icons
  previewClasses: any;

  // When jumping to a fragment, leverage some space between window top and the fragment
  fragmentOffset = 192;

  @ViewChildren(FragmentContentComponent) fragmentContentElRef: QueryList<FragmentContentComponent>;

  sets: any = ICONS_INVENTORY;
  setNames: string[] = Object.keys(this.sets);

  constructor(
    private _el: ElementRef,
    private _iconsViewService: IconsViewService,
    private _renderer: Renderer2,
    private _activeFragmentService: ActiveFragmentService,
    @Inject(PLATFORM_ID) private platformId: Record<string, any>
  ) {
    this.subscriptions.push(
      this._iconsViewService.previewClasses.subscribe(newPreviewClasses => {
        this.previewClasses = newPreviewClasses;
      })
    );

    // jump to the very first fragment on search results
    this.subscriptions.push(
      this._iconsViewService.searchValue.pipe(debounceTime(200)).subscribe((searchedValue: string) => {
        const firstFragRef = this.fragmentContentElRef.first;

        let firstFragRefEl: any;

        if (firstFragRef) {
          firstFragRefEl = firstFragRef.el.nativeElement;

          if (searchedValue.length > 0) {
            jump(firstFragRefEl, {
              offset: -this.fragmentOffset,
              duration: 250,
            });
          }
        }
      })
    );

    // if window size changes, hide the icon detail box.
    if (isPlatformBrowser(this.platformId)) {
      this.windowResizeEvent = this._renderer.listen(window, 'resize', () => {
        this.hideDetail();
      });
    }

    this.prepareIconsSets();
  }

  ngOnDestroy() {
    this.subscriptions.forEach((sub: Subscription) => sub.unsubscribe());
    if (this.windowResizeEvent) {
      this.windowResizeEvent();
    }
  }

  ngAfterViewInit() {
    this.filterIconsOnSearch();

    // @angular/router v4.3.0^ breaks something with the lifecycle.
    // TODO: find a better way to solve this chocolate error than using setTimeout.

    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        this.initialHeight = this._el.nativeElement.getBoundingClientRect().height;
      });
    }
  }

  /**
   * Prepare icon sets
   */

  prepareIconsSets() {
    for (const setName in this.sets) {
      if (this.sets.hasOwnProperty(setName)) {
        this.sets[setName].setTitle = setName
          .split('-')
          .map(word => {
            return word.charAt(0).toUpperCase() + word.slice(1);
          })
          .join(' ');

        this.sets[setName].matchedIcons = this.sets[setName].searchableIcons;
        this.sets[setName].fragmentOffset = -this.fragmentOffset;
      }
    }

    this.sets['core-shapes'].fragmentOffset = -Number.MAX_VALUE;
  }

  /**
   * Filter Icons
   */

  // A number of icons that match with the search value
  totalVisibleIcons: number;

  // A "received" string value that comes when users type in to search for icons
  searchedValue: string;

  filterIconsOnSearch() {
    this.subscriptions.push(
      this._iconsViewService.searchValue.pipe(debounceTime(200)).subscribe((searchedValue: string) => {
        // if icon detail box is open, close it when searching starts
        this.hideDetail();

        // on each search input key, we should reset the total number of visible keys
        // as we add up the visible icons' numbers at the end.
        this.totalVisibleIcons = 0;

        // this is set here to show what key is searched in the template.
        this.searchedValue = searchedValue;

        let topSetMatchesFound = '';

        Object.keys(this.sets).map((setName: string) => {
          this.sets[setName].matchedIcons = this.sets[setName].searchableIcons.filter(icon => {
            return (
              icon.name.toLocaleLowerCase().indexOf(searchedValue.toLocaleLowerCase()) > -1 ||
              this.filterIconsByTags(searchedValue, icon.tags).length > 0
            );
          });

          // active fragment should top visible icon set.
          if (!topSetMatchesFound && this.sets[setName].matchedIcons.length > 0) {
            topSetMatchesFound = setName;
            this._activeFragmentService.activeFragment.next(setName);
          }

          //add the number of visible icons from each sets
          this.totalVisibleIcons += this.sets[setName].matchedIcons.length;
        });
      })
    );

    // send GA searched icons
    // debounceTime is 1 second
    this.subscriptions.push(
      this._iconsViewService.searchValue.pipe(debounceTime(1000)).subscribe(() => {
        if (window.trackIconSearch && this.searchedValue) {
          window.trackIconSearch(this.searchedValue, this.totalVisibleIcons);
        }
      })
    );
  }

  filterIconsByTags(searchedValue: string, tags: string[]) {
    return tags.filter(tag => {
      return tag.toLowerCase().indexOf(searchedValue.toLowerCase()) > -1;
    });
  }

  /**
   * Icon Detail Box
   */

  showDetailOn: any;
  showDetailOnIcon: string;
  showDetailOnIconAliases: string[];
  showDetailInSet: string;
  showDetailBoxAfter: any;

  @ViewChildren('visibleIconElRef') visibleIconElRef: QueryList<ElementRef>;

  showDetail(showDetailInSet: string, showDetailOnIcon: string, showDetailOnIconAliases: string[] = []) {
    if (showDetailInSet === this.showDetailInSet && showDetailOnIcon === this.showDetailOnIcon) {
      /**
       * If the same icon clicked again,
       * hide its detail box to create a toggling behavior.
       */
      this.hideDetail();
      return;
    }

    this.showDetailInSet = showDetailInSet;
    this.showDetailOnIcon = showDetailOnIcon;
    this.showDetailOnIconAliases = showDetailOnIconAliases;

    const pickedIconRowKey = this.showDetailOn.getBoundingClientRect().top;

    const rows = {};
    this.visibleIconElRef.map((coreIconItem: ElementRef) => {
      const rowKeyElement = coreIconItem.nativeElement;
      const rowKey = rowKeyElement.getBoundingClientRect().top;
      rows[rowKey] = { lastInRow: rowKeyElement };
    });

    this.showDetailBoxAfter = rows[pickedIconRowKey].lastInRow;
  }

  hideDetail() {
    this.showDetailOn = undefined;
    this.showDetailOnIcon = undefined;
    this.showDetailBoxAfter = undefined;
  }
}
