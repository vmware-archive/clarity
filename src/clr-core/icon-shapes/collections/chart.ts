/*
* Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
* This software is released under MIT license.
* The full license information can be found in LICENSE in the root directory of this project.
*/

import { ClarityIcons } from '../icon.service';
import { IconAlias, IconShapeTuple } from '../interfaces/icon.interfaces';

import { axisChartIcon, axisChartIconName } from '../shapes/axis-chart';
import { barChartIcon, barChartIconName } from '../shapes/bar-chart';
import { bellCurveIcon, bellCurveIconName } from '../shapes/bell-curve';
import { boxPlotIcon, boxPlotIconName } from '../shapes/box-plot';
import { bubbleChartIcon, bubbleChartIconName } from '../shapes/bubble-chart';
import { cloudChartIcon, cloudChartIconName } from '../shapes/cloud-chart';
import { curveChartIcon, curveChartIconName } from '../shapes/curve-chart';
import { gridChartIcon, gridChartIconName } from '../shapes/grid-chart';
import { heatMapIcon, heatMapIconName } from '../shapes/heat-map';
import { lineChartIcon, lineChartIconName } from '../shapes/line-chart';
import { pieChartIcon, pieChartIconName } from '../shapes/pie-chart';
import { scatterPlotIcon, scatterPlotIconName } from '../shapes/scatter-plot';
import { tickChartIcon, tickChartIconName } from '../shapes/tick-chart';

export const chartCollectionIcons: IconShapeTuple[] = [
  axisChartIcon,
  barChartIcon,
  bellCurveIcon,
  boxPlotIcon,
  bubbleChartIcon,
  cloudChartIcon,
  curveChartIcon,
  gridChartIcon,
  heatMapIcon,
  lineChartIcon,
  pieChartIcon,
  scatterPlotIcon,
  tickChartIcon,
];

export const chartCollectionAliases: IconAlias[] = [[lineChartIconName, ['analytics']]];

/**
 * Function that can be called to load the core icon set.
 *
 * ```typescript
 * import '@clr/core/icon';
 * import { loadChartIconSet } from '@clr/core/icon-shapes';
 *
 * loadChartIconSet();
 * ```
 *
 */
export function loadChartIconSet() {
  ClarityIcons.addIcons(...chartCollectionIcons);
  ClarityIcons.addAliases(...chartCollectionAliases);
}

declare module '@clr/core/common' {
  interface IconRegistrySources {
    [axisChartIconName]?: string;
    [barChartIconName]?: string;
    [bellCurveIconName]?: string;
    [boxPlotIconName]?: string;
    [bubbleChartIconName]?: string;
    [cloudChartIconName]?: string;
    [curveChartIconName]?: string;
    [gridChartIconName]?: string;
    [heatMapIconName]?: string;
    [lineChartIconName]?: string;
    [pieChartIconName]?: string;
    [scatterPlotIconName]?: string;
    [tickChartIconName]?: string;
  }
}
