<template>
  <div cds-layout="horizontal wrap:none">
    <div v-for="(value, index) of values" :key="value" :style="[itemWidthStyle]" class="palette-tile-container">
      <div cds-layout="vertical align:horizontal-stretch">
        <div
          class="palette-tile-color"
          :title="colors[index]"
          :style="[{ background: parsedColors[index] }, borderStyle, tileHeightStyle]"
        ></div>
        <div cds-layout="m-t:sm">
          <span cds-text>
            {{ value }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { varCustomCssProperty } from '../../../util/var-custom-css-property';

/**
 * @file
 *
 * Color palette tiles component.
 * Renders horizontal list of colored tiles with text label under every tile.
 */

export default {
  name: 'ColorPalette',
  props: {
    /**
     * List of text labels for every "tile" rendered.
     **/
    values: {
      type: Array,
      required: true,
    },
    /**
     * List of colors to be rendered. Length of the list should match the list of values.
     **/
    colors: {
      type: Array,
      default: () => [],
    },
    /**
     * Pass "true" to render 1px border around every tile.
     **/
    withBorder: {
      type: Boolean,
      default: false,
    },
    /**
     * Tile width, can be defined in every dimension understood by the browser.
     **/
    tileWidth: {
      type: String,
      default: '--cds-global-layout-space-xl',
    },
    /**
     * Aspect ratio.
     **/
    tileSizeRatio: {
      type: Number,
      default: 1, // for squares
    },
  },
  computed: {
    borderStyle() {
      const { withBorder } = this;

      if (withBorder) {
        return {
          borderColor: 'black',
          borderStyle: 'solid',
        };
      }

      return null;
    },
    itemWidthStyle() {
      const { tileWidth } = this;

      return {
        width: varCustomCssProperty(tileWidth),
      };
    },
    tileHeightStyle() {
      const { tileWidth, tileSizeRatio } = this;

      return {
        height: `calc(${varCustomCssProperty(tileWidth)} / ${tileSizeRatio})`,
      };
    },
    /**
     * Wrap custom properties with `var(...)`.
     * @return {string[]}
     */
    parsedColors() {
      const { colors } = this;

      return colors.map(color => {
        if (color.startsWith('--')) {
          return varCustomCssProperty(color);
        }

        return color;
      });
    },
  },
};
</script>

<style scoped lang="scss">
$border-width: var(--cds-alias-object-border-width-100);

.palette-tile {
  &-color {
    border-width: #{$border-width};
    border-left-width: 0;
  }

  &-container:first-child {
    .palette-tile-color {
      border-left-width: #{$border-width};
    }
  }
}
</style>
