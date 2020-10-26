<template>
  <section class="sticky">
    <label for="search-icons-sticky" class="searchbar-label">
      <cds-icon class="search-icon" shape="search" size="24"></cds-icon>
      <button aria-label="close" class="close" type="button" @click="resetSearch()" :class="{ active: !!filterValue }">
        <cds-icon shape="close" size="24"></cds-icon>
      </button>
      <input
        placeholder="Search for Clarity Icons..."
        type="text"
        class="searchbar-input clr-input"
        v-model.trim="filterValue"
      />
    </label>
  </section>
</template>

<script>
export default {
  name: 'DocIconsSearch',
  data: function () {
    return {
      filterValue: '',
    };
  },
  methods: {
    resetSearch: function () {
      this.filterValue = '';
    },
  },
  watch: {
    filterValue: function (value) {
      this.$emit('search-input-change', value);
    },
  },
};
</script>

<style scoped lang="scss">
.sticky {
  position: sticky;
  top: 84px; // height is to make it sticky under the page title.
}
.searchbar-label {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;

  .search-icon {
    position: absolute;
    left: 0.5rem;
    top: 0.6rem;
    color: red;
  }

  button.close {
    position: absolute;
    right: 0.5rem;
    top: 0.5rem;
    display: none;

    &.active {
      display: block;
    }
  }

  input.searchbar-input {
    width: 100%;
    padding: 1.2rem 2rem;
    &::placeholder {
      color: var(--cds-token-color-neutral-1000);
    }
  }
}
</style>
