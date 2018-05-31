/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component, ViewChild } from '@angular/core';
import { ClrWizard } from '../wizard';

@Component({
  template: `
        <clr-wizard #wizard
            [clrWizardOpen]="open"
            (clrWizardOpenChange)="onOpenChange()"
            [clrWizardSize]="mySize"
            (clrWizardCurrentPageChanged)="handleCurrentChange()"
            (clrWizardOnNext)="handleOnNext()"
            (clrWizardOnPrevious)="handleOnPrevious()"
            (clrWizardOnCancel)="handleOnCancel()"
            (clrWizardOnFinish)="handleOnFinish()"
            [clrWizardPreventDefaultCancel]="stopCancel">

            <clr-wizard-title>{{ projectedTitle }}</clr-wizard-title>

            <clr-wizard-button [type]="'cancel'">Cancel</clr-wizard-button>
            <clr-wizard-button [type]="'previous'">{{ projectedButton }}</clr-wizard-button>
            <clr-wizard-button [type]="'next'">Next</clr-wizard-button>
            <clr-wizard-button [type]="'finish'">Fait Accompli</clr-wizard-button>

            <clr-wizard-page (clrWizardPageOnLoad)="firstPageLoad()">
                <ng-template clrPageTitle>Longer Title for Page 1</ng-template>
                <p>Content for step 1</p>
            </clr-wizard-page>
            <clr-wizard-page (clrWizardPageOnLoad)="handleOnLoad()">
                <ng-template clrPageTitle>{{ projectedPageTitle }}</ng-template>
                <p class="lazy-content">{{lazyLoadContent}}</p>
            </clr-wizard-page>
            <clr-wizard-page *ngIf="showExtraPage">
                <ng-template clrPageTitle>Sneaksy Extra Pages!</ng-template>
                <p>Extra page!</p>
            </clr-wizard-page>
            <clr-wizard-page (clrWizardPageCustomButton)="customFinish()">
                <ng-template clrPageTitle>Title for Page 3</ng-template>
                <p>{{ projectedContent }}</p>
                <ng-template clrPageButtons>
                    <clr-wizard-button [type]="'custom-finish'">{{ projectedCustomButton }}</clr-wizard-button>
                </ng-template>
            </clr-wizard-page>
        </clr-wizard>
    `,
})
export class TemplateApiWizardTestComponent {
  @ViewChild('wizard') wizard: ClrWizard;
  mySize: string;
  projectedTitle = 'My Great Title';
  projectedPageTitle = 'Title for Page 2';
  open: boolean = true;
  lazyLoadContent: string = 'Loading';
  projectedContent = 'Projection Projection';
  projectedButton = 'Click Me';
  projectedCustomButton = 'Custom';
  showExtraPage = false;
  stopCancel = false;

  customFinish(): void {
    this.wizard.finish(false);
  }

  doLazyLoad(): void {
    setTimeout(() => {
      this.lazyLoadContent = 'Content loaded!';
    });
  }

  _openChange = 0;
  onOpenChange(): void {
    this.open = this.wizard._open;
    this._openChange++;
  }

  _pagesLoaded = 0;
  handleOnLoad(): void {
    this._pagesLoaded++;
  }

  _firstPageLoaded = 0;
  firstPageLoad(): void {
    this._firstPageLoaded++;
  }

  _currentPageChanged = 0;
  handleCurrentChange(): void {
    this._currentPageChanged++;
  }

  _movedForward = 0;
  handleOnNext(): void {
    this._movedForward++;
  }

  _movedBackward = 0;
  handleOnPrevious(): void {
    this._movedBackward++;
  }

  _cancelled = 0;
  handleOnCancel(): void {
    this._cancelled++;
  }

  _finished = 0;
  handleOnFinish(): void {
    this._finished++;
  }
}
