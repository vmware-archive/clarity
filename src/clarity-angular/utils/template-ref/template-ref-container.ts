/*
 * Copyright (c) 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component, TemplateRef, ViewChild} from "@angular/core";

@Component({
    template: `
      <ng-template>
        <ng-content></ng-content>
      </ng-template>
    `,
})
export class TemplateRefContainer {
    @ViewChild(TemplateRef) template: TemplateRef<any>;
}
