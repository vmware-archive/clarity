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

// Generate Preview IDs
let PreviewID = 0;

@Component({
  selector: 'demo',
  template: `
    <div cds-layout="m-b:md">
      <ng-content></ng-content>
    </div>

    <div cds-layout="grid gap:lg m-b:xl">
      <div *ngFor="let tab of tabs" [attr.cds-layout]="'col:12 col@sm:' + (tabs.length === 1 ? '12' : '6')">
        <p cds-text="message">
          {{ tab.name }}
          <button (click)="openStackblitz(tab)" class="btn btn-sm btn-link">
            <cds-icon shape="bolt"></cds-icon> View in StackBlitz
          </button>
        </p>
        <div *ngFor="let file of tab.files | keyvalue">
          <sourcecode [src]="file.value" [language]="tab.language || 'ts'"></sourcecode>
        </div>
      </div>
    </div>
  `,
  providers: [StackblitzService],
})
export class Demo {
  inOverflow = true;

  @Input('tabs') tabs: DemoTabData[] = [];

  constructor(private stackblitz: StackblitzService) {}

  ngOnInit(): void {
    if (Array.isArray(this.tabs)) {
      // auto attach unique id for every tab - later used for embedding the preview
      this.tabs = this.tabs.map(tab => {
        tab.id = this.generateId();
        return tab;
      });
    }
  }

  /**
   * Generate hash key for attaching preview container
   *
   * @returns number
   */
  public generateId(): string {
    return PreviewID++ + '';
  }

  public async openStackblitz(tab: DemoTabData): Promise<void> {
    await this.stackblitz.open(tab.template, tab.files);
  }
}
