/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';

@Component({
  selector: 'clr-button-group-projection-update-test-1-demo',
  templateUrl: './projection-update-test-1.html',
  styleUrls: ['../../button-group.demo.scss'],
})
export class ProjectionUpdateTest1Demo {
  show: boolean = true;

  toggleShow(): void {
    this.show = !this.show;
  }

  show1: boolean = true;

  toggleShow1(): void {
    this.show1 = !this.show1;
  }

  show2: boolean = true;

  toggleShow2(): void {
    this.show2 = !this.show2;
  }

  show3: boolean = true;

  toggleShow3(): void {
    this.show3 = !this.show3;
  }

  show4: boolean = true;

  toggleShow4(): void {
    this.show4 = !this.show4;
  }

  show5: boolean = true;

  toggleShow5(): void {
    this.show5 = !this.show5;
  }
}
