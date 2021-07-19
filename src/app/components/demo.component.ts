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
    <ng-content></ng-content>

    <div style="display:flex; align-items: flex-start; justify-content: space-between;">
      <div *ngFor="let tab of tabs" style="width: 49.5%">
        <h5>{{ tab.name }}</h5>
        <div *ngFor="let file of tab.files | keyvalue">
          <sourcecode [src]="file.value" [language]="tab.language"></sourcecode>
        </div>
        <div id="{{ tab.id }}"></div>
        <button (click)="embedStackblitz(tab, tab.id)" class="btn btn-sm btn-link">
          <cds-icon shape="terminal"></cds-icon> Run
        </button>
        <button (click)="openStackblitz(tab)" class="btn btn-sm btn-link">
          <cds-icon shape="bolt"></cds-icon> StackBlitz
        </button>
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

  public async embedStackblitz(tab: DemoTabData, container: string | undefined): Promise<void> {
    await this.stackblitz.embed(tab.template, tab.files, container);
  }

  public async openStackblitz(tab: DemoTabData): Promise<void> {
    await this.stackblitz.open(tab.template, tab.files);
  }
}
