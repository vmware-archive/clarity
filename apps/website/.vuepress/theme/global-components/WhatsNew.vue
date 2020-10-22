<template>
  <div cds-layout="vertical">
    <h1 cds-text="title medium expanded">v{{ data.version }} is now available!</h1>
    <p v-if="data.feat.length > 0" cds-text="message medium" cds-layout="m-t:md">
      <span v-if="data.feat[0]">{{ data.feat[0].title }}</span>
      <span v-if="data.feat[1]">, {{ data.feat[1].title }}</span>
    </p>
    <router-link to="/releases/v4" cds-layout="m-t:md m-b:md m-b@sm:none">
      <cds-button action="outline">View Details</cds-button>
    </router-link>
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
