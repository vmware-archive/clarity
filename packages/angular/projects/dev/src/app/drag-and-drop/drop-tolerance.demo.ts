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
  templateUrl: './drop-tolerance.demo.html',
})
export class DropToleranceDemo {
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
    this.moveItem(dragEvent.dragDataTransfer, this.files, this.droppedFiles);
  }

  onDropBack(dragEvent: ClrDragEvent<any>) {
    this.moveItem(dragEvent.dragDataTransfer, this.droppedFiles, this.files);
  }

  tableADropTolerance: any = {};
  tableBDropTolerance: any = {};

  updateTableAField(updatedField: any): void {
    this.tableADropTolerance = { ...this.tableADropTolerance, ...updatedField };
  }

  updateTableBField(updatedField: any): void {
    this.tableBDropTolerance = { ...this.tableBDropTolerance, ...updatedField };
  }
}
