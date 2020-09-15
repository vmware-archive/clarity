<!--
  - Copyright (c) 2016-2020 VMware, Inc.
  - All Rights ReserveThis software is released under MIT license.
  - The full license information can be found in LICENSE in the root directory of this project.
  -->

<template>
  <cds-button
    status="danger"
    size="sm"
    class="doc-skip-link"
    :class="{
      'clr-sr-only': hideSkipLink,
    }"
    @click="skipToContent()"
    @focus="hideSkipLink = false"
    @blur="hideSkipLink = true"
    name="Skip to content"
  >
    <slot>{{ label }}</slot>
  </cds-button>
</template>

<script>
export default {
  name: 'SkipTo',
  hideSkipLink: true,
  data: function () {
    return {
      hideSkipLink: true,
    };
  },
  props: {
    label: {
      type: String,
      default: 'Skip to main content',
    },
    toId: {
      type: String,
      default: '#content-area',
    },
  },
  methods: {
    skipToContent() {
      this.skipTarget.focus();
    },
  },
  computed: {
    skipTarget: function () {
      return document.getElementById(this.toId);
    },
  },
};
</script>

<style lang="scss">
.doc-skip-link {
  position: absolute;
  margin-left: 1.5rem;
  margin-top: 2.5rem;
}
</style>
