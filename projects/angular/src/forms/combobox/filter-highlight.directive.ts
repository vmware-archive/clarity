/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Directive, ElementRef, OnDestroy, AfterViewInit, Inject, PLATFORM_ID, HostBinding } from '@angular/core';
import { Subscription } from 'rxjs';
import { OptionSelectionService } from './providers/option-selection.service';
import { isPlatformBrowser } from '@angular/common';

// TODO: Check if this directive is properly sanitized and:
//       - return to module
//       - return to dev-app examples
//       - return to website docs
@Directive({ selector: '[clrFilterHighlight]' })
export class ClrFilterHighlight<T> implements AfterViewInit, OnDestroy {
  private subscriptions: Subscription[] = [];
  private initialHtml: string;
  private filter = '';
  constructor(
    private element: ElementRef,
    private optionSelectionService: OptionSelectionService<T>,
    @Inject(PLATFORM_ID) private platformId: any
  ) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.initialHtml = this.element.nativeElement.innerHTML;
      this.subscriptions.push(
        this.optionSelectionService.inputChanged.subscribe(filter => {
          this.filter = filter;
          this.findMatches();
        })
      );
    }
  }

  @HostBinding('class') elementClass = 'clr-filter-highlight';

  private sanitizeForRegexp(value: string): string {
    if (!value) {
      return value;
    }
    // We may want to replace this with a more common sanitization, if we find one
    return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  private findMatches() {
    if (!this.filter) {
      this.element.nativeElement.innerHTML = this.initialHtml;
      return;
    }
    const regex = new RegExp(`(${this.sanitizeForRegexp(this.filter)})`, 'gi');
    if (this.initialHtml.match(regex)) {
      this.element.nativeElement.innerHTML = this.initialHtml.replace(regex, `<b>$1</b>`);
    } else {
      this.element.nativeElement.innerHTML = this.initialHtml;
    }
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
