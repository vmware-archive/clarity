<template>
  <a :href="path" :target="target" :aria-label="`Go to ${title} documentation page`">
    <section cds-layout="vertical" role="link" class="item-overview">
      <h2 cds-text="section">
        <div cds-layout="horizontal gap:md p:lg align:center">
          <a :href="path" :target="target"> {{ title }} </a>
          <span role="status" v-if="isNew" class="badge badge-info">new</span>
        </div>
      </h2>
      <div cds-layout="align:center p:md">
        <slot></slot>
      </div>
      <slot name="footer"></slot>
    </section>
  </a>
</template>

<script>
export default {
  name: 'ItemOverview',
  props: ['title', 'path', 'target', 'isNew'],
};
</script>

<style lang="scss" scoped>
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
  border: 0.0625rem solid var(--cds-token-color-neutral-400); // 1px
  border-radius: 0.1875rem;

  :hover {
    cursor: pointer;
  }
}

a {
  color: inherit;
  text-decoration: none;
}

img {
  width: 100%;
  height: 5rem;
}
</style>
