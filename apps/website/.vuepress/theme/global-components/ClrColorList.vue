<template>
  <div class="clr-col-md-6 clr-col-lg-4 clr-col-12">
    <!-- SLOT FOR COLOR LIST TITLE -->
    <slot></slot>
    <ul class="swatch-list">
      <li
        v-for="(color, index) in colors"
        v-bind:class="{ copied: color.isCopied, 'in-dark-mode': isColorInDarkMode(color) }"
        v-bind:style="{ backgroundColor: getColorInCode(color) }"
      >
        <div
          class="color"
          @click="
            copyText(getColorInCode(color));
            showCopied(color);
          "
        >
          <div v-if="color.bullet" class="bullet" aria-label="Base Palette Color">•</div>
          <div v-else class="bullet"></div>
          <div class="weight">{{ color.weight }}</div>
          <div class="color-code-container">
            <div class="color-code">
              <cds-icon class="copy-icon" shape="copy"></cds-icon>
              {{ getColorInCode(color) }}
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import ColorUtils from '../util/color-utils';
import ClipboardCopy from '../util/clipboard-copy';

export default {
  name: 'ClrColorList',
  props: {
    colorData: Object,
    colorCode: String,
  },
  data: function () {
    return {
      colors: this.colorData.colors,
    };
  },
  methods: {
    showCopied: function (color) {
      this.$set(color, 'isCopied', true);
      setTimeout(() => {
        this.$set(color, 'isCopied', false);
      }, 1000);
    },
    getColorInCode: function (color) {
      if (this.colorCode === 'hsl') {
        return ColorUtils.getHsl(color);
      } else if (this.colorCode === 'hex') {
        return ColorUtils.getHex(color);
      }
    },
    isColorInDarkMode: function (color) {
      return color.weight >= 600 || color.text === 'light';
    },
    copyText: ClipboardCopy.copyText,
  },
};
</script>

<style lang="scss" scoped>
.swatch-list {
  border-radius: 0.25rem;
  padding: 0.25rem 0;
  font-size: 0.75rem;

  li:first-child {
    border-radius: 0.125rem 0.125rem 0 0;
  }

  li:last-child {
    border-radius: 0 0 0.125rem 0.125rem;
  }

  li {
    position: relative;
    list-style: none;
    color: var(--cds-global-color-gray-1000, #000);
  }

  li.in-dark-mode {
    color: var(--cds-global-color-gray-0, #fff);
  }

  .copy-icon {
    opacity: 0;
    transition: opacity 0.2s ease-out;
    --color: var(--cds-global-color-gray-1000, #000);
  }

  .in-dark-mode .copy-icon {
    --color: var(--cds-global-color-gray-0, #fff);
  }

  .color {
    display: grid;
    padding: 0.375rem;
    grid-template-columns: 0.5rem 1rem auto 0.5rem;
    cursor: pointer;

    &:hover .copy-icon {
      opacity: 1;
    }
  }

  .color-code-container {
    text-align: right;
    position: relative;
    overflow: hidden;
    &:before {
      content: 'Copied!';
      position: absolute;
      top: 0;
      right: 0;
      transform: translateY(-100%);
      transition: transform 0.2s ease-out;
    }
  }

  .color-code {
    display: inline-block;
    transition: transform 0.2s;
  }

  .copied .color {
    .color-code-container:before {
      transform: translateY(0%);
    }
    .color-code {
      transform: translateY(100%);
    }
  }
}
</style>
