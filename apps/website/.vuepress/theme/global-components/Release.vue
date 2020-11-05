<template>
  <div>
    <div v-for="release of item.releases" cds-layout="m-b:xl">
      <h2 class="sticky" cds-text="title" cds-layout="p-y:lg">
        {{ release.version }}
        <a class="release-date" :href="commitLink(release)" target="_blank">
          Released {{ release.date }} <cds-icon class="external-link" size="12" shape="pop-out"></cds-icon>
        </a>
      </h2>
      <p v-if="release.description" cds-text="body" cds-layout="m-t:xs m-b:lg">{{ release.description }}</p>

      <div cds-layout="vertical gap:lg">
        <ReleaseGroup v-if="release.feat && release.feat.length > 0" type="feat">
          <template v-for="feat of release.feat">
            <ReleaseItem :item="feat" />
          </template>
        </ReleaseGroup>

        <ReleaseGroup v-if="release.fix && release.fix.length > 0" type="fix">
          <template v-for="fix of release.fix">
            <ReleaseItem :item="fix" />
          </template>
        </ReleaseGroup>

        <ReleaseGroup v-if="release.deprecation && release.deprecation.length > 0" type="deprecation">
          <template v-for="deprecation of release.deprecation">
            <ReleaseItem :item="deprecation" />
          </template>
        </ReleaseGroup>
      </div>
    </div>
  </div>
</template>

<script>
import v4 from '../../../../../changelogs/v4.json';
import v5 from '../../../../../changelogs/v5.json';
import ReleaseGroup from './ReleaseGroup';
import ReleaseItem from './ReleaseItem';

// To make this reusable, we have to load data from different JSON files and merge them here as one object.
// Any new versions would need to be added and referenced as part of this in future releases.
const data = { v4, v5 };

export default {
  name: 'Release',
  components: { ReleaseGroup, ReleaseItem },
  props: ['version'],
  methods: {
    commitLink: function (release) {
      return `https://github.com/vmware/clarity/commits/v${release.version}`;
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
