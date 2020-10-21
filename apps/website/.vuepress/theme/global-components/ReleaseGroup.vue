<template>
  <div>
    <h3>{{ title }}</h3>
    <table class="table">
      <tr>
        <th class="left fixed-5">Scope</th>
        <th class="left fixed-5">Project</th>
        <th class="left">Description</th>
        <th></th>
        <!-- the cells in this col are used when the change needs a breaking badge -->
        <th class="left fixed-5">Issue</th>
      </tr>
      <slot></slot>
    </table>
  </div>
</template>

<script>
export default {
  name: 'ReleaseGroup',
  props: ['type'],
  computed: {
    title: function () {
      switch (this.type) {
        case 'feat':
          return 'New';
        case 'fix':
          return 'Bug Fixes';
        case 'deprecation':
          return 'Deprecation';
      }
    },
  },
};
</script>

<style scoped lang="scss">
.table {
  table-layout: auto;
  .fixed-5 {
    width: 5rem;
  }
}
</style>
