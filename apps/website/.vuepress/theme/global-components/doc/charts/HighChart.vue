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
import { varCustomCssProperty } from '../../../util/var-custom-css-property';

Exporting(Highcharts);
ExportData(Highcharts);

const { chart, merge, setOptions } = Highcharts;

const fontFamily = '--cds-global-typography-font-family';
const noColor = '--cds-alias-object-opacity-0'; // transparent

const titleFontSize = '--cds-charts-title-font-size';
const titleFontColor = '--cds-charts-title-font-color';
const titleFontWeight = '--cds-charts-title-font-weight';

const axisTitleFontSize = '--cds-charts-axis-title-font-size';
const axisTitleFontColor = '--cds-charts-axis-title-font-color';
const axisTitleFontWeight = '--cds-charts-axis-title-font-weight';

const axisLabelsFontSize = '--cds-charts-axis-value-font-size';
const axisLabelsFontColor = '--cds-charts-axis-value-font-color';
const axisLabelsFontWeight = '--cds-charts-axis-value-font-weight';

const legendFontSize = axisLabelsFontSize;
const legendFontColor = axisLabelsFontColor;
const legendFontWeight = axisLabelsFontWeight;

const axisLineColor = '--cds-charts-axis-line-color';
const axisLineWidth = '--cds-charts-axis-line-width';

const gridLineColor = '--cds-charts-grid-line-color';

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
  fontSize: axisLabelsFontSize,
  fontWeight: axisLabelsFontWeight,
  color: axisLabelsFontColor,
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
    theme: {
      // theme id: from 1 to 12
      type: Number,
      default: 1,
    },
    tableView: {
      // table vs chart view
      type: Boolean,
      default: false,
    },
  },
  computed: {
    fullChartOptionsSet() {
      const colorOptions = {
        colors: this.themeColors,
      };

      return merge(colorOptions, this.options);
    },
    themeColors() {
      return getChartThemeColors(this.theme);
    },
    chartContainerCdsLayoutAttribute() {
      return this.tableView ? 'display:none' : null;
    },
  },
  watch: {
    theme() {
      this.updateChartColorTheme();
    },
    tableView() {
      this.toggleView();
    },
  },
  mounted() {
    const { $refs, fullChartOptionsSet } = this;

    setOptions(theme); // apply the "clarity chart" theme

    this.chart = chart($refs.chartContainer, fullChartOptionsSet);

    this.toggleView();
  },
  methods: {
    updateChartColorTheme() {
      this.chart.update({ colors: this.themeColors });
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
