<template>
  <div class="summary">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ClrSummary',
};
</script>

<style scoped lang="scss">
.summary {
  padding: 2rem;
  margin-top: 1rem;
  background: #eeeeee;
  border-left: 0.5rem solid var(--clr-nav-active-box-shadow-color, #0072a3);

  p {
    margin: 0;
  }
}
</style>
