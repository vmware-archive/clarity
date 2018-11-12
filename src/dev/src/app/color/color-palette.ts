/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
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
  palettes = [
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
        { value: '#0079B8', text: 'mid', corePalette: true },
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
        { value: '#ffdc0b', text: 'dark' },
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
        { value: '#c92100', text: 'light' },
        { value: '#e12200', text: 'light', corePalette: true },
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
}
