<!--
  - Copyright (c) 2016-2020 VMware, Inc.
  - All Rights ReserveThis software is released under MIT license.
  - The full license information can be found in LICENSE in the root directory of this project.
  -->

<template>
  <section>
    <h3>{{ component }}</h3>
    <p cds-text="body">{{ api.description }}</p>
    <h4>Properties</h4>
    <ul>
      <li v-for="prop in api.properties">{{ prop }}</li>
    </ul>
    <h4>CSS Properties</h4>
    <ul>
      <li v-for="prop in api.cssProperties">{{ prop }}</li>
    </ul>
    <h4>Events</h4>
    <ul>
      <li v-for="event in api.events">{{ event }}</li>
    </ul>
    <h4>Slots</h4>
    <ul>
      <li v-for="slot in api.slots">{{ slot }}</li>
    </ul>
  </section>
</template>

<script>
import API from '@clr/core/custom-elements.json';

export default {
  name: 'DocWebComponentAPI',
  props: ['component'],
  computed: {
    items: function () {
      // For some reason there are duplicate entries in the web component API so we find the first one.
      let api = API.tags.find(tag => tag.name === this.component);
      console.log('instance api', api);
      console.log('web component API', API);
      console.log('instance arg', this.component);
      console.log(api.description);
    },
  },
  data: function () {
    return {
      api: API.tags.find(tag => tag.name === this.component),
    };
  },
};
</script>
