<template>
  <ClrColorListSet :colorListSet="colorListSetData" :colorListInMode="colorMode"></ClrColorListSet>
</template>

<script>
import functionalLightColorsSet from '../../../data/functional-colors-light.json';
import functionalDarkColorsSet from '../../../data/functional-colors-dark.json';

export default {
  name: 'ClrColorsFunctional',
  props: {
    colorMode: String,
  },
  computed: {
    colorListSetData: function () {
      return this.colorMode === 'dark' ? functionalDarkColorsSet : functionalLightColorsSet;
    },
  },
};
</script>
