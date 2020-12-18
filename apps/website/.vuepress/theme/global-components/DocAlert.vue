<template>
  <cds-alert-group v-bind:status="status" class="no-clr-ui">
    <cds-alert>
      <slot></slot>
    </cds-alert>
  </cds-alert-group>
</template>

<script>
export default {
  name: 'DocAlert',
  props: {
    status: { type: String, default: 'info' },
  },
};
</script>
