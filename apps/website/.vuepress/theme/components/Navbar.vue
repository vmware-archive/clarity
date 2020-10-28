<template>
  <header class="header header-6">
    <slot name="sidebar-toggle"></slot>
    <div class="branding">
      <RouterLink :to="$localePath" class="nav-link">
        <img class="logo" src="/images/clarity-logo.svg" :alt="$siteTitle" />
        <span v-if="$siteTitle" ref="siteName" class="title" :class="{ 'can-hide': $site.themeConfig.logo }">{{
          $siteTitle
        }}</span>
      </RouterLink>
    </div>

    <div class="header-nav"></div>

    <template>
      <AlgoliaSearchBox v-if="isAlgoliaSearch" :options="algolia" />
      <SearchBox v-else-if="$site.themeConfig.search !== false && $page.frontmatter.search !== false" />
    </template>

    <div class="settings">
      <a
        href="https://clarity.design"
        class="btn btn-outline btn-inverse"
        cds-layout="m-t:md display:none display@md:block"
      >
        Return to Current Website <clr-icon shape="pop-out"></clr-icon>
      </a>
    </div>
  </header>
</template>

<script>
import AlgoliaSearchBox from '@AlgoliaSearchBox';
import SearchBox from '@SearchBox';

export default {
  name: 'Navbar',

  components: {
    SearchBox,
    AlgoliaSearchBox,
  },

  data() {
    return {
      linksWrapMaxWidth: null,
    };
  },

  computed: {
    algolia() {
      return this.$themeLocaleConfig.algolia || this.$site.themeConfig.algolia || {};
    },

    isAlgoliaSearch() {
      return this.algolia && this.algolia.apiKey && this.algolia.indexName;
    },
  },

  mounted() {
    if (typeof window !== 'undefined') {
      const MOBILE_DESKTOP_BREAKPOINT = 719; // refer to config.styl
      const NAVBAR_VERTICAL_PADDING = parseInt(css(this.$el, 'paddingLeft')) + parseInt(css(this.$el, 'paddingRight'));
      const handleLinksWrapWidth = () => {
        if (document.documentElement.clientWidth < MOBILE_DESKTOP_BREAKPOINT) {
          this.linksWrapMaxWidth = null;
        } else {
          this.linksWrapMaxWidth =
            this.$el.offsetWidth -
            NAVBAR_VERTICAL_PADDING -
            ((this.$refs.siteName && this.$refs.siteName.offsetWidth) || 0);
        }
      };
      handleLinksWrapWidth();
      if (typeof window !== 'undefined') {
        window.addEventListener('resize', handleLinksWrapWidth, false);
      }
    }
  },
};

function css(el, property) {
  // NOTE: Known bug, will return 'auto' if style value is 'auto'
  const win = el.ownerDocument.defaultView;
  // null means not to return pseudo styles
  return win.getComputedStyle(el, null)[property];
}
</script>

<style lang="scss">
.header .search {
  opacity: 1;
}
.header .logo {
  margin-right: 10px;
}
.main-container .header .branding {
  max-width: none;
}
</style>
