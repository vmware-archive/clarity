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
