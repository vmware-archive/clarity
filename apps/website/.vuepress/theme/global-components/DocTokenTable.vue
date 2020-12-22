<template>
  <token-table :tokenKey="tokenKey"></token-table>
</template>

<script>
import '../web-components/token-table';

export default {
  name: 'DocTokenTable',
  props: ['tokenKey'],
};
</script>
