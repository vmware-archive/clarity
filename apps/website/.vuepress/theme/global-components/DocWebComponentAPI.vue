<!--
  - Copyright (c) 2016-2020 VMware, Inc.
  - All Rights ReserveThis software is released under MIT license.
  - The full license information can be found in LICENSE in the root directory of this project.
  -->

<template>
  <div v-if="api">
    <slot></slot>
    <section v-if="api.properties">
      <slot name="properties" v-if="api.properties"></slot>
      <table cds-layout="m-y:sm" class="table">
        <tr>
          <th class="left">Name</th>
          <th class="left">Type</th>
          <th class="left">Description</th>
        </tr>

        <tr v-for="prop in api.properties">
          <td class="left">{{ prop.name }}</td>
          <td class="left">{{ prop.type }}</td>
          <td class="left">{{ prop.description }}</td>
        </tr>
      </table>
    </section>

    <section v-if="api.cssProperties">
      <slot name="cssProperties" v-if="api.cssProperties"></slot>
      <table cds-layout="m-y:sm" class="table">
        <tr>
          <th class="left">Name</th>
        </tr>

        <tr v-for="cssProp in api.cssProperties">
          <td class="left">{{ cssProp.name }}</td>
        </tr>
      </table>
    </section>

    <section v-if="api.events">
      <slot name="events" v-if="api.events"></slot>
      <table cds-layout="m-y:sm" class="table">
        <tr>
          <th class="left">Name</th>
          <th class="left">Desription</th>
        </tr>

        <tr v-for="event in api.events">
          <td class="left">{{ event.name }}</td>
          <td class="left">{{ event.description }}</td>
        </tr>
      </table>
    </section>

    <section v-if="api.slots">
      <slot name="slots" v-if="api.slots"></slot>
      <table cds-layout="m-y:sm" class="table">
        <tr>
          <th class="left">Name</th>
          <th class="left">Description</th>
        </tr>

        <tr v-for="slot in api.slots">
          <td class="left">{{ slot.name }}</td>
          <td class="left">{{ slot.description || 'Content slot for inside the alert' }}</td>
        </tr>
      </table>
    </section>
  </div>
</template>

<script>
import API from '@cds/core/custom-elements.json';

export default {
  name: 'DocWebComponentAPI',
  props: ['component'],
  computed: {
    items: function () {
      // For some reason there are duplicate entries in the web component API so we find the first one.
      let api = API.tags.find(tag => tag.name === this.component);
    },
  },
  data: function () {
    return {
      api: API.tags.find(tag => tag.name === this.component),
    };
  },
};
</script>
