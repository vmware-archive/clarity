<template>
  <div class="all-icons-container">
    <DocIconsSearch v-on:search-input-change="searchInputChange($event)"></DocIconsSearch>
    <DocIconsPreviewSettings
      v-on:is-solid-change="isSolidChange($event)"
      v-on:variation-change="variationChange($event)"
    ></DocIconsPreviewSettings>
    <slot></slot>
  </div>
</template>

<script>
import IconInventory from '../../../data/icon-inventory';
import TimerUtils from '../util/timer-utils';
import IconSearchService from './services/icon-search-service';
import IconPreviewService from './services/icon-preview-service';

export default {
  name: 'DocIcons',
  data: function () {
    return {
      filterValue: '',
    };
  },
  methods: {
    searchInputChange: TimerUtils.debounce(function (value) {
      this.filterValue = value;
      IconSearchService.setFilterValue(value);
    }, 250),
    isSolidChange: function (value) {
      IconPreviewService.setSolid(value);
    },
    variationChange: function (value) {
      IconPreviewService.setVariation(value);
    },
  },
};
</script>

<style lang="scss">
.all-icons-container {
  padding-top: var(--cds-global-space-9);
}
</style>
