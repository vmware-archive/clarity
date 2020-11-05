<template>
  <div class="docs-dont">
    <DocInset :height="demoHeight">
      <slot></slot>
    </DocInset>
    <p class="bar" cds-text="body semibold">Don't</p>
    <p class="summary" cds-text="body">{{ summary }}</p>
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
  width: 100%;
  margin: 0;
  display: inline-block;
}
.bar::before {
  content: ' ';
  display: block;
  width: 100%;
  background: #e02200;
  height: 0.4rem;
  position: absolute;
  left: 0;
  top: -0.4rem;
}
p.bar {
  position: relative;
  color: #e02200;
}
p.summary {
  margin-top: 0.4rem;
}
</style>
