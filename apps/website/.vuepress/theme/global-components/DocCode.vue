<template>
  <div class="code-wrapper" :class="{ expanded: state }" v-bind:aria-expanded="state ? 'true' : 'false'">
    <button class="btn btn-primary btn-sm toggle-button" @click="toggleState()" v-if="showToggle">
      {{ state ? 'hide' : 'show' }} code
    </button>
    <div
      class="code"
      v-bind:style="{ height: this.getHeight() }"
      ref="code-snippet"
      v-bind:aria-hidden="state ? 'false' : 'true'"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script>
const COLLAPSED_HEIGHT = 75;

export default {
  name: 'DocCode',
  mounted: function () {
    if (this.$refs['code-snippet'].querySelector('code').offsetHeight < COLLAPSED_HEIGHT * 2) {
      this.state = true;
      this.showToggle = false;
    }
  },
  data: function () {
    return {
      showToggle: true,
      state: false,
    };
  },
  methods: {
    toggleState: function () {
      this.state = !this.state;
    },
    getHeight: function () {
      if (!this.showToggle) {
        return;
      }
      if (this.state) {
        return this.$refs['code-snippet'].querySelector('pre').offsetHeight + 'px';
      } else {
        return COLLAPSED_HEIGHT + 'px';
      }
    },
  },
};
</script>

<style lang="scss">
.code-wrapper {
  position: relative;
  padding: 0.6rem;
  margin-top: 0.25rem;
  border: 1px solid #ccc;
  border-radius: 0.15rem;
  background-color: var(--cds-global-color-gray-0);

  &.expanded:after {
    display: none;
  }

  &:after {
    content: '';

    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    background: linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.85));
    z-index: 0;

    display: block;
  }

  .toggle-button {
    position: absolute;
    right: 0;
    top: 0;
    color: var(--cds-global-color-gray-800);
    margin: 0;
    padding: 0;
    outline: none 0;
    box-shadow: none;
    background: #dedede;

    width: 4.8rem;
    height: 1.2rem;

    border: none;
    border-radius: 0;
    border-bottom: 1px solid #ccc;
    border-left: 1px solid #ccc;
    border-bottom-left-radius: 0.15rem;

    z-index: 1;

    &:hover {
      background: #ccc;
      color: inherit;
    }
    &:active {
      box-shadow: none;
    }
  }

  .code {
    transition: height 0.3s ease-in-out;
    position: relative;
    overflow: hidden;
    pre {
      line-height: 1.2rem;
      margin: 0;
      padding: 0;
      border: none;
      background: none;

      code {
        // prism theme color override
        color: var(--cds-global-color-gray-700);
      }
    }
  }
}
</style>
