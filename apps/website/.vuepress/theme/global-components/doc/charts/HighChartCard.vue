<template>
  <div cds-layout="vertical">
    <div cds-layout="horizontal align:right m-b:md">
      <cds-button action="flat" cds-layout="align:left" @click="toggleTableView" :disabled="darkTheme">
        {{ viewToggleButtonLabel }}
      </cds-button>
      <cds-select layout="compact" control-width="shrink">
        <label>Select Chart Theme</label>
        <select v-model="themeId" :disabled="tableView">
          <option v-for="option of themeOptions" :key="option.value" :value="option.value">{{ option.label }}</option>
        </select>
      </cds-select>
      <cds-toggle cds-layout="m-l:lg">
        <label>Textures</label>
        <input type="checkbox" v-model="textures" :disabled="tableView" />
      </cds-toggle>
      <cds-toggle cds-layout="m-l:lg">
        <label>Dark Theme</label>
        <input type="checkbox" v-model="darkTheme" :disabled="tableView" />
      </cds-toggle>
    </div>
    <div class="card" cds-layout="horizontal p:none" :cds-theme="darkThemeAttributeValue">
      <slot
        :themeId="themeId"
        :darkTheme="darkTheme"
        :tableView="tableView"
        :textures="textures"
        :chartOptions="chartOptions"
      ></slot>
    </div>
  </div>
</template>

<script>
/**
 * @file
 * HighChart wrapper component with charts theme, light/dark theme and table/chart view selectors.
 */

import { chartOptionsMap } from './chart-options';

const themeOptions = [];

for (let i = 1; i <= 12; i++) {
  themeOptions.push({
    value: i,
    label: `Theme ${i}`,
  });
}

export default {
  name: 'HighChartCard',
  data() {
    return {
      themeId: 12,
      darkTheme: false, // only one of darkTheme/tableView could be set to true at any moment
      tableView: false,
      textures: false,
      themeOptions,
      chartOptions: null, //to be populated from the data file
    };
  },
  props: {
    chartId: {
      // key to look up chart's data (options)
      type: String,
      required: true,
    },
  },
  mounted() {
    const { chartId } = this;

    if (chartId && chartOptionsMap.has(chartId)) {
      this.chartOptions = chartOptionsMap.get(chartId);
    }
  },
  computed: {
    darkThemeAttributeValue() {
      return this.darkTheme ? 'dark' : null;
    },
    viewToggleButtonLabel() {
      return this.tableView ? 'Chart View' : 'Table View';
    },
  },
  methods: {
    toggleTableView() {
      this.tableView = !this.tableView;
    },
  },
};
</script>

<style scoped lang="scss">
.card {
  // to avoid content shift upon chart rendering
  min-height: calc(var(--cds-global-space-13) * 6); // 20rem
}
</style>
