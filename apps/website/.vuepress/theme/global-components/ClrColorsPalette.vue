<template>
  <ClrColorListSet :colorListSet="colorListSetData"></ClrColorListSet>
</template>

<script>
import paletteColorsSet from '../../../data/palette-colors.json';

export default {
  name: 'ClrColorsPalette',
  computed: {
    colorListSetData: function () {
      return paletteColorsSet;
    },
  },
};
</script>
