<template>
  <div>
    <div class="clr-form-control">
      <label class="clr-control-label">Preview colors in: </label>
      <div class="clr-control-container clr-control-inline">
        <div class="clr-radio-wrapper">
          <input type="radio" :id="'hsl-radio-' + listSetId" value="hsl" class="clr-radio" v-model="picked" />
          <label :for="'hsl-radio-' + listSetId" class="clr-control-label">HSL</label>
        </div>
        <div class="clr-radio-wrapper">
          <input type="radio" :id="'hex-radio-' + listSetId" value="hex" class="clr-radio" v-model="picked" />
          <label :for="'hex-radio-' + listSetId" class="clr-control-label">HEX</label>
        </div>
      </div>
    </div>
    <div v-bind:class="{ 'in-dark-mode': colorListInMode === 'dark' }">
      <div class="clr-row">
        <ClrColorList v-for="colorListData in colorListSet" :colorCode="picked" :colorData="colorListData">
          <h5 class="color-list-title">{{ colorListData.name }}</h5>
        </ClrColorList>
      </div>
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
