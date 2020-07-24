<template>
  <div class="all-icons-container">
    <DocIconsSearch
      v-on:search-input-change="
        closeIconDetail();
        searchInputChange($event);
      "
    ></DocIconsSearch>
    <DocIconsPreviewSettings
      v-on:is-solid-change="isSolidChange($event)"
      v-on:variation-change="variationChange($event)"
    ></DocIconsPreviewSettings>
    <section v-for="iconSet in iconSets" v-if="filterIcons(iconSet.icons).length">
      <h4 class="icon-set-name-header">{{ iconSet.setName }} Icons</h4>
      <div class="clr-row">
        <template v-for="icon in filterIcons(iconSet.icons)">
          <DocIcon
            :iconName="icon.iconName"
            :isActive="icon.iconName === iconDetailFor"
            v-on:show-icon-detail-at="openIconDetailAt($event)"
          >
            <cds-icon class="icon" :class="previewClasses" :shape="icon.iconName" size="24"></cds-icon>
          </DocIcon>
          <DocIconDetail :iconName="iconDetailFor" v-if="icon.iconName === iconDetailAt"></DocIconDetail>
        </template>
      </div>
    </section>
  </div>
</template>

<script>
import IconInventory from '../../../data/icon-inventory';
import TimerUtils from '../util/timer-utils';

export default {
  name: 'DocIcons',
  computed: {
    iconSets: function () {
      return IconInventory.allSets;
    },
    iconAliases: function () {
      return IconInventory.allAliases;
    },
  },
  data: function () {
    return {
      iconDetailAt: null, // Show detail at the given icon name
      iconDetailFor: null,
      filterValue: '',
      previewClasses: {
        'is-solid': false,
        'has-badge': false,
        'has-alert': false,
      },
    };
  },
  mounted() {
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', this.closeIconDetail);
    }
  },
  methods: {
    openIconDetailAt: function (iconDetailData) {
      if (this.hasIconDetailOpen(iconDetailData)) {
        // if the icon detail is requested on the same icon again,
        // we hide the detail.
        this.closeIconDetail();
        return;
      }
      this.iconDetailAt = iconDetailData.iconDetailAt;
      this.iconDetailFor = iconDetailData.iconDetailFor;
    },
    searchInputChange: TimerUtils.debounce(function (value) {
      this.filterValue = value;
    }, 250),
    variationChange: function (value) {
      if (value === 'none') {
        this.previewClasses['has-badge'] = false;
        this.previewClasses['has-alert'] = false;
      } else if (value === 'alert') {
        this.previewClasses['has-badge'] = false;
        this.previewClasses['has-alert'] = true;
      } else if (value === 'badge') {
        this.previewClasses['has-badge'] = true;
        this.previewClasses['has-alert'] = false;
      }
    },
    isSolidChange: function (value) {
      this.previewClasses['is-solid'] = value;
    },
    filterIcons: function (icons) {
      return icons.filter(icon => {
        const nameMatch = icon.iconName.indexOf(this.filterValue) > -1;
        const aliasMatch =
          this.iconAliases[icon.iconName] &&
          this.iconAliases[icon.iconName].some(alias => alias.indexOf(this.filterValue) > -1);
        return nameMatch || aliasMatch;
      });
    },
    hasIconDetailOpen: function (iconDetailData) {
      return (
        iconDetailData &&
        this.iconDetailAt === iconDetailData.iconDetailAt &&
        this.iconDetailFor === iconDetailData.iconDetailFor
      );
    },
    closeIconDetail: function () {
      this.iconDetailAt = null;
      this.iconDetailFor = null;
    },
  },
};
</script>

<style scoped lang="scss">
.icon-set-name-header {
  padding: 0.5rem 0;
}
.icon {
  margin: 0 0.5rem;
}
</style>
