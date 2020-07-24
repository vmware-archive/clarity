<template>
  <div v-html="snippet"></div>
</template>

<script>
const fs = require('fs');
const path = require('path');
export default {
  name: 'ClrDemo',
  props: ['file'],
  computed: {
    snippet: function() {
      return fs.readFileSync(path.resolve(this.file), 'utf8');
    },
  },
  // data() {
  //   return {
  //     snippet: function() {
  //       `<h1>Snippet</h1>`
  //     }
  //   }
  // }
};
</script>

<style scoped>
</style>
