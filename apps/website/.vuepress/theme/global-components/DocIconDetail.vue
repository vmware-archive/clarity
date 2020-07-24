<template>
  <div class="clr-col-12">
    <div class="card">
      <div class="card-block">
        <h4 class="card-title">
          {{ iconName }} <span class="aliases" v-if="hasAliases">aliases: {{ iconAliases }}</span>
        </h4>
        <div class="card-text">
          <div class="icon-snippet">
            <code class="language-html" v-html="getIconSnippet()"></code>
          </div>
          <div class="icon-variants">
            <button
              v-for="variant in variants"
              type="button"
              class="icon-variant"
              :class="{ active: variant === activeVariant }"
              @click="activateVariant(variant)"
            >
              <cds-icon :shape="iconName" :class="variant.classes" size="24"></cds-icon>
            </button>
          </div>
        </div>
      </div>
      <div class="card-footer">
        See more usage options in&nbsp;<a href="#" class="card-link">How To Use</a>
        <a class="btn btn-sm hidden-sm-down download-svg-icon-link" href="#">
          <cds-icon class="download-svg-icon" shape="download"></cds-icon> SVG ICON
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Prism from 'prismjs';
import IconInventory from '../../../data/icon-inventory';

const VARIANTS = {
  OUTLINE: { classes: null },
  HAS_BADGE: { classes: ['has-badge'] },
  HAS_ALERT: { classes: ['has-alert'] },
  SOLID: { classes: ['is-solid'] },
  SOLID_HAS_BADGE: { classes: ['is-solid', 'has-badge'] },
  SOLID_HAS_ALERT: { classes: ['is-solid', 'has-alert'] },
};

export default {
  name: 'DocIconDetail',
  props: {
    iconName: String,
  },
  data: function () {
    return {
      activeVariant: VARIANTS.OUTLINE,
    };
  },
  computed: {
    iconSnippet: function () {
      return IconInventory.allIcons[this.iconName];
    },
    iconAliases: function () {
      return IconInventory.allAliases[this.iconName];
    },
    hasAliases: function () {
      return this.iconAliases && !!this.iconAliases.length;
    },
    variants: function () {
      const variants = [VARIANTS.OUTLINE];

      if (this.iconSnippet.indexOf('can-badge') > -1) {
        variants.push(VARIANTS.HAS_BADGE);
      }
      if (this.iconSnippet.indexOf('can-alert') > -1) {
        variants.push(VARIANTS.HAS_ALERT);
      }
      if (this.iconSnippet.indexOf('has-solid') > -1) {
        variants.push(VARIANTS.SOLID);
        if (variants.indexOf(VARIANTS.HAS_BADGE) > -1) {
          variants.push(VARIANTS.SOLID_HAS_BADGE);
        }
        if (variants.indexOf(VARIANTS.HAS_ALERT) > -1) {
          variants.push(VARIANTS.SOLID_HAS_ALERT);
        }
      }

      return variants;
    },
  },
  watch: {
    iconName: function (value) {
      // when icon name changes, reset the variant to
      // the default variant
      this.activeVariant = VARIANTS.OUTLINE;
    },
  },
  methods: {
    getIconSnippet: function () {
      let code = `<cds-icon shape="${this.iconName}"`;
      let classes = [];

      if (this.activeVariant === VARIANTS.HAS_ALERT || this.activeVariant === VARIANTS.SOLID_HAS_ALERT) {
        classes.push('has-alert');
      }

      if (this.activeVariant === VARIANTS.HAS_BADGE || this.activeVariant === VARIANTS.SOLID_HAS_BADGE) {
        classes.push('has-badge');
      }

      if (
        this.activeVariant === VARIANTS.SOLID ||
        this.activeVariant === VARIANTS.SOLID_HAS_ALERT ||
        this.activeVariant === VARIANTS.SOLID_HAS_BADGE
      ) {
        classes.push('is-solid');
      }

      if (classes.length) {
        code += ` class="${classes.join(' ')}"`;
      }
      code += `></cds-icon>`;
      return Prism.highlight(code, Prism.languages.html, 'html');
    },
    activateVariant: function (variant) {
      this.activeVariant = variant;
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  margin-top: -0.15rem;
}

.card-footer {
  display: flex;

  .download-svg-icon-link {
    margin: 0 0 0 auto;

    .download-svg-icon > svg {
      fill: currentColor;
    }
  }
}

.aliases {
  font-size: 0.6rem;
  color: #666;
}

.icon-snippet {
  background-color: #f5f2f0;
  padding: 0.5rem;
  margin: 1rem 0;
  border-radius: 0.15rem;
  border: 1px solid #ccc;
}

.icon-variants {
  margin: 0.75rem 0 0.25rem;
  button.icon-variant {
    cursor: pointer;
    outline: none;
    margin: 0 0 0 0.25rem;
    &:first-child {
      margin: 0;
    }
    padding: 0.25rem;
    border: 1px dashed transparent;
    border-radius: 0.15rem;
    box-shadow: none;
    background: none;
    //outline: none;
    transition: border 0.2s ease-out;

    &.active,
    &:hover {
      border: 1px dashed #666;
    }
  }
}
</style>
