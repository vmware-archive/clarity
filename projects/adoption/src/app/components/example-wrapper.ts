import { Component, Input } from '@angular/core';

@Component({
  selector: 'example-wrapper',
  template: `
    <ng-content></ng-content>
    <div *ngIf="component">
      <h6>Demo</h6>
      <embed-component [src]="component"></embed-component>
    </div>
    <div *ngIf="code">
      <h6>Code</h6>
      <clr-tabs>
        <clr-tab *ngFor="let file of files">
          <button clrTabLink>{{ getFile(file) }}</button>
          <clr-tab-content *clrIfActive>
            <sourcecode [src]="file"></sourcecode>
          </clr-tab-content>
        </clr-tab>
      </clr-tabs>
    </div>
  `,
})
export class ExampleWrapper {
  @Input('code') code: any;
  @Input('component') component: any;

  files = [];

  ngOnInit() {
    if (!Array.isArray(this.code)) {
      this.files.push(this.code);
    } else {
      this.files = this.code;
    }
  }

  getFile(src) {
    return src.split('/').pop();
  }
}
