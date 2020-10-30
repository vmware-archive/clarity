<template>
  <div class="image-wrapper" v-bind:style="{ 'justify-content': align }">
    <img :src="src" :alt="title" :width="width" />
  </div>
</template>

<script>
export default {
  name: 'ClrImage',
  props: {
    src: String,
    title: String,
    align: { type: String, default: 'left' },
    width: { type: Number | String, default: 'auto' },
  },
};
</script>

<style scoped lang="scss">
.image-wrapper {
  margin-top: var(--cds-token-space-size-6);
}
img {
  max-width: 100%;
}
</style>
