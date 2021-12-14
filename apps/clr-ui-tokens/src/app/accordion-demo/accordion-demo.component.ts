import { Component } from '@angular/core';

@Component({
  selector: 'app-accordion-demo',
  templateUrl: './accordion-demo.component.html',
  styleUrls: ['./accordion-demo.component.scss'],
})
export class AccordionDemoComponent {
  stepOpen = true;
  disableThirdPanel = true;

  change(event: any) {
    console.log('Accordion Changed', event);
  }
}
