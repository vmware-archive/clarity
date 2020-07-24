<template>
  <div cds-layout="vertical gap:md m-t: lg">
    <h3 cds-text="heading medium" cds-layout="m-b:xl">What's New</h3>
    <p cds-text="title semibold">
      {{ data.version }}
      <span class="action-text" cds-layout="m-l:lg">Released {{ data.date }}</span>
    </p>
    <div v-if="data.feat.length > 0" cds-layout="m-t:lg vertical gap:md">
      <p cds-text="section medium">New - {{ data.feat[0].scope }}</p>
      <p cds-text="message">{{ data.feat[0].title }}</p>
    </div>
    <div v-if="data.fix.length > 0" cds-layout="m-t:lg">
      <p cds-text="message">This version has {{ data.fix.length }} bug fixes.</p>
    </div>
  </div>
</template>

<script>
import v4 from '../../../../../changelogs/v4/v4.json';

export default {
  name: 'WhatsNew',
  // components: { ReleaseGroup, ReleaseItem },
  props: ['version', 'component'],
  methods: {
    reduceVersion: function (version) {
      // handle latest and v4, v3, v2 etc ...
      if (version === 'latest' || version === 'v4') {
        return v4.releases[0];
      }
      // else if (version === 'v3') {
      // planning for v3, v2 etc ...
      // return v4.releases[0];
      // }
    },
  },
  computed: {
    data: function () {
      if (this.version) {
        return this.reduceVersion(this.version);
      } else {
        // assume we get a component name like `Datagrid`
        // return constructed obj for all version that reference this component / scope
      }
    },
    highlights: function () {
      if (this.version) {
        this.reduceVersion(this.version);
      } else if (this.component) {
        // handle component filtering for those pages
      }
      // return data[this.version];
    },
  },
};
</script>

<style scoped>
.action-text {
  color: var(--cds-token-color-action-600);
}
</style>
