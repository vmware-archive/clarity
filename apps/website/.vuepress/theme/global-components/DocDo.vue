<template>
  <div class="docs-do">
    <DocInset :height="demoHeight">
      <slot></slot>
    </DocInset>
    <p class="bar" cds-text="body semibold">Do</p>
    <p class="summary" cds-text="body">{{ summary }}</p>
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
  width: 100%;
  margin: 0;
  display: inline-block;
}
.bar::before {
  content: ' ';
  display: block;
  width: 100%;
  background: #318500;
  height: 0.4rem;
  position: absolute;
  left: 0;
  top: -0.4rem;
}
p.bar {
  position: relative;
  color: #318500;
}
p.summary {
  margin-top: 0.4rem;
}
</style>
