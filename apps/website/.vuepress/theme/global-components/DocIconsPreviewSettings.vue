<template>
  <div class="icons-preview-settings no-clr-ui">
    <cds-toggle-group cds-layout="m-t:xs">
      <label>Preview</label>
      <cds-toggle>
        <label>Solid</label>
        <input type="checkbox" v-model="isSolid" />
      </cds-toggle>
    </cds-toggle-group>

    <cds-select>
      <label>Badge</label>
      <select v-model="isBadged">
        <option>none</option>
        <option>info</option>
        <option>success</option>
        <option>danger</option>
        <option>warning</option>
        <option>warning-triangle</option>
        <option>inherit-triangle</option>
      </select>
    </cds-select>
  </div>
</template>

<script>
export default {
  name: 'DocIconsPreviewSettings',
  data: function () {
    return {
      isBadged: 'none',
      isSolid: false,
    };
  },
  watch: {
    isBadged: function (value) {
      if (value === 'none') {
        value = null;
      }
      this.$emit('is-badged-change', value);
    },
    isSolid: function (value) {
      this.$emit('is-solid-change', value);
    },
  },
};
</script>

<style scoped lang="scss">
.icons-preview-settings {
  display: grid;
  grid-template-columns: 180px 240px auto;
  padding: 0.75rem 0;
  position: sticky;
  top: 133px; // height makes it sticky under search input.
  background-color: var(--clr-global-app-background);
  z-index: 5000;
}
.control-container-title {
  padding-right: 0.5rem;
}
.clr-toggle-wrapper {
  margin-right: 0;
}
</style>
