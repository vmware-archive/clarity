<template>
  <div class="icons-preview-settings">
    <div class="clr-control-container clr-control-inline">
      <span class="control-container-title">
        Preview:
      </span>
      <div class="clr-toggle-wrapper">
        <input type="checkbox" class="clr-input" id="is-solid-checkbox" v-model="isSolid" />
        <label for="is-solid-checkbox" class="clr-control-label">Solid</label>
      </div>
    </div>

    <div class="clr-control-container clr-control-inline">
      <span class="control-container-title">
        Variations:
      </span>
      <div class="clr-radio-wrapper">
        <input type="radio" class="clr-input" id="is-none-radio" value="none" v-model="variation" />
        <label for="is-none-radio" class="clr-control-label">none</label>
      </div>
      <div class="clr-radio-wrapper">
        <input type="radio" class="clr-input" id="is-badge-radio" value="badge" v-model="variation" />
        <label for="is-badge-radio" class="clr-control-label">badge</label>
      </div>
      <div class="clr-radio-wrapper">
        <input type="radio" class="clr-input" id="is-alert-radio" value="alert" v-model="variation" />
        <label for="is-alert-radio" class="clr-control-label">alert</label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DocIconsPreviewSettings',
  data: function () {
    return {
      variation: 'none',
      isSolid: false,
    };
  },
  watch: {
    variation: function (value) {
      this.$emit('variation-change', value);
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
  grid-template-columns: 8rem auto;
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
