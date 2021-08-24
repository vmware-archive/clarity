import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'status-block',
  templateUrl: './status-block.component.html',
  styleUrls: ['./status-block.component.scss'],
})
export class StatusBlockComponent {
  @Input() eslint: boolean = true;
  @Input() angularFigma: string = '';
  @Input() coreFigma: string = '';
  @Input() coreVersion: string = '';
  @Input() angularVersion: string = 'v1';
  @Input() coreLink: string = '';
  @Input() coreStorybookLink: string = '';
  @Input() angularLink: string = '';

}
