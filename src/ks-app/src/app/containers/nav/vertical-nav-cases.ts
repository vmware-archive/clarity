/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
export class VerticalNavCases {
  basicMenu = {
    title: 'Basic',
    items: [
      { label: 'Music Note Text' },
      { label: 'Bug Text' },
      { label: 'Bolt Text' },
      { label: 'Edit has a long text that should overflow' },
      { label: 'Hourglass Text' },
      { label: 'Happy Face Text' },
      { label: 'Flame Text' },
      { label: 'Thermometer Text' },
      { label: 'Lightbulb Text' },
    ],
  };

  iconMenu = {
    title: 'With icons',
    items: [
      { label: 'Music Note Text', icon: 'music-note' },
      { label: 'Bug has a long text that should overflow', icon: 'bug' },
      { label: 'Bolt Text', icon: 'bolt' },
      { label: 'Edit Text', icon: 'edit' },
      { label: 'Hourglass Text', icon: 'hourglass' },
      { label: 'Happy Face Text', icon: 'happy-face' },
      { label: 'Flame Text', icon: 'flame' },
      { label: 'Thermometer Text', icon: 'thermometer' },
      { label: 'Lightbulb Text', icon: 'lightbulb' },
    ],
  };

  allNestedMenu = {
    title: 'When all items have nested items',
    items: this.basicMenu.items.map(item => {
      const newItem = Object.create(item);
      newItem.children = this.basicMenu.items;
      return newItem;
    }),
  };

  partiallyNestedMenu = {
    title: 'When some items have nested items',
    items: this.basicMenu.items.map((item, index) => {
      const newItem = Object.create(item);
      if (index < 4) {
        newItem.children = this.basicMenu.items;
      }
      return newItem;
    }),
  };

  allNestedIconMenu = {
    title: 'When all items with icon have nested items',
    items: this.iconMenu.items.map(item => {
      const newItem = Object.create(item);
      newItem.children = this.basicMenu.items;
      return newItem;
    }),
    hasIcons: true,
  };

  partiallyNestedIconMenu = {
    title: 'When some items with icon have nested items',
    items: this.iconMenu.items.map((item, index) => {
      const newItem = Object.create(item);
      if (index < 4) {
        newItem.children = this.basicMenu.items;
      }
      return newItem;
    }),
    hasIcons: true,
  };

  nonCollapsedMenus = [
    this.basicMenu,
    this.iconMenu,
    this.allNestedMenu,
    this.partiallyNestedMenu,
    this.allNestedIconMenu,
    this.partiallyNestedIconMenu,
  ];
}
