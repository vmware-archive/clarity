<template>
  <form id="search" class="algolia-search-wrapper search-box" role="search">
    <label for="algolia-search-input" cds-layout="display:screen-reader-only">Search Clarity</label>
    <input id="algolia-search-input" class="search-query" :placeholder="placeholder" />
  </form>
</template>

<script>
export default {
  name: 'AlgoliaSearchBox',

  props: ['options'],

  data() {
    return {
      placeholder: undefined,
    };
  },

  watch: {
    $lang(newValue) {
      this.update(this.options, newValue);
    },

    options(newValue) {
      this.update(newValue, this.$lang);
    },
  },

  mounted() {
    this.initialize(this.options, this.$lang);
    this.placeholder = this.$site.themeConfig.searchPlaceholder || '';
  },

  methods: {
    initialize(userOptions, lang) {
      Promise.all([
        import(/* webpackChunkName: "docsearch" */ 'docsearch.js/dist/cdn/docsearch.min.js'),
        import(/* webpackChunkName: "docsearch" */ 'docsearch.js/dist/cdn/docsearch.min.css'),
      ]).then(([docsearch]) => {
        docsearch = docsearch.default;
        const { algoliaOptions = {} } = userOptions;
        docsearch(
          Object.assign({}, userOptions, {
            // debug: true, // Turn this on to have the dropdown stay open
            inputSelector: '#algolia-search-input',
            // #697 Make docsearch work well at i18n mode.
            algoliaOptions: Object.assign(
              {
                page: 1,
                hitsPerPage: 10,
              },
              algoliaOptions
            ),
            handleSelected: (input, event, suggestion) => {
              const { pathname, hash } = new URL(suggestion.url);
              const routepath = pathname.replace(this.$site.base, '/');
              this.$router.push(`${routepath}${hash}`);
            },
          })
        );
      });
    },

    update(options, lang) {
      this.$el.innerHTML = '<input id="algolia-search-input" class="search-query">';
      this.initialize(options, lang);
    },
  },
};
</script>

<style lang="scss">
// Note: there is much important here. 🤮
// I'm not 100% sure how to properly theme the algolia search widget.
// TODO: properly theme the search widget or re-write it's functionality with cds layouts and tokens
/* Override @cds/core, @clr/ui && the baked in styles that ship with the search widget for desktop search */
header .search-box,
header .search,
.header .search-box,
.header .search {
  z-index: 100000;
  opacity: 1;
}

.search-box input {
  // Get rid of the default borders and backgrounds
  // Make it look / behave close to Clarity forms
  border-radius: unset !important;
  border-top: none !important;
  border-left: none !important;
  border-right: none !important;
  border-bottom: 0.05rem solid #acbac3;
  background: #00364d url(/assets/img/search.83621669.svg) 0.6rem 0.5rem no-repeat !important;
  background-size: 1rem !important;
  color: #eaedf0 !important;
  min-width: 10rem;
  &:focus {
    border-bottom-color: #4aaed9 !important;
    border-bottom-width: 0.1rem;
  }
}

.header .branding + .search-box::after {
  // I don't want this divider on mobile but I want the space it gives
  display: none;
}
/* End Overrides for desktop search */

/* Overrides for mobile search */
@media all and (max-width: 768px) {
  header .search-box,
  header .search,
  .header .search-box,
  .header .search {
    // Re-position the search input
    position: absolute !important;
    right: 0 !important;
  }

  .algolia-autocomplete.algolia-autocomplete-left .ds-dropdown-menu {
    position: absolute !important;
    right: 0 !important;
    width: 100vw;
    max-width: 300px;
    min-width: 300px;
  }

  .search-query {
    color: #fafafa !important;
    background-color: #121212 !important;
    vertical-align: top;

    &.ds-input,
    &.ds-hint {
      border: unset !important;
      border-radius: unset !important;

      &:active,
      &:focus {
        width: 35vw !important;
        background: #00364d url(/assets/img/search.83621669.svg) 0.6rem 0.5rem no-repeat !important;
        background-size: 1rem !important;
      }
    }
  }

  .search-box input {
    left: 0 !important;
    min-width: unset !important;
  }

  [class^='ds-dataset-'] {
    position: absolute !important;
    overflow: auto !important;
    right: 0 !important;
    width: 300px !important;
    border-radius: 0;
    max-height: calc(100vh - 3rem);
  }
}
/* End Overrides for mobile search */
</style>
