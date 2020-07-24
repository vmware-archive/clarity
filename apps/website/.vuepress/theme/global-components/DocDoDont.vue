<template>
  <div class="clr-row">
    <div class="clr-col">
      <slot></slot>
    </div>
    <div class="clr-col">
      <slot name="dont"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DocDoDont',
  props: {
    demoHeight: [Number, String],
  },
};
</script>

<style scoped>
.bar::before {
  content: ' ';
  display: block;
  width: 100%;
  background: #318500;
  height: 0.4rem;
  position: absolute;
  top: -1rem;
  left: 0;
}
.bar.danger::before {
  background: #e02200;
}
p {
  position: relative;
  color: #318500;
}
p.danger {
  color: #e02200;
}
</style>
