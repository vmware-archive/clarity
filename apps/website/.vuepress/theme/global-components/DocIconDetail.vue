<template>
  <div cds-layout="col:12 m-t:none">
    <div class="card">
      <div class="card-block">
        <h4 class="card-title" cds-layout="horizontal gap:sm">
          <div>{{ iconName }}</div>
          <div class="aliases" v-if="hasAliases">aliases: {{ iconAliases }}</div>
          <cds-tag cds-layout="align:right" readonly>Since {{ version }}</cds-tag>
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
              :aria-label="`Demo ${iconName}, button`"
              :class="{ active: variant === activeVariant }"
              @click="activateVariant(variant)"
            >
              <cds-icon :shape="iconName" :solid="variant.solid" :badge="variant.badge" size="md"></cds-icon>
            </button>
          </div>
        </div>
      </div>
      <div class="card-footer" cds-layout="horizontal">
        See more usage options in&nbsp;<router-link to="/foundation/icons/api/">How To Use</router-link>
        <a :href="fetchIconUrl()" cds-layout="align:right">
          <cds-button size="sm" action="outline">
            <cds-icon class="download-svg-icon" shape="download"></cds-icon> SVG ICON
          </cds-button>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Prism from 'prismjs';
import IconInventory from '../../../data/icon-inventory';

const ICON_DOWNLOAD_URL = '/.netlify/functions/download-icon?';

export default {
  name: 'DocIconDetail',
  props: {
    iconName: String,
    iconSetName: String,
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
      const variants = [{}];

      this.activeVariant = variants[0];

      if (this.iconSnippet.hasOwnProperty('outlineBadged')) {
        variants.push({ badge: 'info' });
        variants.push({ badge: 'success' });
        variants.push({ badge: 'danger' });
        variants.push({ badge: 'warning' });
      }
      if (this.iconSnippet.hasOwnProperty('outlineAlerted')) {
        variants.push({ badge: 'warning-triangle' });
        variants.push({ badge: 'inherit-triangle' });
      }
      if (this.iconSnippet.hasOwnProperty('solid')) {
        variants.forEach(v => {
          variants.push({ ...v, solid: true });
        });
      }

      return variants;
    },
    version: function () {
      // We look up the icons added since v1, if we find it use that version, otherwise send v1
      const version = Object.entries(IconInventory.versionMap).find(entry => {
        if (entry[1].indexOf(this.iconName) > -1) {
          return entry[0];
        }
        return false;
      });

      return version ? version[0] : 'v1.0.0';
    },
  },
  data: function () {
    return {
      activeVariant: null,
    };
  },
  methods: {
    getIconSnippet: function () {
      let code = `<cds-icon shape="${this.iconName}"`;

      if (this.activeVariant && this.activeVariant.badge) {
        code += ` badge="${this.activeVariant.badge}"`;
      }

      if (this.activeVariant && this.activeVariant.solid) {
        code += ' solid';
      }

      code += `></cds-icon>`;
      return Prism.highlight(code, Prism.languages.html, 'html');
    },
    activateVariant: function (variant) {
      this.activeVariant = variant;
      this.fetchIconUrl();
    },
    hasSolid: function (variants) {
      const solidTest = variants.filter(v => v.includes('solid'));
      return solidTest.length > 0 ? true : false;
    },
    createSolidDownload: function (variants) {
      const hasBadge = variants.filter(v => v.includes('has-badge'));
      const hasAlert = variants.filter(v => v.includes('has-alert'));
      if (variants.length === 1) {
        // is solid
        return `${ICON_DOWNLOAD_URL}set=${this.iconSetName}&shape=${this.iconName}-solid`;
      } else if (hasBadge.length === 1) {
        // is solid + badged
        return `${ICON_DOWNLOAD_URL}set=${this.iconSetName}&shape=${this.iconName}-solid-badged`;
      } else if (hasAlert.length === 1) {
        // is solid + alerted
        return `${ICON_DOWNLOAD_URL}set=${this.iconSetName}&shape=${this.iconName}-solid-alerted`;
      }
    },
    createOutlineDownload: function (variants) {
      const hasBadge = variants.filter(v => v.includes('has-badge'));
      const hasAlert = variants.filter(v => v.includes('has-alert'));

      if (hasBadge.length === 1) {
        // is oulined + badged
        return `${ICON_DOWNLOAD_URL}set=${this.iconSetName}&shape=${this.iconName}-outline-badged`;
      } else if (hasAlert.length === 1) {
        // is outlined + alerted
        return `${ICON_DOWNLOAD_URL}set=${this.iconSetName}&shape=${this.iconName}-outline-alerted`;
      }
    },
    fetchIconUrl: function (activeVariant) {
      const variants = this.activeVariant.classes ? this.activeVariant.classes.filter(variant => variant) : [];
      if (variants.length === 0) {
        // not solid, no badge, no alert
        return `${ICON_DOWNLOAD_URL}set=${this.iconSetName}&shape=${this.iconName}-line`;
      } else if (this.hasSolid(variants)) {
        // is a solid icon download, may have badge or alert
        return this.createSolidDownload(variants);
      } else {
        // is an outline, has either badge or alert
        return this.createOutlineDownload(variants);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  margin-top: -0.6rem;
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
  background: #fafafa;
  padding: 0.5rem;
  margin: 1rem 0;
  border-radius: 0.15rem;
  border: 1px solid #ccc;

  code {
    background: inherit;
  }
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
