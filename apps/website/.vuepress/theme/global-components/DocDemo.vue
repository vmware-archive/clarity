<template>
  <div class="demo-wrapper" :id="id" :class="{ center }">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'DocDemo',
  props: {
    id: String,
    center: Boolean,
  },
};
</script>

<style lang="scss">
.demo-wrapper {
  // @TODO Why did we have these? They break tooltips
  // position: relative;
  // overflow: hidden;
  margin: 0.6rem 0 1.2rem;
  padding: 0.2rem;

  &.center {
    text-align: center;
  }
}
</style>
