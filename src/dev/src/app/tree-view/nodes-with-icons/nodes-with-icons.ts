/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';

@Component({
  selector: 'clr-nodes-with-icons-demo',
  styleUrls: ['../tree-view.demo.scss'],
  templateUrl: './nodes-with-icons.html',
})
export class NodesWithIconsDemo {
  rootDirectory: any[] = [
    {
      name: 'Some icons',
      icon: 'folder',
      expanded: true,
      files: [
        { icon: 'home', name: 'Home', active: true },
        { icon: 'calendar', name: 'Calendar', active: true },
        { icon: 'user', name: 'User', active: true },
        { icon: 'bell', name: 'Bell', active: false },
        { icon: 'image', name: 'Image', active: false },
        { icon: 'cloud', name: 'Cloud', active: false },
      ],
    },
    {
      name: 'Some more icons',
      icon: 'folder',
      expanded: false,
      files: [
        { icon: 'search', name: 'Search', active: false },
        { icon: 'event', name: 'Event', active: false },
        { icon: 'eye', name: 'Eye', active: false },
        { icon: 'success-standard', name: 'Success', active: false },
      ],
    },
  ];

  openFile(directoryName: string, fileName: string): void {
    for (const dir of this.rootDirectory) {
      if (directoryName === dir.name) {
        this.setFileActive(dir, fileName);
      } else {
        for (const file of dir.files) {
          file.active = false;
        }
      }
    }
  }

  setFileActive(dir: any, fileName: string) {
    for (const file of dir.files) {
      if (file.name === fileName) {
        file.active = true;
      } else {
        file.active = false;
      }
    }
  }
}
