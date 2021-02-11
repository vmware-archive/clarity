<template>
  <div cds-layout="fill" class="highchart-container">
    <div :cds-layout="chartContainerCdsLayoutAttribute" ref="chartContainer" class="chart-container"></div>
  </div>
</template>

<script>
/**
 * @file
 *
 * High chart component.
 *
 * Chart type depends on the options.type value via options prop.
 * Applies default clarity theme first, then the list of colors based on the "themeId" and
 * passes object of options (from props) on top of that.
 *
 * Has two views: chart and table. For the table view hides the chart itself.
 */

import Highcharts from 'highcharts';
import Exporting from 'highcharts/modules/exporting';
import ExportData from 'highcharts/modules/export-data';
import PatternFill from 'highcharts/modules/pattern-fill';

import { varCustomCssProperty } from '../../../util/var-custom-css-property';

// modules instantiation/registration
const highChartModules = [Exporting, ExportData, PatternFill];

highChartModules.forEach(module => module(Highcharts));

const { chart, merge, setOptions } = Highcharts;

import {
  fontFamily,
  noColor,
  titleFontColor,
  titleFontSize,
  titleFontWeight,
  axisTitleFontSize,
  axisTitleFontColor,
  axisTitleFontWeight,
  axisLabelFontSize,
  axisLabelFontWeight,
  axisLabelFontColor,
  legendFontSize,
  legendFontColor,
  legendFontWeight,
  axisLineColor,
  axisLineWidth,
  gridLineColor,
} from './chart-custom-css-props';

const chartTitleStyle = {
  fontSize: titleFontSize,
  fontWeight: titleFontWeight,
  color: titleFontColor,
};

const axisTitleStyle = {
  fontSize: axisTitleFontSize,
  fontWeight: axisTitleFontWeight,
  color: axisTitleFontColor,
};

const axisLabelsStyle = {
  fontSize: axisLabelFontSize,
  fontWeight: axisLabelFontWeight,
  color: axisLabelFontColor,
};

const legendStyle = {
  fontSize: legendFontSize,
  fontWeight: legendFontWeight,
  color: legendFontColor,
};

// wrapping custom CSS properties of all "styles" with 'var(...)`
// modifying objects in-place

const styles = [axisTitleStyle, axisLabelsStyle, chartTitleStyle, legendStyle];

styles.forEach(styles => {
  Object.entries(styles).forEach(([key, value]) => {
    styles[key] = varCustomCssProperty(value);
  });
});

const axisOptions = {
  title: {
    style: axisTitleStyle,
  },
  labels: {
    style: axisLabelsStyle,
  },
  gridLineColor: varCustomCssProperty(gridLineColor),
  lineColor: varCustomCssProperty(axisLineColor),
  gridLineWidth: varCustomCssProperty(axisLineWidth), // doesn't match TS type (number) but works ;)
};

import { patternSvgPaths } from './chart-pattern-paths';

const patterns = patternSvgPaths.map(path => ({
  path,
  width: 10,
  height: 10,
}));

/**
 * Event handler for upon table view rendering.
 * Applies clr-ui "table" class to the table element.
 * Table is rendered by Highcharts library based on the series data.
 **/
function onTableViewShow() {
  const { dataTableDiv: tableWrapperElement } = this;
  const tableNode = tableWrapperElement.querySelector('table');

  const { className } = tableNode;

  if (!className) {
    tableNode.className = 'table';
  } else if (!className.includes('table')) {
    // check above is to avoid "class='table table table'" situation on subsequent table renderings
    tableNode.className += ' table'; // crl-ui class
  }
  // no need to re-add anything on subsequent table renderings for the same chart
}

const theme = {
  chart: {
    style: {
      fontFamily: varCustomCssProperty(fontFamily),
    },
    backgroundColor: varCustomCssProperty(noColor),
    events: {
      afterViewData: onTableViewShow,
    },
  },
  colors: [], // to be populated by the component based on themeId provided
  title: {
    style: chartTitleStyle,
  },
  legend: {
    itemStyle: legendStyle,
    itemHoverStyle: legendStyle,
  },
  xAxis: merge({}, axisOptions), // not sure if deep cloning is required
  yAxis: merge({}, axisOptions),
  zAxis: merge({}, axisOptions),
  credits: false,
  plotOptions: {
    series: {
      animation: {
        duration: 0, // turn off the initial rendering animation
      },
    },
    pie: {
      dataLabels: {
        style: Object.assign(
          { textOutline: 'none' }, // some "fake" property to disable outline provided by highcharts
          legendStyle
        ),
      },
    },
    bar: {
      borderWidth: 0,
    },
  },
  exporting: {
    enabled: false, // hide export menu button
  },
};

/**
 * Return list of CSS custom properties for chart colors of themeId passed.
 * @param {number} themeId - From 1 to 12.
 * @return {string[]} - List of CSS custom properties with chart colors.
 * @todo throw if themeId is out of the range
 * @todo move to utils?
 */
