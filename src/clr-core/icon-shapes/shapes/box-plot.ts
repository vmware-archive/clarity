/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer';
import { IconShapeTuple } from '../interfaces/icon.interfaces';

const icon = {
  outline:
    '<path d="M32,5H4A2,2,0,0,0,2,7V29a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V7A2,2,0,0,0,32,5ZM4,29V7H32V29Z"/><path d="M 7 12 L 17 12 L 17 26 L 7 26 L 7 12 Z M 8.6 24.4 L 15.4 24.4 L 15.4 18.8 L 8.6 18.8 L 8.6 24.4 Z M 15.4 13.6 L 8.6 13.6 L 8.6 17.2 L 15.4 17.2 L 15.4 13.6 Z"/><path d="M 19 24 L 29 24 L 29 10 L 19 10 L 19 24 Z M 20.6 11.6 L 27.4 11.6 L 27.4 17.2 L 20.6 17.2 L 20.6 11.6 Z M 27.4 22.4 L 20.6 22.4 L 20.6 18.8 L 27.4 18.8 L 27.4 22.4 Z"/>',

  outlineAlerted:
    '<path d="M 34 29 C 34 30.105 33.105 31 32 31 L 4 31 C 2.895 31 2 30.105 2 29 L 2 7 C 2 5.895 2.895 5 4 5 L 21.958 5 L 20.786 7 L 4 7 L 4 29 L 32 29 L 32 15.357 L 34 15.357 Z"/><path d="M 7 12 L 17 12 L 17 26 L 7 26 L 7 12 Z M 8.6 24.4 L 15.4 24.4 L 15.4 18.8 L 8.6 18.8 L 8.6 24.4 Z M 15.4 13.6 L 8.6 13.6 L 8.6 17.2 L 15.4 17.2 L 15.4 13.6 Z"/><path d="M 29 24 L 19 24 L 19 15.345 C 19.021 15.348 20.6 15.36 20.6 15.36 L 20.6 17.2 L 27.4 17.2 L 27.4 15.36 L 29 15.357 L 29 24 Z M 27.4 18.8 L 20.6 18.8 L 20.6 22.4 L 27.4 22.4 L 27.4 18.8 Z"/>',

  outlineBadged:
    '<path d="M 32 13.22 L 32 29 L 4 29 L 4 7 L 22.57 7 C 22.524 6.668 22.501 6.334 22.5 6 C 22.501 5.665 22.524 5.331 22.57 5 L 4 5 C 2.895 5 2 5.895 2 7 L 2 29 C 2 30.104 2.895 31 4 31 L 32 31 C 33.105 31 34 30.104 34 29 L 34 12.34 C 33.38 12.73 32.706 13.026 32 13.22 Z"/><path d="M 7 12 L 17 12 L 17 26 L 7 26 L 7 12 Z M 8.6 24.4 L 15.4 24.4 L 15.4 18.8 L 8.6 18.8 L 8.6 24.4 Z M 15.4 13.6 L 8.6 13.6 L 8.6 17.2 L 15.4 17.2 L 15.4 13.6 Z"/><path d="M 19 10 L 23.728 10 C 24.105 10.596 24.564 11.135 25.09 11.6 L 20.6 11.6 L 20.6 17.2 L 27.4 17.2 L 27.4 12.987 C 27.909 13.177 28.445 13.313 29 13.387 L 29 24 L 19 24 Z M 27.4 18.8 L 20.6 18.8 L 20.6 22.4 L 27.4 22.4 Z"/>',

  solid:
    '<path d="M 34 7 L 34 29 C 34 30.105 33.105 31 32 31 L 4 31 C 2.895 31 2 30.105 2 29 L 2 7 C 2 5.895 2.895 5 4 5 L 32 5 C 33.105 5 34 5.895 34 7 Z M 7 26 L 17 26 L 17 12 L 7 12 Z M 9 19 L 15 19 L 15 24 L 9 24 Z M 15 17 L 9 17 L 9 14 L 15 14 Z M 19 24 L 29 24 L 29 10 L 19 10 Z M 21 12 L 27 12 L 27 17 L 21 17 Z M 27 22 L 21 22 L 21 19 L 27 19 Z"/>',

  solidAlerted:
    '<path d="M 34 29 C 34 30.105 33.105 31 32 31 L 4 31 C 2.895 31 2 30.105 2 29 L 2 7 C 2 5.895 2.895 5 4 5 L 21.958 5 L 19.028 10 L 19 10 L 19 10.048 L 17.625 12.395 C 16.807 13.583 17.571 15.197 19 15.345 L 19 24 L 29 24 L 29 15.357 L 34 15.357 Z M 7 26 L 17 26 L 17 12 L 7 12 Z M 9 19 L 15 19 L 15 24 L 9 24 Z M 15 17 L 9 17 L 9 14 L 15 14 Z M 27 17 L 21 17 L 21 15.357 L 27 15.357 Z M 27 22 L 21 22 L 21 19 L 27 19 Z"/>',

  solidBadged:
    '<path d="M 34 12.34 L 34 29 C 34 30.105 33.105 31 32 31 L 4 31 C 2.895 31 2 30.105 2 29 L 2 7 C 2 5.895 2.895 5 4 5 L 22.57 5 C 22.312 6.817 22.732 8.566 23.633 10 L 19 10 L 19 24 L 29 24 L 29 13.427 C 29.103 13.44 29.206 13.451 29.31 13.46 L 30.32 13.48 C 31.625 13.429 32.895 13.036 34 12.34 Z M 7 26 L 17 26 L 17 12 L 7 12 Z M 9 19 L 15 19 L 15 24 L 9 24 Z M 15 17 L 9 17 L 9 14 L 15 14 Z M 21 12 L 25.472 12 C 25.94 12.352 26.452 12.65 27 12.885 L 27 17 L 21 17 Z M 27 22 L 21 22 L 21 19 L 27 19 Z"/>',
};

export const boxPlotIconName = 'box-plot';
export const boxPlotIcon: IconShapeTuple = [boxPlotIconName, renderIcon(icon)];
