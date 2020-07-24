<template>
  <div class="main-container" cds-layout="vertical align:stretch">
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
      <div
        id="content-area"
        :class="{ 'content-area': true, 'home-page': $page.frontmatter.home }"
        cds-layout="pl@sm:md"
      >
        <Home v-if="$page.frontmatter.home" class="make-it-scrollable" />
        <div class="page-wrapper" v-else>
          <Page :sidebar-items="sidebarItems">
            <template #nav-toc>
              <NavToc v-if="shouldShowTOC" cds-layout="p-t:sm p-b:sm display@md:none" />
            </template>
          </Page>
          <NavToc :sticky="true" v-if="shouldShowTOC" cds-layout="p@md:lg display:none display@md:block" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
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
</style>

<script>
import Home from '@theme/components/Home';
import Navbar from '@theme/components/Navbar';
import NavToc from '@theme/components/NavToc';
import Page from '@theme/components/Page';
import Sidebar from '@theme/components/Sidebar';
import Footer from '@theme/components/Footer';
import { resolveSidebarItems } from '../util';

export default {
  name: 'Layout',

  components: {
    Home,
    Page,
    Sidebar,
    Navbar,
    NavToc,
    Footer,
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
    this.$router.afterEach(() => {
      this.isSidebarOpen = false;
    });
  },

  methods: {
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen;
    },
  },
};
</script>
