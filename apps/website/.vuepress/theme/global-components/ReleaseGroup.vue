<template>
  <div>
    <h3>{{ title }}</h3>
    <table class="table">
      <tr>
        <th class="left" style="width: 100px;">Scope</th>
        <th class="left">Description</th>
        <th style="width: 125px;"></th>
        <th class="left" style="width: 100px;">Issue</th>
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

<style scoped></style>
