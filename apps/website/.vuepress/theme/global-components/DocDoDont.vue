<template>
  <div class="clr-row">
    <div class="clr-col-sm-12 clr-col-lg-6" cds-layout="p-b:lg p-b@lg:none">
      <slot></slot>
    </div>
    <div class="clr-col-sm-12 clr-col-lg-6">
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