function getChartThemeColors(themeId) {
  const chartColorPaletteLength = 12;
  const chartColorTokenPrefix = '--cds-charts-';
  const chartColorTokenSuffix = '00';
  const themePrefix = `${chartColorTokenPrefix}${themeId}-color-`;

  const colorTokens = [];

  for (let i = 1; i <= chartColorPaletteLength; i++) {
    colorTokens.push(`${themePrefix}${i}${chartColorTokenSuffix}`);
  }

  return colorTokens.map(token => varCustomCssProperty(token));
}

export default {
  name: 'HighChart',
  props: {
    options: {
      // highcharts options object
      type: Object,
      required: true,
    },
    themeId: {
      // theme id: from 1 to 12
      type: Number,
      default: 1,
    },
    tableView: {
      // table vs chart view
      type: Boolean,
      default: false,
    },
    textures: {
      // textures instead of solid colors
      type: Boolean,
      default: true,
    },
  },
  computed: {
    /**
     * Returns partial highcharts "options" object bases on chart theme and textures switch props.
     * @return {{colors: string[], series: Highcharts.Series[]}}
     */
    interactiveChartOptions() {
      const { themeColors: colors, interactiveChartSeries: series } = this;

      return {
        colors,
        series,
      };
    },
    /**
     * Adds/overwrites color and pattern series settings based on chart settings props.
     * Series cloning is not really necessary but wanted to keep this method as a getter.
     * @return {Highcharts.Series[]}
     */
    interactiveChartSeries() {
      const {
        options: {
          series: originalSeries,
          chart: { type },
        },
      } = this;

      switch (type) {
        // having textures as opt-in feature in case data structure is different not only for the pie chart
        case 'column':
        case 'area':
        case 'line':
        case 'bar': {
          return originalSeries.map((originalSeries, index) => {
            const series = merge({}, originalSeries);

            series.color = this.getSeriesColorByIndex(index);

            return series;
          });
        }

        // pie has a different series structure
        case 'pie': {
          // only first "series" matters for the pie chart
          const clonedSeries = merge({}, originalSeries[0]);

          clonedSeries.data.forEach((series, index) => {
            series.color = this.getSeriesColorByIndex(index);
          });

          return [clonedSeries];
        }
      }

      return originalSeries;
    },
    themeColors() {
      return getChartThemeColors(this.themeId);
    },
    chartContainerCdsLayoutAttribute() {
      return this.tableView ? 'display:none' : null;
    },
  },
  watch: {
    themeId() {
      this.updateChart();
    },
    textures() {
      this.updateChart();
    },
    tableView() {
      this.toggleView();
    },
  },
  mounted() {
    const { $refs, interactiveChartOptions, options } = this;

    setOptions(theme); // apply the "clarity chart" theme

    const fullChartOptionsSet = merge({}, options, interactiveChartOptions);

    this.chart = chart($refs.chartContainer, fullChartOptionsSet);

    this.toggleView();
  },
  methods: {
    /**
     * Updates chart based on interactive options passed via props.
     */
    updateChart() {
      const { interactiveChartOptions } = this;

      this.chart.update(interactiveChartOptions);
    },
    // uses highcharts API to render and hide table view of the chart's data
    toggleView() {
      const { tableView, chart } = this;

      if (tableView) {
        chart.viewData();
      } else {
        chart.hideData();
      }
    },
    /**
     * Returns either custom CSS property with the color or object with pattern property. Pattern
     * property values has path defined as well as it's color.
     * @param {number} index - Index of the series - from 0 to 11.
     * @return {string|Highcharts.PatternOptionsObject}
     */
    getSeriesColorByIndex(index) {
      const { themeColors, textures } = this;

      const color = themeColors[index];

      if (!textures) {
        return color;
      }

      const pattern = {
        color,
        ...patterns[index],
      };

      return {
        pattern,
      };
    },
  },
};
</script>

<style scoped lang="scss">
// container of "chart-container" and table view when rendered
.highchart-container {
  padding: var(--cds-global-layout-space-md);
  padding-bottom: 0;
}

.chart-container {
  margin-top: calc(-1 * var(--cds-global-space-2)); // so that title doesn't jump on view switch
}
</style>

<style lang="scss">
// need to have this unscoped cause these elements are rendered by HighCharts and
// it is not aware of data-v attribute scoping
.highchart-container {
  .highcharts-data-table {
    .highcharts-table-caption {
      font-size: var(--cds-global-typography-section-font-size);
      font-weight: var(--cds-global-typography-font-weight-medium);
      color: var(--cds-global-typography-color-400);
      margin-top: var(--cds-global-space-5);
      margin-bottom: var(--cds-global-space-8);
    }
  }

  .table {
    margin-top: 0;
  }
}
</style>
