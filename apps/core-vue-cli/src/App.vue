<template>
  <div>
    <cds-accordion>
      <cds-accordion-section :expanded="panel1Expanded" @expandedChange="expandedChange($event)">
        <cds-accordion-header>Item 1</cds-accordion-header>
        <cds-accordion-content v-if="panel1Expanded">
          <cds-accordion>
            <cds-accordion-section expanded>
              <cds-accordion-header>Item 1-1</cds-accordion-header>
              <cds-accordion-content>Content 1-1</cds-accordion-content>
            </cds-accordion-section>
          </cds-accordion>
        </cds-accordion-content>
      </cds-accordion-section>
      <cds-accordion-section>
        <cds-accordion-header>Item 2</cds-accordion-header>
        <cds-accordion-content>
          <cds-accordion>
            <cds-accordion-section expanded>
              <cds-accordion-header>Item 2-1</cds-accordion-header>
              <cds-accordion-content>Content 2-1</cds-accordion-content>
            </cds-accordion-section>
          </cds-accordion>
        </cds-accordion-content>
      </cds-accordion-section>
      <cds-accordion-section>
        <cds-accordion-header>Item 3</cds-accordion-header>
        <cds-accordion-content>Content 3</cds-accordion-content>
      </cds-accordion-section>
    </cds-accordion>

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
import '@cds/core/global.min.css';
import '@cds/city/css/bundles/default.min.css';
import '@cds/core/accordion/register.js';
import '@cds/core/input/register.js';

export default {
  data: function () {
    return {
      show: false,
      panel1Expanded: true,
    };
  },
  methods: {
    log: function (event) {
      this.show = event.detail;
    },
    expandedChange: function (event) {
      this.panel1Expanded = event.detail;
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
