/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component, HostBinding } from '@angular/core';
import { ProgBarExample } from './progbar-example';
import { timer } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'clr-progress-bar-story-demo',
  template: `
    <p style="margin-top: 0">
      <strong>{{ storyProgressBar.title }}</strong>
    </p>
    <div class="story-message" style="margin-bottom: 0.5rem">
      <p *ngIf="storyProgressBar.value <= 25">
        <clr-icon shape="cog" size="24"></clr-icon> Configuring the system
        <clr-icon shape="ellipsis-horizontal" size="24"></clr-icon>
      </p>
      <p *ngIf="storyProgressBar.value > 25 && storyProgressBar.value <= 50">
        <clr-icon shape="install" size="24"></clr-icon> Installing the system
        <clr-icon shape="ellipsis-horizontal" size="24"></clr-icon>
      </p>
      <p *ngIf="storyProgressBar.value > 50 && storyProgressBar.value <= 75">
        <clr-icon shape="download-cloud" size="24"></clr-icon> Updating the system
        <clr-icon shape="ellipsis-horizontal" size="24"></clr-icon>
      </p>
      <p *ngIf="storyProgressBar.value > 75 && storyProgressBar.value < 100">
        <clr-icon shape="step-forward-2" size="24"></clr-icon> Starting the system
        <clr-icon shape="ellipsis-horizontal" size="24"></clr-icon>
      </p>
      <p *ngIf="storyProgressBar.value == 100">
        <clr-icon shape="success-standard" size="24"></clr-icon> The process is done. The system is ready.
      </p>
    </div>
    <div [ngClass]="storyProgressBar.cssClassnames()">
      <progress
        value="{{ storyProgressBar.value }}"
        max="100"
        [attr.data-displayval]="storyProgressBar.value + '%'"
      ></progress>
    </div>
  `,
})
export class ProgressBarStoryDemo {
  storyProgressBar: ProgBarExample;
  storyTime;

  constructor() {
    this.storyProgressBar = new ProgBarExample('', 'Progress example');
    this.storyTime = timer(7500, 7500).pipe(take(10));
  }

  @HostBinding('style.width.%') width = 100;

  ngOnInit() {
    this.storyProgressBar.start();
    this.storyTime.subscribe(() => {
      this.tellStoryAgain();
    });
  }

  tellStoryAgain() {
    if (this.storyProgressBar.isFinished()) {
      this.storyProgressBar.start();
    }
  }
}
