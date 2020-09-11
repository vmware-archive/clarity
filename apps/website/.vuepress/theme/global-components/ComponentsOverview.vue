<template>
  <div>
    <ItemOverviewList :items="componentList" />
  </div>
</template>

<script>
export default {
  name: 'ComponentsOverview',
  props: ['componentList'],
};
</script>
