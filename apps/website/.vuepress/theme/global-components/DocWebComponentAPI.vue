<!--
  - Copyright (c) 2016-2020 VMware, Inc.
  - All Rights ReserveThis software is released under MIT license.
  - The full license information can be found in LICENSE in the root directory of this project.
  -->

<template>
  <div v-if="CustomElement">
    <slot></slot>
    <section v-if="properties">
      <slot name="properties" v-if="properties"></slot>
      <table cds-layout="m-y:sm" class="table">
        <tr>
          <th class="left">Name</th>
          <th class="left">Type</th>
          <th class="left">Description</th>
        </tr>

        <tr v-for="prop in properties">
          <td class="left">{{ prop.name }}</td>
          <td class="left">{{ prop.type && prop.type.text ? prop.type.text : '' }}</td>
          <td class="left">{{ prop.description }}</td>
        </tr>
      </table>
    </section>

    <section v-if="cssProperties">
      <slot name="cssProperties" v-if="cssProperties"></slot>
      <table cds-layout="m-y:sm" class="table">
        <tr>
          <th class="left">Name</th>
        </tr>

        <tr v-for="cssProp in cssProperties">
          <td class="left">{{ cssProp.name }}</td>
        </tr>
      </table>
    </section>

    <section v-if="events">
      <slot name="events" v-if="events"></slot>
      <table cds-layout="m-y:sm" class="table">
        <tr>
          <th class="left">Name</th>
          <th class="left">Desription</th>
        </tr>

        <tr v-for="event in events">
          <td class="left">{{ event.name }}</td>
          <td class="left">{{ event.description }}</td>
        </tr>
      </table>
    </section>

    <section v-if="slots">
      <slot name="slots" v-if="slots"></slot>
      <table cds-layout="m-y:sm" class="table">
        <tr>
          <th class="left">Name</th>
          <th class="left">Description</th>
        </tr>

        <tr v-for="slot in slots">
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
  data: function () {
    const CustomElement = API.modules
      .filter(module => module.path.includes('element.js'))
      .find(
        module =>
          module.declarations &&
          module.declarations[0].kind === 'class' &&
          module.declarations[0].tagName === this.component
      );

    if (CustomElement === undefined) {
      return { CustomElement };
    }

    return {
      CustomElement,
      cssProperties: CustomElement.declarations[0].cssProperties,
      properties: CustomElement.declarations[0].members.filter(member => !(member.privacy || member.kind !== 'field')),
      events: CustomElement.declarations[0].events,
      slots: CustomElement.declarations[0].slots,
    };
  },
};
</script>
