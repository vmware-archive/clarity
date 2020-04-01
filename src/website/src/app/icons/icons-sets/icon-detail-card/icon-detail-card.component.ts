/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, Input } from '@angular/core';
import { environment } from '../../../../environments/environment';

declare const ClarityIcons: any;

import { COMMON_PATH } from '../../icons.component';

@Component({
  selector: 'icon-detail-card',
  templateUrl: './icon-detail-card.component.html',
  styleUrls: ['./icon-detail-card.component.scss'],
})
export class IconDetailCardComponent {
  commonPath = COMMON_PATH;

  private _clrIcon: string;
  private _clrIconSet: string;
  private _clrIconTemplate: string;
  private _clrIconAliases: string[];
  private _activeVariantClasses: string;

  get activeVariantClasses(): string {
    return this._activeVariantClasses;
  }

  set activeVariantClasses(value: string) {
    this._activeVariantClasses = value;
  }

  variants: string[];

  private _canAlert: boolean;
  private _canBadge: boolean;
  private _hasSolid: boolean;

  get canAlert(): boolean {
    return this._canAlert;
  }

  set canAlert(value: boolean) {
    if (value) {
      this.variants.push('has-alert');
    }
    this._canAlert = value;
  }

  get canBadge(): boolean {
    return this._canBadge;
  }

  set canBadge(value: boolean) {
    if (value) {
      this.variants.push('has-badge');
    }
    this._canBadge = value;
  }

  get hasSolid(): boolean {
    return this._hasSolid;
  }

  set hasSolid(value: boolean) {
    if (value) {
      this.variants.push('is-solid');

      if (this.variants.indexOf('has-alert') > -1) {
        this.variants.push('has-alert is-solid');
      }

      if (this.variants.indexOf('has-badge') > -1) {
        this.variants.push('has-badge is-solid');
      }
    }
    this._hasSolid = value;
  }

  get clrIcon(): string {
    return this._clrIcon;
  }
  @Input()
  set clrIcon(value: string) {
    this._activeVariantClasses = '';
    this.variants = [];
    this._clrIcon = value;
    this._clrIconTemplate = ClarityIcons.get(this._clrIcon);
    this.canAlert = this._clrIconTemplate.indexOf('can-alert') > -1;
    this.canBadge = this._clrIconTemplate.indexOf('can-badge') > -1;
    this.hasSolid = this._clrIconTemplate.indexOf('has-solid') > -1;
  }

  get clrIconSet(): string {
    return this._clrIconSet;
  }

  @Input()
  set clrIconSet(setName: string) {
    this._clrIconSet = setName;
  }

  get clrIconAliases(): string[] {
    return this._clrIconAliases || [];
  }
  @Input()
  set clrIconAliases(aliases: string[]) {
    this._clrIconAliases = aliases;
  }

  get downloadPath(): string {
    const variant: Record<string, string> = {
      '': '-line',
      'has-alert': '-outline-alerted',
      'has-badge': '-outline-badged',
      'is-solid': '-solid',
      'has-alert is-solid': '-solid-alerted',
      'has-badge is-solid': '-solid-badged',
    };

    return `${environment.icons_base_url}?set=${this.clrIconSet.replace('-shapes', '')}&shape=${this.clrIcon}${
      variant[this.activeVariantClasses]
    }`;
  }
}
