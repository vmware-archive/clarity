<template>
  <table class="table">
    <tr>
      <th class="left">Property Name</th>
      <th class="left">Purpose</th>
    </tr>
    <tr v-for="item in api.values">
      <td class="left">{{ item.key }}</td>
      <td class="left">{{ item.role }}</td>
    </tr>
  </table>
</template>

<script>
import Api from '../../../data/i18n-strings.json';

export default {
  name: 'DocLocalizationStrings',
  computed: {
    api: function () {
      return Api;
    },
  },
};
</script>
