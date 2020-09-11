<template>
  <section class="item-overview">
    <h2>
      <a :href="path" :target="target"> {{ title }} </a>
      <span v-if="isNew" class="badge badge-info">new</span>
    </h2>
    <div ro0e="img">
      <slot></slot>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ItemOverview',
  props: ['title', 'path', 'target', 'isNew'],
};
</script>

<style lang="scss">
.badge {
  border-radius: 0.2rem;
  text-transform: uppercase;

  border-top-right-radius: 0.1rem 0.1rem;
  border-bottom-right-radius: 0.1rem 0.1rem;
  border-right: 0.4rem solid var(--clr-color-neutral-50);
  border-top: 0.4rem solid transparent;
  border-bottom: 0.4rem solid transparent;
}

.item-overview {
  display: flex;
  flex-direction: column;

  width: 15rem;
  height: 10rem;
  border: 0.0625rem solid #d7d7d7; // 1px
  box-sizing: border-box;
  box-shadow: 0px 0.187rem 0px #d7d7d7;
  border-radius: 0.187rem; // 3px

  h2 {
    padding-left: 1rem;
    padding-bottom: 0.5rem;
    font-size: var(--cds-token-typography-title-font-size);
    line-height: var(--cds-token-typography-body-line-height);
  }

  div {
    height: 100%;
    background-color: grey;
  }
}
</style>
