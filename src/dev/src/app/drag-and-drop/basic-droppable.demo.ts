/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';
import { ClrDragEvent } from '@clr/angular';

@Component({
  selector: 'basic-droppable-demo',
  styleUrls: ['./drag-and-drop.demo.scss'],
  templateUrl: './basic-droppable.demo.html',
})
export class BasicDroppableDemo {
  files: any[] = [{ name: 'img_001.jpg' }, { name: 'img_002.jpg' }, { name: 'img_003.jpg' }];

  droppedFiles: any[] = [];

  private moveItem(item: any, from: any[], to: any[]) {
    const indexInFiles = from.indexOf(item);
    if (indexInFiles > -1) {
      from.splice(indexInFiles, 1);
    }
    if (to.indexOf(item) === -1) {
      to.push(item);
    }
  }

  onDropToUpload(dragEvent: ClrDragEvent<any>) {
    console.log('dropped to upload');
    this.moveItem(dragEvent.dragDataTransfer, this.files, this.droppedFiles);
  }

  onDropBack(dragEvent: ClrDragEvent<any>) {
    console.log('dropped back');
    this.moveItem(dragEvent.dragDataTransfer, this.droppedFiles, this.files);
  }

  activeDemoVariant = 'basic-draggable';

  activateDemoVariant(event: any): void {
    this.activeDemoVariant = event.target.getAttribute('id');
  }
}
