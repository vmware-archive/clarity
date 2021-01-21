<template>
  <div cds-layout="vertical">
    <div cds-layout="horizontal align:right">
      <cds-select layout="compact" control-width="shrink">
        <label>Select Chart Theme</label>
        <select v-model="themeId">
          <option v-for="option of options" :key="option.value" :value="option.value">{{ option.label }}</option>
        </select>
      </cds-select>
      <cds-toggle cds-layout="m-l:md">
        <label>Dark Theme</label>
        <input type="checkbox" v-model="darkTheme" />
      </cds-toggle>
    </div>
    <div cds-layout="horizontal m-y:md p:none" :cds-theme="darkThemeAttribute">
      <slot :themeId="themeId" :darkTheme="darkTheme"></slot>
    </div>
  </div>
</template>

<script>
const options = [];

for (let i = 1; i <= 12; i++) {
  options.push({
    value: i,
    label: `Theme ${i}`,
  });
}

export default {
  name: 'ChartThemeSelector',
  data() {
    return {
      themeId: 12,
      darkTheme: false,
      options,
    };
  },
  computed: {
    darkThemeAttribute() {
      return this.darkTheme ? 'dark' : null;
    },
  },
};
</script>
