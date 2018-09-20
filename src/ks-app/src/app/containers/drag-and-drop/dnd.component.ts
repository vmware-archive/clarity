/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';

import { Inventory } from '../data/inventory';
import { User } from '../data/user';

import {
  ClrDraggable,
  ClrDroppable,
  ClrIfDragged,
  ClrDragHandle,
  ClrDragEvent,
  ClrDraggableGhost,
  ClrDropToleranceInterface,
} from '@clr/angular';

const FILES = [
  { name: 'img_001.jpg', group: 'image-file' },
  { name: 'mov_001.mov', group: 'movie-file' },
  { name: 'aud_001.mp4', group: 'audio-file' },
];

@Component({ templateUrl: './dnd.component.html', providers: [Inventory] })
export class KSDragAndDrop {
  /**
   * @description
   * These exist so that the exported API from Clarity is tested when ks-app is compiled with --prod.
   */

  private aDraggable: ClrDraggable<any>;
  private aDroppable: ClrDroppable<any>;
  private aIfDragged: ClrIfDragged<any>;
  private aDragHandle: ClrDragHandle<any>;
  private aDragEvent: ClrDragEvent<any>;
  private aDraggableGhost: ClrDraggableGhost<any>;
  private aDropTolerance: ClrDropToleranceInterface;

  // END Clarity Data Entities

  /* DnD on Datagrid row*/
  users: User[];

  constructor(inventory: Inventory) {
    inventory.size = 10;
    inventory.reset();
    this.users = inventory.all;

    this.groupingFiles = FILES;
  }

  report($event: any) {
    console.log($event);
  }

  /* Basic Droppables */

  filesForDroppables: any[] = [{ name: 'img_001.jpg' }, { name: 'img_002.jpg' }, { name: 'img_003.jpg' }];

  droppedFiles: any[] = [];

  private moveItemDroppables(item: any, from: any[], to: any[]) {
    const indexInFiles = from.indexOf(item);
    if (indexInFiles > -1) {
      from.splice(indexInFiles, 1);
    }
    if (to.indexOf(item) === -1) {
      to.push(item);
    }
  }

  onDropToUploadDroppables(dragEvent: ClrDragEvent<any>) {
    console.log('dropped to upload');
    this.moveItemDroppables(dragEvent.dragDataTransfer, this.filesForDroppables, this.droppedFiles);
  }

  onDropBackDroppables(dragEvent: ClrDragEvent<any>) {
    console.log('dropped back');
    this.moveItemDroppables(dragEvent.dragDataTransfer, this.droppedFiles, this.filesForDroppables);
  }

  activeDemoVariant = 'basic-draggable';

  activateDemoVariant(event: any): void {
    this.activeDemoVariant = event.target.getAttribute('id');
  }

  /* DnD drop tolerance */

  filesForDropTolerance: any[] = [{ name: 'img_001.jpg' }, { name: 'img_002.jpg' }, { name: 'img_003.jpg' }];

  droppedFilesForDropTolerance: any[] = [];

  private moveItemForDropTolerance(item: any, from: any[], to: any[]) {
    const indexInFiles = from.indexOf(item);
    if (indexInFiles > -1) {
      from.splice(indexInFiles, 1);
    }
    if (to.indexOf(item) === -1) {
      to.push(item);
    }
  }

  onDropToUploadForDropTolerance(dragEvent: ClrDragEvent<any>) {
    this.moveItemForDropTolerance(
      dragEvent.dragDataTransfer,
      this.filesForDropTolerance,
      this.droppedFilesForDropTolerance
    );
  }

  onDropBackForDropTolerance(dragEvent: ClrDragEvent<any>) {
    this.moveItemForDropTolerance(
      dragEvent.dragDataTransfer,
      this.droppedFilesForDropTolerance,
      this.filesForDropTolerance
    );
  }

  tableADropTolerance: any = {};
  tableBDropTolerance: any = {};

  updateTableAField(updatedField: any): void {
    this.tableADropTolerance = { ...this.tableADropTolerance, ...updatedField };
  }

  updateTableBField(updatedField: any): void {
    this.tableBDropTolerance = { ...this.tableBDropTolerance, ...updatedField };
  }

  /* DnD Grouping */

  groupingFiles: any[];

  droppedImages: any[] = [];
  droppedMovies: any[] = [];
  droppedAudios: any[] = [];

  private moveItemForGrouping(item: any, to: any[], from: any[]) {
    const indexInFiles = from.indexOf(item);
    if (indexInFiles > -1) {
      from.splice(indexInFiles, 1);
    }
    if (to.indexOf(item) === -1) {
      to.push(item);
    }
  }

  onDropImageForGrouping(dragEvent: ClrDragEvent<any>) {
    this.moveItemForGrouping(dragEvent.dragDataTransfer, this.droppedImages, this.groupingFiles);
  }
  onDropMovieForGrouping(dragEvent: ClrDragEvent<any>) {
    this.moveItemForGrouping(dragEvent.dragDataTransfer, this.droppedMovies, this.groupingFiles);
  }
  onDropAudioForGrouping(dragEvent: ClrDragEvent<any>) {
    this.moveItemForGrouping(dragEvent.dragDataTransfer, this.droppedAudios, this.groupingFiles);
  }

  onDropBackForGrouping(dragEvent: ClrDragEvent<any>) {
    if (this.droppedAudios.indexOf(dragEvent.dragDataTransfer) > -1) {
      this.moveItemForGrouping(dragEvent.dragDataTransfer, this.groupingFiles, this.droppedAudios);
    } else if (this.droppedMovies.indexOf(dragEvent.dragDataTransfer) > -1) {
      this.moveItemForGrouping(dragEvent.dragDataTransfer, this.groupingFiles, this.droppedMovies);
    } else if (this.droppedImages.indexOf(dragEvent.dragDataTransfer) > -1) {
      this.moveItemForGrouping(dragEvent.dragDataTransfer, this.groupingFiles, this.droppedImages);
    }
  }
}
