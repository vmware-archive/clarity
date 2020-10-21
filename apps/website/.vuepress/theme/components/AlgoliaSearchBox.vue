<template>
  <form class="search">
    <label for="algolia-search-input">
      <input id="algolia-search-input" type="text" placeholder="Search for Components..." />
    </label>
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
            inputSelector: '#algolia-search-input',
            // #697 Make docsearch work well at i18n mode.
            algoliaOptions: Object.assign(
              {
                page: 1,
                hitsPerPage: 10,
              },
              algoliaOptions
            ),
            autocompleteOptions: {
              // debug: true, // Turn this on to have the dropdown stay open
            },
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
.algolia-autocomplete .ds-dropdown-menu {
  line-height: 1rem;
  z-index: 5000 !important;
}

.algolia-autocomplete
  .algolia-docsearch-suggestion.algolia-docsearch-suggestion__main
  .algolia-docsearch-suggestion--category-header {
  display: none;
}
</style>
