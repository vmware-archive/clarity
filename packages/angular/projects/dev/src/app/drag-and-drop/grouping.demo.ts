/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';
import { ClrDragEvent } from '@clr/angular';

const FILES = [
  { name: 'img_001.jpg', group: 'image-file' },
  { name: 'mov_001.mov', group: 'movie-file' },
  { name: 'aud_001.mp4', group: 'audio-file' },
];

@Component({
  selector: 'basic-droppable-demo',
  styleUrls: ['./drag-and-drop.demo.scss'],
  templateUrl: './grouping.demo.html',
})
export class GroupingDemo {
  files: any[];

  droppedImages: any[] = [];
  droppedMovies: any[] = [];
  droppedAudios: any[] = [];

  constructor() {
    this.files = FILES;
  }

  private moveItem(item: any, to: any[], from: any[]) {
    const indexInFiles = from.indexOf(item);
    if (indexInFiles > -1) {
      from.splice(indexInFiles, 1);
    }
    if (to.indexOf(item) === -1) {
      to.push(item);
    }
  }

  onDropImage(dragEvent: ClrDragEvent<any>) {
    this.moveItem(dragEvent.dragDataTransfer, this.droppedImages, this.files);
  }
  onDropMovie(dragEvent: ClrDragEvent<any>) {
    this.moveItem(dragEvent.dragDataTransfer, this.droppedMovies, this.files);
  }
  onDropAudio(dragEvent: ClrDragEvent<any>) {
    this.moveItem(dragEvent.dragDataTransfer, this.droppedAudios, this.files);
  }

  onDropBack(dragEvent: ClrDragEvent<any>) {
    if (this.droppedAudios.indexOf(dragEvent.dragDataTransfer) > -1) {
      this.moveItem(dragEvent.dragDataTransfer, this.files, this.droppedAudios);
    } else if (this.droppedMovies.indexOf(dragEvent.dragDataTransfer) > -1) {
      this.moveItem(dragEvent.dragDataTransfer, this.files, this.droppedMovies);
    } else if (this.droppedImages.indexOf(dragEvent.dragDataTransfer) > -1) {
      this.moveItem(dragEvent.dragDataTransfer, this.files, this.droppedImages);
    }
  }
}
