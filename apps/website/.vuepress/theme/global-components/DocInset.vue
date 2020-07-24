<template>
  <div class="inset" :style="{ height: getHeight() }" :class="{ left: align === 'left' }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'DocInset',
  methods: {
    getHeight: function () {
      return this.height + 'px';
    },
  },
  props: ['height', 'align'],
};
</script>

<style scoped>
.inset {
  background: #e8e8e8;
  border-radius: 3px;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.inset.left {
  justify-content: start;
}
.inset img {
  max-width: 100%;
}
</style>
