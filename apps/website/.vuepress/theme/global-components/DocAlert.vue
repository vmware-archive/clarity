<template>
  <cds-alert-group v-bind:status="status" class="no-clr-ui">
    <cds-alert>
      <slot></slot>
      <cds-alert-actions v-if="path">
        <a
          :href="path"
          cds-text="link"
          :target="actionPop ? '_blank' : ''"
          :rel="actionPop ? 'noopener noreferrer' : ''"
          >Read more</a
        >
      </cds-alert-actions>
    </cds-alert>
  </cds-alert-group>
</template>

<script>
export default {
  name: 'DocAlert',
  props: {
    status: { type: String, default: 'info' },
    path: { type: String, default: null },
    actionPop: { type: Boolean, default: false },
  },
};
</script>
