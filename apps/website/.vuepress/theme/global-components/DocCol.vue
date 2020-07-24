<template>
  <div class="docs-block clr-col">
    <DocInset :height="demoHeight">
      <slot></slot>
    </DocInset>
    <p class="summary" v-if="summary" v-html="summary"></p>
  </div>
</template>

<script>
export default {
  name: 'DocCol',
  props: {
    demoHeight: [Number, String],
    summary: String,
  },
};
</script>

<style scoped>
.docs-block {
  padding-top: 1rem;
  display: inline-block;
  flex-direction: column;
}
p.summary {
  margin-top: 0.4rem;
}
</style>
