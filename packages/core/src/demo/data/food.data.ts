/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { DemoData } from './interfaces.js';

export const food: DemoData = {
  grid: {
    label: 'Menu Options',
    rowActions: [
      { label: 'Order', value: 'order' },
      { label: 'Prepare', value: 'prepare' },
    ],
    columns: [
      { id: 1, label: 'Type' },
      { id: 2, label: 'Origin' },
      { id: 4, label: 'Primary' },
      { id: 8, label: 'Calories', suffix: 'c' },
      { id: 16, label: 'Rating' },
    ],
    rows: [
      {
        id: 'Bakmi',
        cells: [{ value: 'Bakmi' }, { value: 'Indonesia' }, { value: 'Wheat' }, { value: 360 }, { value: 8 }],
      },
      {
        id: 'Chūka men',
        cells: [{ value: 'Chūka men' }, { value: 'Japan' }, { value: 'Wheat' }, { value: 369 }, { value: 9 }],
      },
      {
        id: 'Kesme',
        cells: [{ value: 'Kesme' }, { value: 'Central Asia' }, { value: 'Wheat' }, { value: 180 }, { value: 7 }],
      },
      {
        id: 'Kalguksu',
        cells: [{ value: 'Kalguksu' }, { value: 'Korea' }, { value: 'Wheat' }, { value: 395 }, { value: 7 }],
      },
      {
        id: 'Lamian',
        cells: [{ value: 'Lamian' }, { value: 'China' }, { value: 'Wheat' }, { value: 350 }, { value: 9 }],
      },
      {
        id: 'Mee pok',
        cells: [{ value: 'Mee pok' }, { value: 'Southeast Asia' }, { value: 'Wheat' }, { value: 383 }, { value: 8 }],
      },
      {
        id: 'Pasta',
        cells: [{ value: 'Pasta' }, { value: 'Italy' }, { value: 'Wheat' }, { value: 212 }, { value: 9 }],
      },
      {
        id: 'Reshte',
        cells: [{ value: 'Reshte' }, { value: 'Central Asia' }, { value: 'Wheat' }, { value: 389 }, { value: 8 }],
      },
      {
        id: 'Sōmen',
        cells: [{ value: 'Sōmen' }, { value: 'Japan' }, { value: 'Wheat' }, { value: 203 }, { value: 8 }],
      },
      {
        id: 'Thukpa',
        cells: [{ value: 'Thukpa' }, { value: 'Tibet' }, { value: 'Wheat' }, { value: 439 }, { value: 9 }],
      },
      { id: 'Udon', cells: [{ value: 'Udon' }, { value: 'Japan' }, { value: 'Wheat' }, { value: 190 }, { value: 8 }] },
      {
        id: 'Kishimen',
        cells: [{ value: 'Kishimen' }, { value: 'Japan' }, { value: 'Wheat' }, { value: 190 }, { value: 7 }],
      },
      {
        id: 'Bánh phở',
        cells: [{ value: 'Bánh phở' }, { value: 'Vietnam' }, { value: 'Rice' }, { value: 141 }, { value: 7 }],
      },
      {
        id: 'Hé fěn',
        cells: [{ value: 'Hé fěn' }, { value: 'South Asia' }, { value: 'Rice' }, { value: 110 }, { value: 8 }],
      },
      {
        id: 'Bee hoon',
        cells: [{ value: 'Bee hoon' }, { value: 'Indonesia' }, { value: 'Rice' }, { value: 294 }, { value: 9 }],
      },
      { id: 'Sevai', cells: [{ value: 'Sevai' }, { value: 'India' }, { value: 'Rice' }, { value: 221 }, { value: 8 }] },
      {
        id: 'Idiyappam',
        cells: [{ value: 'Idiyappam' }, { value: 'India' }, { value: 'Rice' }, { value: 130 }, { value: 6 }],
      },
      {
        id: 'Mixian',
        cells: [{ value: 'Mixian' }, { value: 'China' }, { value: 'Rice' }, { value: 117 }, { value: 7 }],
      },
      {
        id: 'Khanom chin',
        cells: [{ value: 'Khanom chin' }, { value: 'Thailand' }, { value: 'Rice' }, { value: 220 }, { value: 8 }],
      },
      { id: 'Makguksu', cells: [{ value: 'Makguksu' }, { value: 'Korea' }, { value: 'Buckwheat' }, { value: 198 }] },
      {
        id: 'Naengmyeon',
        cells: [{ value: 'Naengmyeon' }, { value: 'Korea' }, { value: 'Buckwheat' }, { value: 500 }, { value: 9 }],
      },
      {
        id: 'Soba',
        cells: [{ value: 'Soba' }, { value: 'Japan' }, { value: 'Buckwheat' }, { value: 113 }, { value: 7 }],
      },
      {
        id: 'Pizzoccheri',
        cells: [{ value: 'Pizzoccheri' }, { value: 'Italy' }, { value: 'Buckwheat' }, { value: 342 }, { value: 8 }],
      },
      { id: 'Youmian', cells: [{ value: 'Youmian' }, { value: 'China' }, { value: 'Egg' }, { value: 475 }] },
      {
        id: 'Lochshen',
        cells: [{ value: 'Lochshen' }, { value: 'Eastern Europe' }, { value: 'Egg' }, { value: 330 }, { value: 8 }],
      },
      { id: 'Kesme', cells: [{ value: 'Kesme' }, { value: 'Turkey' }, { value: 'Egg' }, { value: 172 }, { value: 9 }] },
      {
        id: 'Spätzle',
        cells: [{ value: 'Spätzle' }, { value: 'Germany' }, { value: 'Egg' }, { value: 206 }, { value: 8 }],
      },
      {
        id: 'Acorn',
        cells: [{ value: 'Acorn' }, { value: 'Korea' }, { value: 'Acorn' }, { value: 390 }, { value: 9 }],
      },
      {
        id: 'Olchaeng-i guksu',
        cells: [{ value: 'Olchaeng-i guksu' }, { value: 'Korea' }, { value: 'Corn' }, { value: 475 }, { value: 7 }],
      },
      {
        id: 'Cellophane',
        cells: [{ value: 'Cellophane' }, { value: 'China' }, { value: 'Mung bean' }, { value: 161 }, { value: 7 }],
      },
      {
        id: 'Chilk naengmyeon',
        cells: [
          { value: 'Chilk naengmyeon' },
          { value: 'Japan' },
          { value: 'Kudzu root' },
          { value: 542 },
          { value: 6 },
        ],
      },
      {
        id: 'Shirataki',
        cells: [{ value: 'Shirataki' }, { value: 'Japan' }, { value: 'Konjac' }, { value: 20 }, { value: 7 }],
      },
      { id: 'Kelp', cells: [{ value: 'Kelp' }, { value: 'Japan' }, { value: 'Seaweed' }, { value: 6 }, { value: 8 }] },
      {
        id: 'Spaghetti',
        cells: [{ value: 'Spaghetti' }, { value: 'Italy' }, { value: 'Wheat' }, { value: 212 }, { value: 7 }],
      },
      {
        id: 'Linguine',
        cells: [{ value: 'Linguine' }, { value: 'Italy' }, { value: 'Wheat' }, { value: 212 }, { value: 7 }],
      },
      {
        id: 'Fettucini',
        cells: [{ value: 'Fettucini' }, { value: 'Italy' }, { value: 'Wheat' }, { value: 212 }, { value: 6 }],
      },
      {
        id: 'Lasagne',
        cells: [{ value: 'Lasagne' }, { value: 'Italy' }, { value: 'Wheat' }, { value: 212 }, { value: 7 }],
      },
      {
        id: 'Farfalle',
        cells: [{ value: 'Farfalle' }, { value: 'Italy' }, { value: 'Wheat' }, { value: 212 }, { value: 8 }],
      },
    ],
  },
};
