<template>
  <header class="header header-6" cds-layout="horizontal">
    <slot name="sidebar-toggle"></slot>
    <div class="branding">
      <RouterLink :to="$localePath" class="nav-link">
        <img class="logo" src="/images/clarity-logo.svg" :alt="$siteTitle" />
        <span v-if="$siteTitle" ref="siteName" class="title" :class="{ 'can-hide': $site.themeConfig.logo }">{{
          $siteTitle
        }}</span>
      </RouterLink>
      <cds-divider
        orientation="vertical"
        cds-layout="p-r:md p-l:md p-t:lg p-b:lg display:none display@md:inline"
      ></cds-divider>
      <!-- TO BE REPLACED WITH CORE DROPDOWN WHEN AVAILABLE -->
      <div cds-layout="vertical align:vertical-center m-t:md display:none display@md:inline">
        <div id="backdrop" @click="dropdownOpen = false" :class="{ open: dropdownOpen }"></div>
        <div class="dropdown" :class="{ open: dropdownOpen }">
          <cds-button size="sm" @click="dropdownOpen = !dropdownOpen" style="--font-size: 11px;"
            >Clarity Core <cds-icon shape="caret" direction="down" size="12"></cds-icon
          ></cds-button>
          <div class="dropdown-menu">
            <a :href="currentPage" class="dropdown-item" target="_blank"
              >Clarity Angular documentation <cds-icon shape="pop-out" size="16"></cds-icon
            ></a>
            <div class="dropdown-divider" role="separator"></div>
            <a href="https://adoption.clarity.design/differences" class="dropdown-item" target="_blank"
              >What are the differences <cds-icon shape="pop-out" size="16"></cds-icon
            ></a>
            <a href="https://adoption.clarity.design" class="dropdown-item" target="_blank"
              >Adoption guide <cds-icon shape="pop-out" size="16"></cds-icon
            ></a>
          </div>
        </div>
      </div>
    </div>

    <div class="header-nav"></div>

    <div cds-layout="align:right">
      <template>
        <AlgoliaSearchBox v-if="isAlgoliaSearch" :options="algolia" />
        <SearchBox v-else-if="$site.themeConfig.search !== false && $page.frontmatter.search !== false" />
      </template>
    </div>
  </header>
</template>

<script>
import AlgoliaSearchBox from '@AlgoliaSearchBox';
import SearchBox from '@SearchBox';
import redirectMap from '../../public/redirect-map.json';

export default {
  name: 'Navbar',

  components: {
    SearchBox,
    AlgoliaSearchBox,
  },

  data() {
    return {
      linksWrapMaxWidth: null,
      dropdownOpen: false,
    };
  },

  computed: {
    algolia() {
      return this.$themeLocaleConfig.algolia || this.$site.themeConfig.algolia || {};
    },

    isAlgoliaSearch() {
      return this.algolia && this.algolia.apiKey && this.algolia.indexName;
    },

    currentPage() {
      const path = redirectMap.find(item => this.$page.path === item.core);
      return `https://angular.clarity.design${path ? path.angular : ''}`;
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
  margin-right: 0.55rem;
}
.main-container .header .branding {
  max-width: none;
}
.header .branding cds-icon {
  margin-right: 0;
}
.header .dropdown {
  margin-top: 0.2rem;
}
.header .dropdown-menu {
  z-index: 9999999;
}
.header .dropdown-menu cds-icon {
  --color: var(--clr-dropdown-text-color);
}
#backdrop {
  position: absolute;
  display: none;
  z-index: 9999998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  &.open {
    display: block;
  }
}

// Search override: hide the divider
.header .search-box + .settings::after {
  display: none;
}
</style>
