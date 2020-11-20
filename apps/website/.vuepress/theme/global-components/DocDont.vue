<template>
  <div class="docs-dont">
    <DocInset :height="demoHeight">
      <slot></slot>
    </DocInset>
    <p class="bar">Don't</p>
    <p class="summary">{{ summary }}</p>
  </div>
</template>

<script>
export default {
  name: 'DocDont',
  props: {
    demoHeight: [Number, String],
    summary: String,
  },
};
</script>

<style scoped>
.docs-dont {
  padding-top: 1rem;
  width: 49%;
  margin: 0 0 0 1%;
  display: inline-block;
}
.bar::before {
  content: ' ';
  display: block;
  width: 100%;
  background: #e02200;
  height: 0.4rem;
  position: absolute;
  top: -1rem;
  left: 0;
}
p.bar {
  position: relative;
  color: #e02200;
}
p.summary {
  margin-top: 0.4rem;
}
</style>
