<template>
  <div>
    <div v-for="release of item.releases">
      <h2 class="sticky">
        {{ release.version }}
        <a class="release-date" :href="commitLink" target="_blank">
          Released {{ release.date }} <cds-icon class="external-link" size="12" shape="pop-out"></cds-icon>
        </a>
      </h2>
      <p v-if="release.description">{{ release.description }}</p>
      <ReleaseGroup v-if="release.feat" type="feat">
        <template v-for="feat of release.feat">
          <ReleaseItem :item="feat" />
        </template>
      </ReleaseGroup>

      <ReleaseGroup v-if="release.fix" type="fix">
        <template v-for="fix of release.fix">
          <ReleaseItem :item="fix" />
        </template>
      </ReleaseGroup>

      <ReleaseGroup v-if="release.deprecation" type="deprecation">
        <template v-for="deprecation of release.deprecation">
          <ReleaseItem :item="deprecation" />
        </template>
      </ReleaseGroup>
    </div>
  </div>
</template>

<script>
import v4 from '../../../../../changelogs/v4/v4.json';
import ReleaseGroup from './ReleaseGroup';
import ReleaseItem from './ReleaseItem';

// To make this reusable, we have to load data from different JSON files and merge them here as one object.
// Any new versions would need to be added and referenced as part of this in future releases.
const data = { v4 };

export default {
  name: 'Release',
  components: { ReleaseGroup, ReleaseItem },
  props: ['version'],
  methods: {
    commitLink: function (release) {
      return `https://github.com/vmware/clarity/tree/${release.version}`;
    },
  },
  computed: {
    item: function () {
      return data[this.version];
    },
  },
};
</script>

<style scoped lang="scss">
.sticky {
  position: sticky;
  top: 0;
}

.release-date {
  font-size: 0.75rem;
  margin-left: 1rem;
}
.external-link {
  margin-top: -0.5rem;
}
</style>
