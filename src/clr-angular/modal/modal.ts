/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { animate, AnimationEvent, style, transition, trigger } from '@angular/animations';
import {
  Component,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  OnChanges,
  OnDestroy,
  Output,
  SimpleChange,
  ViewChild,
  Inject,
  ElementRef,
  PLATFORM_ID,
} from '@angular/core';

import { FocusTrapDirective } from '../utils/focus-trap/focus-trap.directive';
import { ScrollingService } from '../utils/scrolling/scrolling-service';
import { ClrCommonStringsService } from '../utils/i18n/common-strings.service';
import { UNIQUE_ID, UNIQUE_ID_PROVIDER } from '../utils/id-generator/id-generator.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'clr-modal',
  viewProviders: [ScrollingService],
  templateUrl: './modal.html',
  styles: [
    `
        :host { display: none; }
        :host.open { display: inline; }
    `,
  ],
  animations: [
    trigger('fadeDown', [
      transition('* => false', [style({ opacity: 0, transform: 'translate(0, -25%)' }), animate('0.2s ease-in-out')]),
      transition('false => *', [animate('0.2s ease-in-out', style({ opacity: 0, transform: 'translate(0, -25%)' }))]),
    ]),
    trigger('fade', [
      transition('void => *', [style({ opacity: 0 }), animate('0.2s ease-in-out', style({ opacity: 0.85 }))]),
      transition('* => void', [animate('0.2s ease-in-out', style({ opacity: 0 }))]),
    ]),
  ],
  providers: [UNIQUE_ID_PROVIDER],
})
export class ClrModal implements OnChanges, OnDestroy {
  @ViewChild(FocusTrapDirective, { static: false })
  focusTrap: FocusTrapDirective;
  @ViewChild('modalTitle', { static: false })
  modalTitle: ElementRef<HTMLDivElement>;

  @HostBinding('class.open')
  @Input('clrModalOpen')
  _open: boolean = false;
  @Output('clrModalOpenChange') _openChanged: EventEmitter<boolean> = new EventEmitter<boolean>(false);

  @Input('clrModalClosable') closable: boolean = true;
  @Input('clrModalSize') size: string;
  @Input('clrModalStaticBackdrop') staticBackdrop: boolean = true;
  @Input('clrModalSkipAnimation') skipAnimation: string = 'false';

  // presently this is only used by wizards
  @Input('clrModalOverrideScrollService') bypassScrollService: boolean = false;
  @Input('clrModalPreventClose') stopClose: boolean = false;
  @Output('clrModalAlternateClose') altClose: EventEmitter<boolean> = new EventEmitter<boolean>(false);

  constructor(
    private _scrollingService: ScrollingService,
    public commonStrings: ClrCommonStringsService,
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(UNIQUE_ID) public modalId: string
  ) {}

  // Detect when _open is set to true and set no-scrolling to true
  ngOnChanges(changes: { [propName: string]: SimpleChange }): void {
    if (!this.bypassScrollService && changes && changes.hasOwnProperty('_open')) {
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
    if (this._open) {
      return;
    }
    this._open = true;
    this._openChanged.emit(true);
  }

  @HostListener('body:keyup.escape')
  close(): void {
    if (this.stopClose) {
      this.altClose.emit(false);
      return;
    }
    if (!this.closable || !this._open) {
      return;
    }
    this._open = false;
    // todo: remove this after animation bug is fixed https://github.com/angular/angular/issues/15798
    // this was handled by the fadeDone event below, but that AnimationEvent is not firing in Angular 4.0.
    this._openChanged.emit(false);
    // SPECME
    this.focusTrap.setPreviousFocus(); // Handles moving focus back to the element that had it before.
  }

  // TODO Investigate if we can decouple from animation events
  fadeDone(e: AnimationEvent) {
    if (e.toState === 'void') {
      this._openChanged.emit(false);
    } else if (e.toState === 'false' && isPlatformBrowser(this.platformId) && this.modalTitle) {
      this.modalTitle.nativeElement.focus();
    }
  }
}
