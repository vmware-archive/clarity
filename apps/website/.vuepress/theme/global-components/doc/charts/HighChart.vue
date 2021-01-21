<template>
  <div cds-layout="fill" ref="chartContainer"></div>
</template>

<script>
/**
 * @file
 *
 * High chart component.
 *
 * Chart type depends on the options.type value via options prop.
 * Applies default clarity theme first, then the list of colors based on the "themeId" and
 * passed object of options on top of that.
 */

import { chart, merge, setOptions } from 'highcharts';
import { varCustomCssProperty } from '../../../util/var-custom-css-property';

const fontFamily = '--cds-global-typography-font-family';
const noColor = '--cds-alias-object-opacity-0'; // transparent

const titleFontSize = '--cds-global-typography-section-font-size';
// mockup color: const titleFontColor = '--cds-global-color-construction-900';
const titleFontColor = '--cds-global-typography-color-400';
const titleFontWeight = '--cds-global-typography-font-weight-medium';
const titleBottomMargin = '--cds-global-space-12';

const axisTitleFontSize = '--cds-global-typography-secondary-font-size';
// mockup color: const axisTitleFontColor = '--cds-global-color-construction-1000';
const axisTitleFontColor = '--cds-global-typography-color-500';
const axisTitleFontWeight = titleFontWeight;

const axisLabelsFontSize = axisTitleFontSize;
const axisLabelsFontColor = axisTitleFontColor;
const axisLabelsFontWeight = '--cds-global-typography-font-weight-regular';

const legendFontSize = axisLabelsFontSize;
const legendFontColor = axisLabelsFontColor;
const legendFontWeight = axisLabelsFontWeight;

// mockup color: const gridLineColor = '--cds-global-color-construction-500';
const gridLineColor = '--cds-alias-status-neutral';
// mockup color: const axisLineColor = '--cds-global-color-construction-600';
const axisLineColor = '--cds-alias-status-neutral-shade';
const axisLineWidth = '--cds-global-space-1';

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
  gridLineWidth: varCustomCssProperty(axisLineWidth), // doesn't match TS type (number) but works
};

const theme = {
  chart: {
    style: {
      fontFamily: varCustomCssProperty(fontFamily),
    },
    backgroundColor: varCustomCssProperty(noColor),
  },
  title: {
    style: chartTitleStyle,
  },
  legend: {
    itemStyle: legendStyle,
  },
  xAxis: merge({}, axisOptions), // not sure if deep cloning is required
  yAxis: merge({}, axisOptions),
  zAxis: merge({}, axisOptions),
  credits: false,
  plotOptions: {
    series: {
      animation: false,
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
  },
  computed: {
    mergedOptions() {
      const colorOptions = {
        colors: this.themeColors,
      };

      return merge(colorOptions, this.options);
    },
    themeColors() {
      return getChartThemeColors(this.theme);
    },
  },
  watch: {
    theme() {
      this.updateChartTheme();
    },
  },
  mounted() {
    const { $refs, mergedOptions } = this;

    setOptions(theme); // applying the clarity chart theme

    this.chart = chart($refs.chartContainer, mergedOptions);
  },
  methods: {
    updateChartTheme() {
      this.chart.update({ colors: this.themeColors });
    },
  },
};
</script>
