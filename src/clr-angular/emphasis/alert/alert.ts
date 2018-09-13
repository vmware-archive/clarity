/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { ChangeDetectorRef, Component, EventEmitter, Input, Optional, Output } from '@angular/core';

// providers
import { AlertIconAndTypesService } from './providers/icon-and-types.service';
import { MultiAlertService } from './providers/multi-alert.service';
import { ClrCommonStrings } from '../../utils/i18n/common-strings.interface';

@Component({
  selector: 'clr-alert',
  providers: [AlertIconAndTypesService],
  templateUrl: './alert.html',
  styles: [':host { display: block; }'],
})
export class ClrAlert {
  constructor(
    public iconService: AlertIconAndTypesService,
    public cdr: ChangeDetectorRef,
    @Optional() public multiAlertService: MultiAlertService,
    public commonStrings: ClrCommonStrings
  ) {}

  @Input('clrAlertSizeSmall') isSmall: boolean = false;
  @Input('clrAlertClosable') closable: boolean = true;
  @Input('clrAlertAppLevel') isAppLevel: boolean = false;

  @Input('clrAlertClosed') _closed: boolean = false;
  @Output('clrAlertClosedChange') _closedChanged: EventEmitter<boolean> = new EventEmitter<boolean>(false);

  @Input('clrAlertType')
  set alertType(val: string) {
    this.iconService.alertType = val;
  }
  get alertType(): string {
    return this.iconService.alertType;
  }

  @Input('clrAlertIcon')
  set alertIconShape(value: string) {
    this.iconService.alertIconShape = value;
  }

  get alertClass(): string {
    return this.iconService.iconInfoFromType(this.iconService.alertType).cssClass;
  }

  private previouslyHidden = false;
  private hidden = false;

  private detectChangesIfNeeded() {
    if (this.previouslyHidden !== this.hidden) {
      this.previouslyHidden = this.hidden;
      this.cdr.detectChanges();
    }
  }

  get isHidden() {
    if (this.multiAlertService) {
      if (this.multiAlertService.currentAlert === this) {
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
