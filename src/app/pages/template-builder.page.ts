/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component } from '@angular/core';
import { StackblitzService } from '../components/stackblitz/stackblitz.service';
import { TemplateDetails, TemplateDetailsService } from '../services/template-details.service';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

// Icons;
import {
  ClarityIcons,
  scrollIcon,

} from '@cds/core/icon';

ClarityIcons.addIcons(scrollIcon);


@Component({
  selector: 'app-home',
  providers: [StackblitzService, TemplateDetailsService],
  template: `
  <h1 cds-text="heading" cds-layout="m-b:lg m-t:lg">Example Builder</h1>

  <p>
    Generate a demo project from a already existing template to test and learn how
    some components works in easy steps. Select a component based on Clarity Core
    or Clarity Angular, pick a version of the package and generate a demo StackBlitz project.
  </p>

  <form clrForm clrLayout="vertical">
    <div class="clr-row">

      <div class="clr-col-4">
        <h3>Step 1</h3>
        <p>Select a template from the list below.</p>

        <clr-combobox-container>
          <label>Clarity Template</label>
          <clr-combobox
            [(ngModel)]="selectedTemplate"
            name="selectedTemplate"
            (clrInputChange)="fetchTemplates($event)"
            (clrOpenChange)="$event ? fetchTemplates() : null"
            required
            >
            <clr-options>
              <clr-option *clrOptionItems="let template of asyncData | async; field:'key'" [clrValue]="template">
                <cds-icon shape="scroll"></cds-icon> <strong> {{template.key}}</strong> <br/>
                {{ template.description }} ({{ template.template }})
              </clr-option>
            </clr-options>
          </clr-combobox>
        </clr-combobox-container>
      </div>

      <div class="clr-col-4">
        <h3>Step 2</h3>
        <p>
          Choose from the list of versions to base the template on.
        </p>

        <clr-select-container>
          <label>Clarity Version</label>
          <select clrSelect name="selectedVersion" [(ngModel)]="selectedVersion">
            <option *ngFor="let version of supportedVersions" value="{{ version }}">v{{ version }}</option>
          </select>
        </clr-select-container>

      </div>
      <div class="clr-col-4">
        <h3>Step 3</h3>
        <p>Preview</p>

        <div *ngIf="selectedTemplate">
          <p>
            Below is example of the template you selected. You can open it inside StackBlitz and
            edit the code and see how the changes will effect it.
          </p>
          <p>
            {{selectedTemplate.name}} - {{ selectedTemplate.description }}
          </p>
          <div *ngFor="let file of selectedTemplate.files | keyvalue">
            <sourcecode [src]="file.value + ''" [language]="'ts'"></sourcecode>
          </div>

          <button (click)="openStackblitz(selectedTemplate)" class="btn btn-primary">
            <cds-icon shape="bolt"></cds-icon> Open in StackBlitz
          </button>
        </div>

        <div *ngIf="!selectedTemplate">
          <clr-alert [clrAlertType]="'info'" [clrAlertClosable]="false">
              <clr-alert-item>
                  <span class="alert-text">
                      No template is selected, yet.
                  </span>
              </clr-alert-item>
          </clr-alert>
        </div>

      </div>
    </div>
  </form>
  `,
})
export class TemplateBuilderPage {

  selectedVersion: string;
  supportedVersions: string[] = []

  templateData: TemplateDetails[];
  selectedTemplate: Record<string, TemplateDetails> | undefined;
  asyncData: Observable<any> = new Observable();

  constructor(private stackblitz: StackblitzService, private templateDataService: TemplateDetailsService) {
    // Convert Object to Array
    this.templateData = Object.entries(templateDataService.getDetails())
      .map(([key, value]) => ({ key, ...value }));

    this.supportedVersions = this.templateDataService.getVersions();
    this.selectedVersion = this.supportedVersions[0];
  }

  public fetchTemplates(search: string = ''): void {
    const query = search.toLowerCase();
    this.asyncData = of(this.templateData).pipe(map((data: any) => {
      return data.filter((template: TemplateDetails) => {
        return (
          (template.key || '').includes(query)
          || ((template.description).toLowerCase()).includes(query)
        );
      });
    }));
  }

  public async openStackblitz(template: any): Promise<void> {
    await this.stackblitz.open(template.template, template.files);
  }
}
