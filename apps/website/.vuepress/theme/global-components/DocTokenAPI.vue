<!--
  - Copyright (c) 2016-2020 VMware, Inc.
  - All Rights ReserveThis software is released under MIT license.
  - The full license information can be found in LICENSE in the root directory of this project.
  -->

<template>
  <section>
    <table cds-layout="m-y:sm" cds-table="border:all zebra equal-col:4" cds-text="align:left">
      <thead>
        <tr>
          <th>CSS Custom Property</th>
          <th>Name</th>
          <th>Value</th>
          <th>Alias</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="prop in api" v-bind:key="prop[0]">
          <td>{{ prop[0] }}</td>
          <td>{{ prop[1] }}</td>
          <td>{{ prop[2] }}</td>
          <td>{{ prop[3] }}</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
import Values from '@cds/core/tokens/tokens.json';
import * as Tokens from '@cds/core/tokens/tokens';

export default {
  name: 'DocTokenAPI',
  props: ['prefix'],
  data: function () {
    return {
      api: Object.entries(Values)
        .filter(([key, item]) => key.search(this.prefix) > -1)
        .map(item => [Tokens[item[0]], item[0], item[1].value.toString(), Tokens[item[1].alias]]),
    };
  },
};
</script>
