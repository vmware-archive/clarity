<template>
  <div>
    <cds-radio-group layout="horizontal-inline" cds-layout="m-t:md">
      <label>Preview colors in:</label>
      <cds-radio>
        <label>HSL</label>
        <input type="radio" value="hsl" v-model="picked" />
      </cds-radio>

      <cds-radio>
        <label>HEX</label>
        <input type="radio" value="hex" class="clr-radio" v-model="picked" />
      </cds-radio>
    </cds-radio-group>

    <div v-bind:class="{ 'in-dark-mode': colorListInMode === 'dark' }" cds-layout="horizontal">
      <ClrColorList v-for="colorListData in colorListSet" :colorCode="picked" :colorData="colorListData">
        <h5 class="color-list-title">{{ colorListData.name }}</h5>
      </ClrColorList>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ClrColorListSet',
  props: {
    colorListSet: Object,
    colorListInMode: String,
  },
  computed: {
    listSetId: function () {
      return 'list-set-id-' + this._uid;
    },
  },
  data: function () {
    return {
      picked: 'hsl',
    };
  },
};
</script>

<style lang="scss" scoped>
.clr-form-control {
  flex-direction: row;
  & > .clr-control-label {
    line-height: unset;
    margin-right: 0.5rem;
  }
}
.in-dark-mode {
  margin-top: 1.2rem;
  background-color: #1b2a32;
  .clr-row {
    margin: 0;
    padding-bottom: 1.2rem;
  }
  .color-list-title {
    color: #fff;
  }
}
</style>
