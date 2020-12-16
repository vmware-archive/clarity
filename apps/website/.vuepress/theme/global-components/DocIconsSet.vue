<template>
  <section>
    <slot v-if="filterIcons(icons).length"></slot>
    <div class="clr-row">
      <template v-for="icon in filterIcons(icons)">
        <DocIcon
          :iconName="icon.iconName"
          :isActive="icon.iconName === iconDetailFor"
          v-on:show-icon-detail-at="openIconDetailAt($event)"
        >
          <cds-icon
            class="icon"
            :solid="hasSolid(icon)"
            :badge="canBadge(icon)"
            :shape="icon.iconName"
            size="24"
          ></cds-icon>
        </DocIcon>
        <DocIconDetail
          :iconSetName="setName"
          :iconName="iconDetailFor"
          v-if="icon.iconName === iconDetailAt"
        ></DocIconDetail>
      </template>
    </div>
  </section>
</template>

<script>
import IconInventory from '../../../data/icon-inventory';
import IconSearchService from './services/icon-search-service';
import iconPreviewService from './services/icon-preview-service';

export default {
  name: 'DocIconsSet',
  computed: {
    iconSets: function () {
      return IconInventory.allSets;
    },
    iconAliases: function () {
      return IconInventory.allAliases;
    },
    icons: function () {
      return this.iconSets[this.setName].icons;
    },
  },
  props: {
    setName: String,
  },
  data: function () {
    return {
      iconDetailAt: null, // Show detail at the given icon name
      iconDetailFor: null,
      filterValue: '',
      isSolid: null,
      isBadged: null,
    };
  },
  mounted: function () {
    IconSearchService.executeOnFilterValueChange.push(this.onFilterValueChange);
    iconPreviewService.executeOnSolidChange.push(this.isSolidChange);
    iconPreviewService.executeOnBadgeChange.push(this.isBadgedChange);

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
    isBadgedChange: function (value) {
      this.isBadged = value;
    },
    isSolidChange: function (value) {
      this.isSolid = value;
    },
    onFilterValueChange: function (value) {
      this.closeIconDetail();
      this.filterValue = value;
    },
    hasSolid: function (icon) {
      return icon.iconSnippet.hasOwnProperty('solid') && this.isSolid;
    },
    canBadge: function (icon) {
      if (!this.isBadged) {
        return;
      }
      if (this.isBadged.includes('triangle')) {
        if (icon.iconSnippet.hasOwnProperty('outlineAlerted') || icon.iconSnippet.hasOwnProperty('solidAlerted')) {
          return this.isBadged;
        }
      } else {
        if (icon.iconSnippet.hasOwnProperty('outlineBadged') || icon.iconSnippet.hasOwnProperty('solidBadged')) {
          return this.isBadged;
        }
      }
    },
    filterIcons: function (icons) {
      return (
        icons &&
        icons.filter(icon => {
          const nameMatch = icon.iconName.indexOf(this.filterValue) > -1;
          const aliasMatch =
            this.iconAliases[icon.iconName] &&
            this.iconAliases[icon.iconName].some(alias => alias.indexOf(this.filterValue) > -1);
          return nameMatch || aliasMatch;
        })
      );
    },
  },
};
</script>

<style lang="scss" scoped>
h2 {
  position: sticky;
  top: 187px;
  background-color: var(--clr-global-app-background);
  z-index: 4500;
}
.icon {
  margin: 0 0.5rem;
}
</style>
