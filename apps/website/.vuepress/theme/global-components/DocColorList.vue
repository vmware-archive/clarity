<template>
  <div cds-layout="grid gap:md m-t:lg" style="--cds-global-layout-grid-cols: 14;">
    <div cds-layout="col:2 vertical m-t:md" v-for="color in colors" :key="color">
      <template v-if="color !== 'black'">
        <span cds-text="caption bold">{{ color.split('-').join(' ') | uppercase }}</span>
        <div
          class="swatch"
          cds-layout="horizontal m-t:md p:md"
          :style="
            'border: 1px solid var(--cds-global-color-' +
            color +
            '-' +
            weight +
            '); background-color: var(--cds-global-color-' +
            color +
            '-' +
            weight +
            '); color: var(--cds-global-color-' +
            useWhiteText(color, weight) +
            ');'
          "
          v-for="weight in weights"
          :key="weight"
          @click="copyText('--cds-global-color-' + color + '-' + weight)"
        >
          {{ weight }}
        </div>
      </template>
      <template v-if="color == 'black'">
        <span cds-text="caption bold">&nbsp;</span>
        <div
          class="swatch"
          cds-layout="horizontal m-t:md p:md"
          style="border: 1px solid var(--cds-global-color-black); background-color: var(--cds-global-color-white);"
          @click="copyText('--cds-global-color-white')"
        >
          White
        </div>
        <div
          class="swatch"
          cds-layout="horizontal m-t:md p:md"
          style="border: 1px solid var(--cds-global-color-black); background-color: var(--cds-global-color-black);"
          @click="copyText('--cds-global-color-black')"
        >
          Black
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import ClipboardCopy from '../util/clipboard-copy';

export default {
  name: 'DocColorList',
  props: {
    colors: Array,
  },
  data: function () {
    return {
      weights: [1000, 900, 800, 700, 600, 500, 400, 300, 200, 100, 50],
    };
  },
  methods: {
    useWhiteText: function (color, weight) {
      let tippingPoint = 600;
      if (['lime', 'yellow', 'ochre'].indexOf(color) > -1) tippingPoint = 800;
      if (['blue', 'aqua', 'jade', 'green', 'tangerine', 'red'].indexOf(color) > -1) tippingPoint = 700;
      if (['lavender'].indexOf(color) > -1) tippingPoint = 500;
      return weight >= tippingPoint ? 'white' : 'black';
    },
    copyText: ClipboardCopy.copyText,
  },
};
</script>

//
<style lang="scss" scoped>
.swatch {
  border-radius: var(--cds-alias-object-border-radius-100);
}
</style>
