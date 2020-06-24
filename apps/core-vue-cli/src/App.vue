<template>
  <div>
    <cds-alert-group status="warning" v-if="show">
      <cds-alert :closable="true" @closeChange="show = false">
        Hello World
      </cds-alert>
    </cds-alert-group>

    <cds-button status="success" @click="show = true">Open Alert</cds-button>

    <cds-input validate>
      <label>text input</label>
      <input placeholder="placeholder text" required />
      <cds-control-message error="valueMissing">required</cds-control-message>
    </cds-input>
  </div>
</template>

<script>
import 'normalize.css/normalize.css';
import '@clr/core/global.min.css';
import '@clr/city/css/bundles/default.min.css';
import '@clr/core/input/register.js';

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
cds-alert {
  --background: #f5e5bf;
  --color: #2d2d2d;
}
</style>
