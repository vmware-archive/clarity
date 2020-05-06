<template>
  <div>
    <cds-alert status="warning" :closable="true" v-if="show" @closedChange="show = false">
      Hello World
    </cds-alert>

    <cds-button status="success" @click="show = true">Open Alert</cds-button>
  </div>
</template>

<script>
import '@clr/core/global.min.css';
import '@clr/city/css/bundles/default.min.css';

export default {
  data: function () {
    return {
      show: false,
    };
  },
  methods: {
    log: function (event) {
      this.show = event.detail;
    },
  },
};
</script>

<style>
body {
  font-family: 'Clarity City', 'Avenir Next', 'Helvetica Neue', Arial, sans-serif;
}

cds-alert {
  --background: #f5e5bf;
  --color: #2d2d2d;
}
</style>
