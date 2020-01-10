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
} from '@angular/core';

// providers
import { AlertIconAndTypesService } from './providers/icon-and-types.service';
import { MultiAlertService } from './providers/multi-alert.service';
import { isBooleanAttributeSet } from '../../utils/component/is-boolean-attribute-set';
import { ClrCommonStringsService } from '../../utils/i18n/common-strings.service';
import { AriaLiveService, AriaLivePoliteness } from '../../utils/a11y/aria-live.service';
import { ClrAlertText } from './alert-text';

@Component({
  selector: 'clr-alert',
  providers: [AlertIconAndTypesService, AriaLiveService],
  templateUrl: './alert.html',
  styles: [':host { display: block; }'],
})
export class ClrAlert implements AfterViewInit {
  constructor(
    public iconService: AlertIconAndTypesService,
    public cdr: ChangeDetectorRef,
    @Optional() public multiAlertService: MultiAlertService,
    public commonStrings: ClrCommonStringsService,
    private ariaLiveService: AriaLiveService
  ) {}

  ngAfterViewInit() {
    // Announce the first time the alert is render if it is not hidden
    this.announceAriaLiveMessage();
  }

  @Input('clrAlertSizeSmall') isSmall: boolean = false;
  @Input('clrAlertClosable') closable: boolean = true;
  @Input('clrAlertAppLevel') isAppLevel: boolean = false;

  // Aria
  @Input() clrCloseButtonAriaLabel: string = this.commonStrings.keys.alertCloseButtonAriaLabel;

  @Input('clrAlertClosed') _closed: boolean = false;
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
  @Input('clrPolite') polite: boolean = true;
  @Input('clrAssertive') assertive: boolean;
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
  get ariaLive(): AriaLivePoliteness {
    if (isBooleanAttributeSet(this.assertive)) {
      return AriaLivePoliteness.assertive;
    }
    if (isBooleanAttributeSet(this.off)) {
      return AriaLivePoliteness.off;
    }
    return AriaLivePoliteness.polite;
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
    if (!this.isHidden && this.alertTexts.length) {
      const message = this.alertTexts.map(alertText => alertText.nativeElement.textContent).join(' ');
      // Don't call announce when there is nothing to say
      if (message) {
        this.ariaLiveService.announce(message, this.ariaLive);
      }
    }
  }

  private previouslyHidden = false;
  private hidden = false;

  private detectChangesIfNeeded() {
    if (this.previouslyHidden !== this.hidden) {
      this.previouslyHidden = this.hidden;
      this.cdr.detectChanges();
      // when alert hidden state change we could check and try to announce it.
      this.announceAriaLiveMessage();
    }
  }

  get isHidden() {
    if (this.multiAlertService) {
      // change detection issue in production mode causes currentAlert to be undefined when only the first alert exists
      // https://github.com/vmware/clarity/issues/2430
      if (this.multiAlertService.currentAlert === this || this.multiAlertService.count === 0) {
        if (this.hidden === true) {
          this.previouslyHidden = true;
          this.hidden = false;
        }
      } else if (this.hidden === false) {
        this.previouslyHidden = false;
        this.hidden = true;
      }
      this.detectChangesIfNeeded();
    }

    return this.hidden;
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
