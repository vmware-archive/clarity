import { Component, ViewChild } from '@angular/core';
import { ClrWizard } from '@clr/angular';

@Component({
  selector: 'app-wizard-demo',
  templateUrl: './wizard-demo.component.html',
})
export class WizardDemoComponent {
  @ViewChild('wizard') wizard: ClrWizard | undefined;
  open = false;
}
