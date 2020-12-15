<template>
  <div class="main-container" cds-layout="vertical align:stretch" cds-text="body">
    <SkipTo toId="content-area" label="Skip to main content" />
    <SkipTo toId="sidenav" label="Skip to navigation" />
    <SkipTo toId="algolia-search-input" label="Skip to search" />
    <Navbar v-if="shouldShowNavbar">
      <template #sidebar-toggle>
        <button
          type="button"
          class="header-hamburger-trigger"
          @click="toggleSidebar()"
          aria-label="Open side navigation"
        >
          <cds-icon class="hamburger-icon" shape="bars" size="24" inverse></cds-icon>
        </button>
      </template>
    </Navbar>

    <div class="content-container" cds-layout="horizontal align:vertical-stretch no-wrap">
      <Sidebar :items="sidebarItems" :isSidebarOpen="isSidebarOpen" @isSidebarOpenChange="toggleSidebar()" />
      <div id="content-area" tabindex="-1" :class="{ 'content-area': true, 'home-page': $page.frontmatter.home }">
        <Home v-if="$page.frontmatter.home" class="make-it-scrollable" />
        <div v-if="is404" class="make-it-scrollable" cds-layout="horizontal gap:md align:horizontal-center">
          <slot></slot>
        </div>
        <div class="page-wrapper" v-if="!$page.frontmatter.home && !is404">
          <Page :sidebar-items="sidebarItems">
            <template #nav-toc>
              <NavToc v-if="shouldShowTOC" />
            </template>
          </Page>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page-wrapper {
  display: flex;
  max-width: 60rem;
  flex-direction: row;
}

.content-area {
  display: flex;
  flex-direction: column;
}

.content-area.home-page {
  padding: 0;
}

.header-hamburger-trigger {
  .hamburger-icon {
    cursor: inherit;
  }
}
.main-container .content-container .content-area {
  padding: 0;
  overflow-x: hidden;
}
</style>

<script>
import Home from '@theme/components/Home';
import Navbar from '@theme/components/Navbar';
import NavToc from '@theme/components/NavToc';
import Page from '@theme/components/Page';
import Sidebar from '@theme/components/Sidebar';
import SkipTo from '@theme/components/SkipTo';
import { resolveSidebarItems } from '../util';
import { scrollToGuard } from '../util/route-guards';

export default {
  name: 'Layout',

  props: {
    is404: { type: Boolean, default: false },
  },

  components: {
    Home,
    Page,
    Sidebar,
    Navbar,
    NavToc,
    SkipTo,
  },

  data() {
    return {
      isSidebarOpen: false,
      year: new Date().getFullYear(),
    };
  },

  computed: {
    shouldShowTOC() {
      return this.$frontmatter.toc ? true : false;
    },
    shouldShowNavbar() {
      const { themeConfig } = this.$site;
      const { frontmatter } = this.$page;
      if (frontmatter.navbar === false || themeConfig.navbar === false) {
        return false;
      }
      return this.$title || themeConfig.logo || themeConfig.repo || themeConfig.nav || this.$themeLocaleConfig.nav;
    },

    shouldShowSidebar() {
      const { frontmatter } = this.$page;
      return !frontmatter.home && frontmatter.sidebar !== false && this.sidebarItems.length;
    },

    sidebarItems() {
      return resolveSidebarItems(this.$page, this.$page.regularPath, this.$site, this.$localePath);
    },
  },

  mounted() {
    this.$nextTick(() => {
      if (this.$route.hash) {
        scrollToGuard(this.$route, false);
      }
    });
    this.$router.afterEach(to => {
      this.isSidebarOpen = false;
      this.$nextTick(() => {
        scrollToGuard(to);
      });
    });
  },

  methods: {
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen;
    },
  },
};
</script>
