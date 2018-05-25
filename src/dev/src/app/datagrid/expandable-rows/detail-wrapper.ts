/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';

@Component({
  selector: 'detail-wrapper',
  template: `
        <clr-dg-row-detail [clrDgReplace]="true">
            <clr-dg-cell>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</clr-dg-cell>
            <clr-dg-cell>Proin in neque in ante placerat mattis id sed quam.</clr-dg-cell>
            <clr-dg-cell>Proin rhoncus lacus et tempor dignissim.</clr-dg-cell>
            <clr-dg-cell>Vivamus sem quam, pellentesque aliquet suscipit eget, pellentesque sed arcu.</clr-dg-cell>
            <clr-dg-cell>Vivamus in dui lectus. Suspendisse cursus est ac nisl imperdiet viverra.</clr-dg-cell>
        </clr-dg-row-detail>
    `,
})
export class DetailWrapper {}
