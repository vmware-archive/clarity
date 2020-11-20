<template>
  <main class="page" cds-layout="p-l:md p-l@sm:xl">
    <PageSubnav v-bind="{ sidebarItems }" />
    <Content class="theme-default-content" />
    <Footer></Footer>
    <slot name="nav-toc" />
  </main>
</template>

<script>
import PageNav from '@theme/components/PageNav';
import PageSubnav from '@theme/components/PageSubnav';
import Footer from '@theme/components/Footer';

export default {
  components: { Footer, PageNav, PageSubnav },
  props: ['sidebarItems'],
  computed: {
    shouldShowTOC() {
      return this.$frontmatter.toc ? true : false;
    },
  },
};
</script>

<style lang="scss">
.page {
  max-width: 48rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  padding: var(--cds-global-space-9) var(--cds-global-space-9) 0;

  @media (min-width: 768px) {
    width: calc(100% - 10rem);
  }
}
.nav-toc-container {
  li {
    ul li {
      padding-top: var(--cds-global-space-4);
    }
  }
}
</style>
