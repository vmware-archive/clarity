

import { Directive, Input } from '@angular/core';
import { BaseCdsDirective } from './cdc-base';

@Directive({ selector: 'cdc-component-status' })
export class CdcComponentStatus extends BaseCdsDirective {
  get name() { return this.element['name']; }
  @Input() set name(value) { this.element['name'] = value; }

  get description() { return this.element['description']; }
  @Input() set description(value) { this.element['description'] = value; };

}