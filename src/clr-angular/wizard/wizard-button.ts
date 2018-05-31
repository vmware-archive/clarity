/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component, EventEmitter, Input, Output } from '@angular/core';

import { ButtonHubService } from './providers/button-hub.service';
import { WizardNavigationService } from './providers/wizard-navigation.service';

export const DEFAULT_BUTTON_TYPES: any = {
  cancel: 'cancel',
  previous: 'previous',
  next: 'next',
  finish: 'finish',
  danger: 'danger',
};

export const CUSTOM_BUTTON_TYPES: any = {
  cancel: 'custom-cancel',
  previous: 'custom-previous',
  next: 'custom-next',
  finish: 'custom-finish',
  danger: 'custom-danger',
};

@Component({
  selector: 'clr-wizard-button',
  template: `
        <button
            type="button"
            class="btn clr-wizard-btn"
            [class.btn-link]="isCancel"
            [class.clr-wizard-btn--tertiary]="isCancel"
            [class.btn-outline]="isPrevious"
            [class.clr-wizard-btn--secondary]="isPrevious"
            [class.btn-primary]="isPrimaryAction"
            [class.clr-wizard-btn--primary]="isPrimaryAction"
            [class.btn-success]="isFinish"
            [class.btn-danger]="isDanger"
            [class.disabled]="isDisabled"
            [attr.disabled]="_disabledAttribute"
            (click)="click()">
            <ng-content></ng-content>
        </button>
    `,
  host: { class: 'clr-wizard-btn-wrapper', '[attr.aria-hidden]': 'isHidden' },
  styles: ['[aria-hidden="true"] { display: none; }'],
})
export class ClrWizardButton {
  @Input('type') public type: string = '';

  @Input('clrWizardButtonDisabled') public disabled: boolean = false;

  @Input('clrWizardButtonHidden') public hidden: boolean = false;

  // EventEmitter which is emitted when a button is clicked.
  @Output('clrWizardButtonClicked') wasClicked: EventEmitter<string> = new EventEmitter<string>(false);

  constructor(public navService: WizardNavigationService, public buttonService: ButtonHubService) {}

  private checkDefaultAndCustomType(valueToCheck: string = '', typeToLookUp: string) {
    if (DEFAULT_BUTTON_TYPES[typeToLookUp] === valueToCheck) {
      return true;
    }
    if (CUSTOM_BUTTON_TYPES[typeToLookUp] === valueToCheck) {
      return true;
    }
    return false;
  }

  public get isCancel(): boolean {
    return this.checkDefaultAndCustomType(this.type, 'cancel');
  }

  public get isNext(): boolean {
    return this.checkDefaultAndCustomType(this.type, 'next');
  }

  public get isPrevious(): boolean {
    return this.checkDefaultAndCustomType(this.type, 'previous');
  }

  public get isFinish(): boolean {
    return this.checkDefaultAndCustomType(this.type, 'finish');
  }

  public get isDanger(): boolean {
    return this.checkDefaultAndCustomType(this.type, 'danger');
  }

  public get isPrimaryAction(): boolean {
    return this.isNext || this.isDanger || this.isFinish;
  }

  public get _disabledAttribute(): string | null {
    if (this.isDisabled) {
      return '';
    }
    return null;
  }

  public get isDisabled(): boolean {
    // dealing with negatives here. cognitively easier to think of it like this...
    const disabled = true;
    const nav = this.navService;
    const page = this.navService.currentPage;

    // Ensure we don't change the response until buttons are ready to avoid chocolate
    if (!this.buttonService.buttonsReady) {
      return !disabled;
    }

    if (this.disabled || nav.wizardStopNavigation || !page) {
      return true;
    }

    if (this.isCancel) {
      return !disabled;
    }

    if (this.isPrevious && (nav.currentPageIsFirst || page.previousStepDisabled)) {
      return disabled;
    }

    if (this.isDanger && !page.readyToComplete) {
      return disabled;
    }

    if (this.isNext && (nav.currentPageIsLast || !page.readyToComplete)) {
      return disabled;
    }

    if (this.isFinish && (!nav.currentPageIsLast || !page.readyToComplete)) {
      return disabled;
    }

    return !disabled;
  }

  public get isHidden(): boolean {
    // dealing with negatives here. cognitively easier to think of it like this...
    const hidden = true;
    const nav = this.navService;

    // Ensure we don't change the response until buttons are ready to avoid chocolate
    if (!this.buttonService.buttonsReady) {
      return !hidden;
    }

    if (this.hidden) {
      return true;
    }

    if (this.isCancel) {
      return !hidden;
    }

    if (this.isPrevious && nav.currentPageIsFirst) {
      return hidden;
    }

    if (this.isNext && nav.currentPageIsLast) {
      return hidden;
    }

    if (this.isFinish && !nav.currentPageIsLast) {
      return hidden;
    }

    return !hidden;
  }

  click(): void {
    if (this.isDisabled) {
      return;
    }

    this.wasClicked.emit(this.type);
    this.buttonService.buttonClicked(this.type);
  }
}
