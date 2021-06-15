/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component, Input } from '@angular/core';
import { SourceCodeLanguages } from './sourcecode.component';

// Stackblitz
import { StackblitzService } from './stackblitz/stackblitz.service';

import { SupportedTemplates } from '../templates';

// Icons
import '@cds/core/icon/register.js';
import {
  ClarityIcons,
  landscapeIcon,
  boltIcon,
  terminalIcon,
  codeIcon,
  betaIcon,
  viewColumnsIcon,
} from '@cds/core/icon';
ClarityIcons.addIcons(landscapeIcon, boltIcon, terminalIcon, codeIcon, betaIcon, viewColumnsIcon);

export interface DemoTabData {
  id?: string;
  name: string;
  files: { [filename: string]: string };
  language?: SourceCodeLanguages;
  template: SupportedTemplates;
}

@Component({
  selector: 'demo',
  template: `
    <ng-content></ng-content>

    <div *ngIf="sideBySideState" style="display:flex; align-items: flex-start; justify-content: space-between;">
      <clr-tabs *ngFor="let tab of tabs" style="width: 49.5%">
        <clr-tab>
          <button clrTabLink>{{ tab.name }}</button>
          <clr-tab-content *clrIfActive>
            <div *ngFor="let file of tab.files | keyvalue">
              <sourcecode [src]="file.value" [language]="tab.language"></sourcecode>
            </div>
            <div id="{{ tab.id }}"></div>
            <button (click)="openStackblitz(tab)" class="btn btn-sm btn-link">
              <cds-icon shape="bolt"></cds-icon> StackBlitz
            </button>
            <button (click)="embedStackblitz(tab, tab.id)" class="btn btn-sm btn-link">
              <cds-icon shape="terminal"></cds-icon> Run localy
            </button>
          </clr-tab-content>
        </clr-tab>

        <clr-tab *ngIf="!sideBySideState">
          <button clrTabLink (click)="sideBySide()" [clrTabLinkInOverflow]="inOverflow">
            <cds-icon (click)="sideBySide()" size="md" shape="view-columns">Side by side</cds-icon> Side by side
          </button>
        </clr-tab>

        <clr-tab *ngIf="sideBySideState">
          <button clrTabLink (click)="sideBySide()" [clrTabLinkInOverflow]="inOverflow">
            <cds-icon size="md" shape="landscape"></cds-icon> Full width
          </button>
        </clr-tab>
      </clr-tabs>
    </div>
    <div *ngIf="!sideBySideState">
      <clr-tabs>
        <clr-tab *ngFor="let tab of tabs">
          <button clrTabLink>{{ tab.name }}</button>
          <clr-tab-content *clrIfActive>
            <div *ngFor="let file of tab.files | keyvalue">
              <sourcecode [src]="file.value" [language]="tab.language"></sourcecode>
            </div>
            <div id="{{ tab.id }}"></div>
            <button (click)="openStackblitz(tab)" class="btn btn-sm btn-link">
              <cds-icon shape="bolt"></cds-icon> StackBlitz
            </button>
            <button (click)="embedStackblitz(tab, tab.id)" class="btn btn-sm btn-link">
              <cds-icon shape="terminal"></cds-icon> Run
            </button>
          </clr-tab-content>
        </clr-tab>

        <clr-tab *ngIf="!sideBySideState">
          <button clrTabLink (click)="sideBySide()" [clrTabLinkInOverflow]="inOverflow">
            <cds-icon (click)="sideBySide()" size="md" shape="view-columns">Side by side</cds-icon> Side by side
          </button>
        </clr-tab>

        <clr-tab *ngIf="sideBySideState">
          <button clrTabLink (click)="sideBySide()" [clrTabLinkInOverflow]="inOverflow">
            <cds-icon size="md" shape="landscape"></cds-icon> Full width
          </button>
        </clr-tab>
      </clr-tabs>
    </div>
  `,
  providers: [StackblitzService],
})
export class Demo {
  inOverflow = true;

  @Input('tabs') tabs: DemoTabData[] = [];

  // Experimental
  @Input('sideBySide') _sideBySideState: boolean | string = false;

  constructor(private stackblitz: StackblitzService) {}

  ngOnInit(): void {
    if (Array.isArray(this.tabs)) {
      // auto attach unique id for every tab - later used for embedding the preview
      this.tabs = this.tabs.map(tab => {
        // Use the first file name to generate hash - it must always be unique name
        // or at least unique for the page.
        tab.id = this.generateId(Object.values(tab.files)[0]);
        return tab;
      });
    }
  }

  /**
   * Generate hashkey for attaching preview container
   *
   * @NOTE this method is public only cause it's used inside the template - don't depend on it
   * @param id string
   * @returns string
   */
  public generateId(id: string): string {
    return (
      'preview-' +
      id.split('').reduce((prev, current) => {
        prev = (prev << 5) - prev + current.charCodeAt(0);
        return prev & prev;
      }, 0) *
        1
    );
  }

  public async embedStackblitz(tab: DemoTabData, container: string): Promise<void> {
    await this.stackblitz.embed(tab.template, tab.files, container);
  }

  public async openStackblitz(tab: DemoTabData): Promise<void> {
    await this.stackblitz.open(tab.template, tab.files);
  }

  public sideBySide(): void {
    this._sideBySideState = !this._sideBySideState;
  }

  /**
   * Side by side only works where there are exactly two tabs defined.
   */
  get sideBySideState(): boolean {
    if (this.tabs.length === 2) {
      return this._sideBySideState as boolean;
    }
    return false;
  }
}
