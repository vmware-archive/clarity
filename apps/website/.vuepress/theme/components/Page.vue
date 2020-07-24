<template>
  <main class="page">
    <PageSubnav v-bind="{ sidebarItems }" />

    <slot name="nav-toc" />

    <Content class="theme-default-content" />
    <PageEdit />

    <Footer></Footer>
  </main>
</template>

<script>
import PageEdit from '@theme/components/PageEdit';
import PageNav from '@theme/components/PageNav';
import PageSubnav from '@theme/components/PageSubnav';
import Footer from '@theme/components/Footer';

export default {
  components: { Footer, PageEdit, PageNav, PageSubnav },
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
  height: calc(100vh - 3rem);

  @media (min-width: 992px) {
    width: calc(100% - 10rem);
  }
}
.nav-toc-container {
  li {
    ul li {
      padding-top: var(--cds-token-space-size-4);
    }
  }
}
</style>
