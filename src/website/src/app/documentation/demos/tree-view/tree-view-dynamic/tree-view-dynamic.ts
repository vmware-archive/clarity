/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, Input } from '@angular/core';

const EXAMPLE_HTML = `
<clr-tree>
  <clr-tree-node *ngFor="let directory of rootDirectory" [(clrExpanded)]="directory.expanded">
      <clr-icon [attr.shape]="directory.icon"></clr-icon>
      {{directory.name}}
      <clr-tree-node *ngFor="let file of directory.files">
          <button
                  (click)="openFile(directory.name, file.name)"
                  class="clr-treenode-link"
                  [class.active]="file.active">
              <clr-icon [attr.shape]="file.icon"></clr-icon>
              {{file.name}}
          </button>
      </clr-tree-node>
  </clr-tree-node>
</clr-tree>
`;

const EXAMPLE_TS = `
    rootDirectory: any[] = [
        {
            name: "Applications",
            icon: "folder",
            expanded: true,
            files: [
                {
                    icon: "calendar",
                    name: "Calendar",
                    active: true
                },
                {
                    icon: "line-chart",
                    name: "Charts",
                    active: false
                },
                {
                    icon: "dashboard",
                    name: "Dashboard",
                    active: false
                },
                {
                    icon: "map",
                    name: "Maps",
                    active: false
                },
                ...
            ]
        },
        {
            name: "Files",
            icon: "folder",
            expanded: false,
            files: [
                {
                    icon: "file",
                    name: "Cover Letter.doc",
                    active: false
                },
                ...
            ]
        },
        {
            name: "Images",
            icon: "folder",
            expanded: false,
            files: [
                {
                    icon: "image",
                    name: "Screenshot.png",
                    active: false
                },
                ...
            ]
        }
    ];
    
    openFile(directoryName: string, fileName: string) {
        ...
        ...
    }
`;

@Component({
  selector: 'clr-tree-view-dynamic-demo',
  // Note the .css extension here, not .scss. That's the best we can have at the moment.
  styleUrls: ['../tree-view.demo.scss'],
  templateUrl: './tree-view-dynamic.html',
})
export class TreeViewDynamicDemo {
  @Input('clrDemoShowCode') showCode = false;
  @Input('clrDemoShowHalf') showHalf = false;

  exampleHtml = EXAMPLE_HTML;
  exampleTs = EXAMPLE_TS;

  rootDirectory: any[] = [
    {
      name: 'Applications',
      icon: 'folder',
      expanded: true,
      files: [
        {
          icon: 'calendar',
          name: 'Calendar',
          active: true,
        },
        {
          icon: 'line-chart',
          name: 'Charts',
          active: false,
        },
        {
          icon: 'dashboard',
          name: 'Dashboard',
          active: false,
        },
        {
          icon: 'map',
          name: 'Maps',
          active: false,
        },
        {
          icon: 'email',
          name: 'Mail',
          active: false,
        },
        {
          icon: 'bar-chart',
          name: 'Numbers',
          active: false,
        },
        {
          icon: 'tasks',
          name: 'Tasks',
          active: false,
        },
        {
          icon: 'flag',
          name: 'Reminders',
          active: false,
        },
      ],
    },
    {
      name: 'Files',
      icon: 'folder',
      expanded: false,
      files: [
        {
          icon: 'file',
          name: 'Cover Letter.doc',
          active: false,
        },
        {
          icon: 'file',
          name: 'Flyer.doc',
          active: false,
        },
        {
          icon: 'file',
          name: 'Resume.doc',
          active: false,
        },
        {
          icon: 'file',
          name: 'Notes.txt',
          active: false,
        },
      ],
    },
    {
      name: 'Images',
      icon: 'folder',
      expanded: false,
      files: [
        {
          icon: 'image',
          name: 'Screenshot.png',
          active: false,
        },
        {
          icon: 'image',
          name: 'Pic.png',
          active: false,
        },
        {
          icon: 'image',
          name: 'Portfolio.jpg',
          active: false,
        },
      ],
    },
  ];

  openFile(directoryName, fileName): void {
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
