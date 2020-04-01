/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {
  ChangeDetectorRef,
  ElementRef,
  Component,
  EventEmitter,
  Input,
  Optional,
  Output,
  AfterViewInit,
  ContentChildren,
  QueryList,
  OnInit,
  OnDestroy,
} from '@angular/core';

// providers
import { AlertIconAndTypesService } from './providers/icon-and-types.service';
import { MultiAlertService } from './providers/multi-alert.service';
import { isBooleanAttributeSet } from '../../utils/component/is-boolean-attribute-set';
import { ClrCommonStringsService } from '../../utils/i18n/common-strings.service';
import { ClrAriaLiveService, ClrAriaLivePoliteness } from '../../utils/a11y/aria-live.service';
import { ClrAlertText } from './alert-text';
import { Subscription } from 'rxjs';

@Component({
  selector: 'clr-alert',
  providers: [AlertIconAndTypesService, ClrAriaLiveService],
  templateUrl: './alert.html',
  styles: [':host { display: block; }'],
})
export class ClrAlert implements OnInit, OnDestroy, AfterViewInit {
  private subscriptions: Subscription[] = [];

  constructor(
    private iconService: AlertIconAndTypesService,
    private cdr: ChangeDetectorRef,
    @Optional() private multiAlertService: MultiAlertService,
    private commonStrings: ClrCommonStringsService,
    private ariaLiveService: ClrAriaLiveService
  ) {}

  ngOnInit() {
    if (this.multiAlertService) {
      this.subscriptions.push(
        this.multiAlertService.changes.subscribe(() => {
          this.hidden = this.multiAlertService.currentAlert !== this;
        })
      );
    }
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  ngAfterViewInit() {
    // Announce the first time the alert is render if it is not hidden
    this.announceAriaLiveMessage();
  }

  @Input('clrAlertSizeSmall') isSmall = false;
  @Input('clrAlertClosable') closable = true;
  @Input('clrAlertAppLevel') isAppLevel = false;

  // Aria
  @Input() clrCloseButtonAriaLabel: string = this.commonStrings.keys.alertCloseButtonAriaLabel;

  @Input('clrAlertClosed') _closed = false;
  @Output('clrAlertClosedChange') _closedChanged: EventEmitter<boolean> = new EventEmitter<boolean>(false);

  @Input('clrAlertType')
  set alertType(val: string) {
    this.iconService.alertType = val;
  }

  get alertType(): string {
    return this.iconService.alertType;
  }

  /**
   * clrPolite is not used in the code. Is here just to provide
   * code complition and also mark component what type AriaLive
   * will be used.
   */
  /** @deprecated since 3.0, remove in 4.0 */
  @Input('clrPolite') polite = true;
  /** @deprecated since 3.0, remove in 4.0 */
  @Input('clrAssertive') assertive: boolean;
  /** @deprecated since 3.0, remove in 4.0 */
  @Input('clrOff') off: boolean;
  /**
   * There is an order on how the attributes will take effect.
   * Assertive, Off, Polite.
   *
   * Polite is default if non is passed.
   *
   * In the case of setting all of them to true. Assertive will be used.
   *
   */
  get ariaLive(): ClrAriaLivePoliteness {
    if (isBooleanAttributeSet(this.assertive)) {
      return ClrAriaLivePoliteness.assertive;
    }
    if (isBooleanAttributeSet(this.off)) {
      return ClrAriaLivePoliteness.off;
    }
    return ClrAriaLivePoliteness.polite;
  }

  @Input('clrAlertIcon')
  set alertIconShape(value: string) {
    this.iconService.alertIconShape = value;
  }

  get alertClass(): string {
    return this.iconService.iconInfoFromType(this.iconService.alertType).cssClass;
  }

  @ContentChildren(ClrAlertText, { descendants: true, read: ElementRef })
  alertTexts: QueryList<ElementRef>;
  /**
   * This handle the find what content to be annonced withing the aria-live container
   * alerts that are hidden will be ignored.
   *
   * @remark
   * We depend on the ClrAlertText Directive to find and parse the alert messages.
   * Also this require the HTML markup for the alert to be
   * ```html
   * <div class="alert" role="alert">
   *    <div class="alert-items">
   *        <div class="alert-item static">
   *            <span class="alert-text">
   *                 ...
   *            </span>
   *        </div>
   *    </div>
   * </div>
   * ```
   */
  private announceAriaLiveMessage(): void {
    if (!this.hidden && this.alertTexts.length) {
      const message = this.alertTexts.map(alertText => alertText.nativeElement.textContent).join(' ');
      // Don't call announce when there is nothing to say
      if (message) {
        this.ariaLiveService.announce(message, this.ariaLive);
      }
    }
  }

  private _hidden: boolean;

  set hidden(value: boolean) {
    if (value !== this._hidden) {
      this._hidden = value;
      this.cdr.detectChanges();
    }
  }

  get hidden() {
    return this._hidden;
  }

  close(): void {
    if (!this.closable) {
      return;
    }
    this._closed = true;
    if (this.multiAlertService) {
      this.multiAlertService.close();
    }
    this._closedChanged.emit(true);
  }

  open(): void {
    this._closed = false;
    this._closedChanged.emit(false);
  }
}
