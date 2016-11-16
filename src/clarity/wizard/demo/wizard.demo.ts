/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {Component, ViewEncapsulation} from "@angular/core";

@Component({
   selector: "clr-wizard-demo",
   styleUrls: ["./wizard.demo.css"],
   template: `
      <h2>Wizard</h2>
      <ul>
         <li><a [routerLink]="['./static']">Static style</a></li>
         <li><a [routerLink]="['./angular']">Angular component</a></li>
      </ul>
      <router-outlet></router-outlet>
   `,
   encapsulation: ViewEncapsulation.None
})
export class WizardDemo {}
