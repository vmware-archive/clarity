<template>
  <div class="docs-do">
    <DocInset :height="demoHeight">
      <slot></slot>
    </DocInset>
    <p class="bar">Do</p>
    <p class="summary">{{ summary }}</p>
  </div>
</template>

<script>
export default {
  name: 'DocDo',
  props: {
    demoHeight: [Number, String],
    summary: String,
  },
};
</script>

<style scoped>
.docs-do {
  padding-top: 1rem;
  width: 49%;
  margin: 0 1% 0 0;
  display: inline-block;
}
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
p.bar {
  position: relative;
  color: #318500;
}
p.summary {
  margin-top: 0.4rem;
}
</style>
