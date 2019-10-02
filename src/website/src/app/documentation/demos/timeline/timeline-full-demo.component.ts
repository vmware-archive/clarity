/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component } from '@angular/core';
import { ClarityDocComponent } from '../clarity-doc';

const code = {
  staticHorizontal: `
<ul class="clr-timeline">
  <li class="clr-timeline-step disabled">
    <div class="clr-timeline-step-header">11:59 am</div>
    <clr-icon shape="circle" aria-label="Not started"></clr-icon>
    <div class="clr-timeline-step-body">
      <span class="clr-timeline-step-title">Add KMS</span>
      <span class="clr-timeline-step-description">Root CA certificate requested.</span>
    </div>
  </li>
  <li class="clr-timeline-step">
    <div class="clr-timeline-step-header">11:59 am</div>
    <clr-icon shape="dot-circle" aria-current="true" aria-label="Current"></clr-icon>
    <div class="clr-timeline-step-body">
      <span class="clr-timeline-step-title">Add KMS</span>
      <span class="clr-timeline-step-description">
    Root CA certificate requested. Upload it to the KMS to complete the connection.
    <button class="btn btn-sm">Action</button>
  </span>
    </div>
  </li>
  <li class="clr-timeline-step">
    <div class="clr-timeline-step-header">11:59 am</div>
    <clr-spinner clrMedium aria-label="In progress">Fetching data</clr-spinner>
    <div class="clr-timeline-step-body">
      <span class="clr-timeline-step-title">Make vCenter trust KMS</span>
      <span class="clr-timeline-step-description">
    Root CA certificate requested. Upload it to the KMS to complete the connection. Third sentence is very long
    and very long.
  </span>
    </div>
  </li>
  <li class="clr-timeline-step">
    <div class="clr-timeline-step-header">11:59 am</div>
    <clr-icon shape="success-standard" aria-label="Completed"></clr-icon>
    <div class="clr-timeline-step-body">
      <span class="clr-timeline-step-title">Make KMS trust vCenter</span>
      <span class="clr-timeline-step-description">Upload it to the KMS to complete the connection. Third
    sentence.
    <button class="btn btn-sm btn-link">Action</button>
  </span>
    </div>
  </li>
  <li class="clr-timeline-step">
    <div class="clr-timeline-step-header">11:59 am</div>
    <clr-icon shape="error-standard" aria-label="Error"></clr-icon>
    <div class="clr-timeline-step-body">
      <span class="clr-timeline-step-title">Connected</span>
      <span class="clr-timeline-step-description">No. It's not connected.</span>
    </div>
  </li>
  </ul>`,
  staticVertical: `
  <ul class="clr-timeline clr-timeline-vertical">
    <li class="clr-timeline-step">
      <div class="clr-timeline-step-header">11:59 am</div>
      <clr-icon shape="circle" aria-label="Not started"></clr-icon>
      <div class="clr-timeline-step-body">
        <span class="clr-timeline-step-title">Add KMS</span>
        <span class="clr-timeline-step-description">Root CA certificate requested.</span>
      </div>
    </li>
    <li class="clr-timeline-step">
      <div class="clr-timeline-step-header">11:59 am</div>
      <clr-icon shape="dot-circle" aria-current="true" aria-label="Current"></clr-icon>
      <div class="clr-timeline-step-body">
        <span class="clr-timeline-step-title">Add KMS</span>
        <span class="clr-timeline-step-description">
          Root CA certificate requested. Upload it to the KMS to complete the connection.
          <!-- <img src="assets/placeholder_350x150.png" alt="Example of an Image in a Card" /> -->
          <img src="https://clarity.design/assets/images/documentation/cards/placeholder_350x150.png" alt="Example of an Image in a Card" />
        </span>
      </div>
    </li>
    <li class="clr-timeline-step">
      <span class="clr-timeline-step-header">11:59 am</span>
      <clr-spinner clrMedium aria-label="In progress">Fetching data</clr-spinner>
        <div class="clr-timeline-step-body">
        <span class="clr-timeline-step-title">Make vCenter trust KMS</span>
        <span class="clr-timeline-step-description">
          Root CA certificate requested. Upload it to the KMS to complete the connection. Third sentence is very long
          and very long.
        </span>
      </div>
    </li>
    <li class="clr-timeline-step">
      <div class="clr-timeline-step-header">11:59 am</div>
      <clr-icon shape="success-standard" aria-label="Completed"></clr-icon>
      <div class="clr-timeline-step-body">
        <span class="clr-timeline-step-title">Make KMS trust vCenter</span>
        <span class="clr-timeline-step-description">Upload it to the KMS to complete the connection. Third
          sentence.
          <button class="btn btn-sm">Refresh</button>
        </span>
      </div>
    </li>
    <li class="clr-timeline-step">
      <div class="clr-timeline-step-header"></div>
      <clr-icon shape="error-standard" aria-label="Error"></clr-icon>
      <div class="clr-timeline-step-body">
        <span class="clr-timeline-step-title">Connected</span>
        <span class="clr-timeline-step-description">No. It's not connected.</span>
      </div>
    </li>
  </ul>
  `,
  componentHorizontal: `
  <clr-timeline>
  <clr-timeline-step clrState="not-started">
    <clr-timeline-step-header>11:59 am</clr-timeline-step-header>
    <clr-timeline-step-title>Add KMS</clr-timeline-step-title>
    <clr-timeline-step-description>Root CA certificate requested.</clr-timeline-step-description>
  </clr-timeline-step>
  <clr-timeline-step clrState="current">
    <clr-timeline-step-header>11:59 am</clr-timeline-step-header>
    <clr-timeline-step-title>Add KMS</clr-timeline-step-title>
    <clr-timeline-step-description>
      Root CA certificate requested. Upload it to the KMS to complete the connection.
      <button class="btn btn-sm">Action</button>
    </clr-timeline-step-description>
  </clr-timeline-step>
  <clr-timeline-step class="gemini-ignore" clrState="processing">
    <clr-timeline-step-header>11:59 am</clr-timeline-step-header>
    <clr-timeline-step-title>Make vCenter trust KMS</clr-timeline-step-title>
    <clr-timeline-step-description>
      Root CA certificate requested. Upload it to the KMS to complete the connection. Third sentence is very long
      and very long.
    </clr-timeline-step-description>
  </clr-timeline-step>
  <clr-timeline-step clrState="success">
    <clr-timeline-step-header>11:59 am</clr-timeline-step-header>
    <clr-timeline-step-title>Make KMS trust vCenter</clr-timeline-step-title>
    <clr-timeline-step-description>Upload it to the KMS to complete the connection. Third
      sentence.
      <button class="btn btn-sm btn-link">Action</button>
    </clr-timeline-step-description>
  </clr-timeline-step>
  <clr-timeline-step clrState="error">
    <clr-timeline-step-header>11:59 am</clr-timeline-step-header>
    <clr-timeline-step-title>Connected</clr-timeline-step-title>
    <clr-timeline-step-description>No. It's not connected.</clr-timeline-step-description>
  </clr-timeline-step>
</clr-timeline>
`,
  componentVertical: `
  <clr-timeline clrLayout="vertical" style="width: 50%">
  <clr-timeline-step clrState="not-started">
    <clr-timeline-step-header>11:59 am</clr-timeline-step-header>
    <clr-timeline-step-title>Add KMS</clr-timeline-step-title>
    <clr-timeline-step-description>Root CA certificate requested.</clr-timeline-step-description>
  </clr-timeline-step>
  <clr-timeline-step clrState="current">
    <clr-timeline-step-header>11:59 am</clr-timeline-step-header>
    <clr-timeline-step-title>Add KMS</clr-timeline-step-title>
    <clr-timeline-step-description>
      Root CA certificate requested. Upload it to the KMS to complete the connection.
      <img src="assets/placeholder_350x150.png" alt="Example of an Image in a Card" />
    </clr-timeline-step-description>
  </clr-timeline-step>
  <clr-timeline-step class="gemini-ignore" clrState="processing">
    <clr-timeline-step-header>11:59 am</clr-timeline-step-header>
    <clr-timeline-step-title>Make vCenter trust KMS</clr-timeline-step-title>
    <clr-timeline-step-description>
      Root CA certificate requested. Upload it to the KMS to complete the connection. Third sentence is very long
      and very long.
    </clr-timeline-step-description>
  </clr-timeline-step>
  <clr-timeline-step clrState="success">
    <clr-timeline-step-header>11:59 am</clr-timeline-step-header>
    <clr-timeline-step-title>Make KMS trust vCenter</clr-timeline-step-title>
    <clr-timeline-step-description>Upload it to the KMS to complete the connection. Third
      sentence.
      <button class="btn btn-sm">Refresh</button>
    </clr-timeline-step-description>
  </clr-timeline-step>
  <clr-timeline-step clrState="error">
    <clr-timeline-step-header></clr-timeline-step-header>
    <clr-timeline-step-title>Connected</clr-timeline-step-title>
    <clr-timeline-step-description>No. It's not connected.</clr-timeline-step-description>
  </clr-timeline-step>
</clr-timeline>
`,
};

@Component({
  selector: 'clr-timeline-full-demo',
  templateUrl: './timeline-full-demo.component.html',
  host: {
    '[class.content-area]': 'true',
    '[class.dox-content-panel]': 'true',
  },
})
export class TimelineFullDemo extends ClarityDocComponent {
  staticHorizontal = code.staticHorizontal;
  staticVertical = code.staticVertical;
  componentHorizontal = code.componentHorizontal;
  componentVertical = code.componentVertical;
  constructor() {
    super('timeline');
  }
}
