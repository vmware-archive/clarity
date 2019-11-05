/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';

@Component({
  selector: 'clr-color-palette',
  styleUrls: ['./color-palette.demo.scss'],
  templateUrl: './color-palette.demo.html',
})
export class ColorPalette {
  oldPalettes = [
    {
      type: 'purple',
      colors: [
        { value: '#390256', text: 'light' },
        { value: '#50266b', text: 'light' },
        { value: '#660092', text: 'light' },
        { value: '#7620a3', text: 'light' },
        { value: '#853fb3', text: 'light' },
        { value: '#a065c6', text: 'dark' },
        { value: '#bb8cd9', text: 'dark' },
        { value: '#d5b3ec', text: 'dark' },
        { value: '#f0d9ff', text: 'dark' },
      ],
    },
    {
      type: 'actionBlue',
      colors: [
        { value: '#003666', text: 'light' },
        { value: '#004981', text: 'light' },
        { value: '#005c9b', text: 'light' },
        { value: '#0079B8', text: 'light', corePalette: true },
        { value: '#0094d2', text: 'dark' },
        { value: '#49afd9', text: 'dark' },
        { value: '#89cbdf', text: 'dark' },
        { value: '#a6d8e7', text: 'dark' },
        { value: '#c5e5ef', text: 'dark' },
        { value: '#e1f1f6', text: 'dark' },
      ],
    },
    {
      type: 'darkBlue',
      colors: [
        { value: '#002538', text: 'light' },
        { value: '#004a70', text: 'light' },
        { value: '#006a91', text: 'light' },
        { value: 'divider' },
        { value: '#d9e4ea', text: 'dark', corePalette: true },
      ],
    },
    {
      type: 'jewelGreen',
      colors: [
        { value: '#013d32', text: 'light' },
        { value: '#00594a', text: 'light' },
        { value: '#05866f', text: 'mid' },
        { value: '#00a98c', text: 'dark' },
        { value: '#00c0a2', text: 'dark' },
        { value: '#00d4b8', text: 'dark' },
        { value: '#50e3cd', text: 'dark' },
        { value: '#85eddd', text: 'dark' },
        { value: '#bcf4ec', text: 'dark' },
        { value: '#e0faf6', text: 'dark' },
      ],
    },
    {
      type: 'green',
      colors: [
        { value: '#173a00', text: 'light' },
        { value: '#1d5100', text: 'light' },
        { value: '#266900', text: 'light' },
        { value: '#2F8400', text: 'light', corePalette: true },
        { value: '#62a420', text: 'mid' },
        { value: '#60b515', text: 'dark' },
        { value: '#92cf5b', text: 'dark' },
        { value: '#b7df94', text: 'dark' },
        { value: '#dff0d0', text: 'dark' },
      ],
    },
    {
      type: 'yellowsAndOranges',
      colors: [
        { value: '#fac400', text: 'dark' },
        { value: '#ffdc0B', text: 'dark' },
        { value: '#ffe967', text: 'dark' },
        { value: '#fff899', text: 'dark' },
        { value: '#fffadc', text: 'dark' },
        { value: 'divider' },
        { value: '#a34200', text: 'light' },
        { value: '#c25400', text: 'mid' },
        { value: '#eb8d00', text: 'dark' },
        { value: '#feecb5', text: 'dark' },
      ],
    },
    {
      type: 'moreOranges',
      colors: [
        { value: '#e64120', text: 'dark' },
        { value: '#ff5500', text: 'dark' },
        { value: '#ff6f01', text: 'dark' },
        { value: '#ff9552', text: 'dark' },
        { value: '#ffb688', text: 'dark' },
        { value: '#ffd5ba', text: 'dark' },
      ],
    },
    {
      type: 'reds',
      colors: [
        { value: '#a32100', text: 'light' },
        { value: '#c92100', text: 'light', corePalette: true },
        { value: '#e12200', text: 'light' },
        { value: '#ebafa6', text: 'dark' },
        { value: '#f5dbd9', text: 'dark' },
      ],
    },
    {
      type: 'neutrals',
      colors: [
        { value: '#000000', text: 'light' },
        { value: '#313131', text: 'light' },
        { value: '#565656', text: 'light', corePalette: true },
        { value: '#737373', text: 'light' },
        { value: '#9a9a9a', text: 'dark' },
        { value: '#cccccc', text: 'dark' },
        { value: '#dddddd', text: 'dark' },
        { value: '#eeeeee', text: 'dark' },
        { value: '#fafafa', text: 'dark', corePalette: true },
        { value: '#ffffff', text: 'dark' },
      ],
    },
  ];
  clarityPalettes = [
    {
      name: 'neutral',
      weights: [
        { weight: 0, hsl: 'hsl(198, 0%, 100%)', on: 'hsl(198, 0%, 0%)' },
        { weight: 50, hsl: 'hsl(198, 0%, 98%)', on: 'hsl(198, 0%, 0%)' },
        { weight: 100, hsl: 'hsl(198, 0%, 95%)', on: 'hsl(198, 0%, 0%)' },
        { weight: 200, hsl: 'hsl(198, 0%, 93%)', on: 'hsl(198, 0%, 0%)' },
        { weight: 300, hsl: 'hsl(198, 0%, 87%)', on: 'hsl(198, 0%, 0%)' },
        { weight: 400, hsl: 'hsl(198, 0%, 80%)', on: 'hsl(198, 0%, 0%)' },
        { weight: 500, hsl: 'hsl(198, 0%, 60%)', on: 'hsl(198, 0%, 0%)' },
        { weight: 600, hsl: 'hsl(198, 0%, 45%)', on: 'hsl(198, 0%, 100%)' },
        { weight: 700, hsl: 'hsl(198, 0%, 34%)', on: 'hsl(198, 0%, 100%)' },
        { weight: 800, hsl: 'hsl(198, 0%, 27%)', on: 'hsl(198, 0%, 100%)' },
        { weight: 900, hsl: 'hsl(198, 0%, 19%)', on: 'hsl(198, 0%, 100%)' },
        { weight: 1000, hsl: 'hsl(198, 0%, 0%)', on: 'hsl(198, 0%, 100%)' },
      ],
    },
    {
      name: 'action',
      weights: [
        { weight: null, hsl: 'hsl(0, 0%, 100%)', on: 'hsl(198, 0%, 0%)' },
        { weight: 50, hsl: 'hsl(198, 54%, 92%)', on: 'hsl(198, 0%, 0%)' },
        { weight: 100, hsl: 'hsl(198, 57%, 85%)', on: 'hsl(198, 0%, 0%)' },
        { weight: 200, hsl: 'hsl(198, 58%, 78%)', on: 'hsl(198, 0%, 0%)' },
        { weight: 300, hsl: 'hsl(198, 57%, 71%)', on: 'hsl(198, 0%, 0%)' },
        { weight: 400, hsl: 'hsl(198, 66%, 56%)', on: 'hsl(198, 0%, 0%)' },
        { weight: 500, hsl: 'hsl(198, 100%, 41%)', on: 'hsl(198, 0%, 0%)' },
        { weight: 600, hsl: 'hsl(198, 100%, 36%)', on: 'hsl(198, 0%, 100%)' },
        { weight: 700, hsl: 'hsl(198, 100%, 34%)', on: 'hsl(198, 0%, 100%)' },
        { weight: 800, hsl: 'hsl(198, 100%, 27%)', on: 'hsl(198, 0%, 100%)' },
        { weight: 900, hsl: 'hsl(198, 100%, 24%)', on: 'hsl(198, 0%, 100%)' },
        { weight: 1000, hsl: 'hsl(198, 100%, 11%)', on: 'hsl(198, 0%, 100%)' },
      ],
    },
    {
      name: 'secondary-action',
      weights: [
        { weight: null, hsl: 'hsl(0, 0%, 100%)', on: 'hsl(198, 0%, 0%)' },
        { weight: 50, hsl: 'hsl(282, 100%, 95%)', on: 'hsl(198, 0%, 0%)' },
        { weight: 100, hsl: 'hsl(282, 59%, 87%)', on: 'hsl(198, 0%, 0%)' },
        { weight: 200, hsl: 'hsl(282, 51%, 78%)', on: 'hsl(198, 0%, 0%)' },
        { weight: 300, hsl: 'hsl(282, 46%, 70%)', on: 'hsl(198, 0%, 0%)' },
        { weight: 400, hsl: 'hsl(282, 44%, 62%)', on: 'hsl(198, 0%, 0%)' },
        { weight: 500, hsl: 'hsl(282, 43%, 54%)', on: 'hsl(198, 0%, 100%)' },
        { weight: 600, hsl: 'hsl(282, 50%, 45%)', on: 'hsl(198, 0%, 100%)' },
        { weight: 700, hsl: 'hsl(282, 69%, 37%)', on: 'hsl(198, 0%, 100%)' },
        { weight: 800, hsl: 'hsl(282, 100%, 29%)', on: 'hsl(198, 0%, 100%)' },
        { weight: 900, hsl: 'hsl(282, 100%, 24%)', on: 'hsl(198, 0%, 100%)' },
        { weight: 1000, hsl: 'hsl(282, 48%, 14%)', on: 'hsl(198, 0%, 100%)' },
      ],
    },
    {
      name: 'danger',
      weights: [
        { weight: null, hsl: 'hsl(0, 0%, 100%)', on: 'hsl(198, 0%, 0%)' },
        { weight: 50, hsl: 'hsl(14, 100%, 97%)', on: 'hsl(198, 0%, 0%)' },
        { weight: 100, hsl: 'hsl(14, 83%, 84%)', on: 'hsl(198, 0%, 0%)' },
        { weight: 200, hsl: 'hsl(14, 87%, 78%)', on: 'hsl(198, 0%, 0%)' },
        { weight: 300, hsl: 'hsl(14, 90%, 70%)', on: 'hsl(198, 0%, 0%)' },
        { weight: 400, hsl: 'hsl(14, 90%, 62%)', on: 'hsl(198, 0%, 0%)' },
        { weight: 500, hsl: 'hsl(14, 91%, 55%)', on: 'hsl(198, 0%, 0%)' },
        { weight: 600, hsl: 'hsl(14, 100%, 44%)', on: 'hsl(198, 0%, 0%)' },
        { weight: 700, hsl: 'hsl(14, 100%, 39%)', on: 'hsl(198, 0%, 100%)' },
        { weight: 800, hsl: 'hsl(14, 100%, 39%)', on: 'hsl(198, 0%, 100%)' },
        { weight: 900, hsl: 'hsl(14, 100%, 32%)', on: 'hsl(198, 0%, 100%)' },
        { weight: 1000, hsl: 'hsl(14, 100%, 20%)', on: 'hsl(198, 0%, 100%)' },
      ],
    },
    {
      name: 'warning',
      weights: [
        { weight: null, hsl: 'hsl(0, 0%, 100%)', on: 'hsl(198, 0%, 0%)' },
        { weight: 50, hsl: 'hsl(48, 100%, 95%)', on: 'hsl(198, 0%, 0%)' },
        { weight: 100, hsl: 'hsl(48, 97%, 85%)', on: 'hsl(198, 0%, 0%)' },
        { weight: 200, hsl: 'hsl(48, 100%, 69%)', on: 'hsl(198, 0%, 0%)' },
        { weight: 300, hsl: 'hsl(48, 100%, 52%)', on: 'hsl(198, 0%, 0%)' },
        { weight: 400, hsl: 'hsl(48, 98%, 51%)', on: 'hsl(198, 0%, 0%)' },
        { weight: 500, hsl: 'hsl(48, 100%, 49%)', on: 'hsl(198, 0%, 0%)' },
        { weight: 600, hsl: 'hsl(48, 100%, 46%)', on: 'hsl(198, 0%, 0%)' },
        { weight: 700, hsl: 'hsl(48, 100%, 44%)', on: 'hsl(198, 0%, 0%)' },
        { weight: 800, hsl: 'hsl(41, 100%, 41%)', on: 'hsl(198, 0%, 0%)' },
        { weight: 900, hsl: 'hsl(38, 100%, 38%)', on: 'hsl(198, 0%, 0%)' },
        { weight: 1000, hsl: 'hsl(31, 100%, 19%)', on: 'hsl(198, 0%, 100%)' },
      ],
    },
    {
      name: 'success',
      weights: [
        { weight: null, hsl: 'hsl(0, 0%, 100%)', on: 'hsl(198, 0%, 0%)' },
        { weight: 50, hsl: 'hsl(93, 52%, 88%)', on: 'hsl(198, 0%, 0%)' },
        { weight: 100, hsl: 'hsl(93, 58%, 75%)', on: 'hsl(198, 0%, 0%)' },
        { weight: 200, hsl: 'hsl(93, 76%, 49%)', on: 'hsl(198, 0%, 0%)' },
        { weight: 300, hsl: 'hsl(93, 77%, 44%)', on: 'hsl(198, 0%, 0%)' },
        { weight: 400, hsl: 'hsl(93, 79%, 40%)', on: 'hsl(198, 0%, 0%)' },
        { weight: 500, hsl: 'hsl(93, 67%, 38%)', on: 'hsl(198, 0%, 0%)' },
        { weight: 600, hsl: 'hsl(93, 85%, 32%)', on: 'hsl(198, 0%, 0%)' },
        { weight: 700, hsl: 'hsl(93, 100%, 26%)', on: 'hsl(198, 0%, 100%)' },
        { weight: 800, hsl: 'hsl(93, 100%, 21%)', on: 'hsl(198, 0%, 100%)' },
        { weight: 900, hsl: 'hsl(93, 100%, 16%)', on: 'hsl(198, 0%, 100%)' },
        { weight: 1000, hsl: 'hsl(93, 100%, 13%)', on: 'hsl(198, 0%, 100%)' },
      ],
    },
  ];

  fontColor(weight: number): {} {
    if (weight <= 500) {
      return 'hsl(198, 0%, 0%)';
    }
    return 'hsl(198, 0%, 100%)';
  }
}
