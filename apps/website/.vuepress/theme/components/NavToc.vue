<template>
  <div class="nav-toc-container" :class="{ 'has-sticky-nav-toc': sticky }" cds-layout="p@md:lg">
    <nav class="nav-toc">
      <b class="title">Content</b>
      <TOC />
    </nav>
  </div>
</template>

<script>
export default {
  props: {
    sticky: { type: Boolean, default: false },
  },
};
</script>

<style lang="scss">
.nav-toc-container {
  position: relative;
  max-width: 12rem;
  width: 100%;

  &.has-sticky-nav-toc {
    height: calc(100vh - 8.1rem);
    .nav-toc {
      position: fixed;
      top: 8.1rem;
      max-height: calc(100vh - 3rem);
      overflow-y: auto;
      padding-bottom: 8.1rem;
      padding-left: 0.15rem;
      max-width: inherit;
    }
  }

  .title {
    padding-left: 6px;
    text-transform: uppercase;
  }

  ul {
    padding: 0;
    margin: 0;
  }
  li {
    list-style: none;
    padding-top: 0.5rem;
    a {
      padding-left: var(--cds-token-space-size-4);
      display: inline-block;
      color: var(--clr-nav-link-color, #8c8c8c);
      &:hover {
        text-decoration: none;
      }
      &:visited {
        color: var(--clr-nav-link-color, #8c8c8c);
      }
      &.router-link-active {
        color: var(--clr-nav-link-active-color, #000);
      }
    }
  }

  li a.router-link-active {
    position: relative;
    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: -3px;
      width: 3px;
      height: 100%;
      background-color: #0079b8;
    }
  }
  li li {
    padding-top: 0;
    a {
      padding-left: var(--cds-token-space-size-8);
    }
  }
}
</style>
