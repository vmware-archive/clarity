<template>
  <div class="clr-col-md-4 clr-col-sm-6 clr-col-12" :id="iconName">
    <button
      type="button"
      class="icon-detail-trigger"
      @click="openDetail($event, iconName)"
      :class="{ 'is-active': isActive }"
    >
      <slot></slot> {{ iconName }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'DocIcon',
  props: {
    iconName: String,
    isActive: Boolean,
  },
  methods: {
    openDetail: function (event, iconName) {
      this.detailFor = iconName;
      this.locateDetailPosition(iconName);
    },
    locateDetailPosition: function (iconName) {
      let lastSameRowIconColumn = this.$el;
      let nextElSibling = lastSameRowIconColumn.nextElementSibling;
      while (nextElSibling && this._getClientRectTop(this.$el) === this._getClientRectTop(nextElSibling)) {
        lastSameRowIconColumn = nextElSibling;
        nextElSibling = nextElSibling.nextElementSibling;
      }

      this.$emit('show-icon-detail-at', {
        iconDetailFor: iconName,
        iconDetailAt: lastSameRowIconColumn.id,
      });
    },
    _getClientRectTop: function (el) {
      return Math.floor(el.getBoundingClientRect().top);
    },
  },
};
</script>

<style scoped lang="scss">
.icon-detail-trigger {
  cursor: pointer;
  outline: none;
  position: relative;
  margin: 0;
  padding: 0;
  border: none;
  border-radius: 0;
  box-shadow: none;
  background: none;
  width: 100%;
  padding: 0.75rem 0.25rem;
  text-align: left;
  &.is-active {
    border-top-left-radius: 0.15rem;
    border-top-right-radius: 0.15rem;
    border: 0.05rem solid #d6d6d6;
    border-bottom: 0 solid transparent;
    background-color: #fff;

    &:after {
      content: '';
      position: absolute;
      bottom: -0.25rem;
      left: 0;
      width: 100%;
      height: 0.5rem;
      background-color: #fff;
      z-index: 100;
    }
  }
}
</style>
