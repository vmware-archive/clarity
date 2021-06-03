<template>
  <div v-if="component.stories">
    <!-- <h2 cds-layout="m-b:xl">{{ componentName | uppercase }} Code</h2> -->
    <section cds-layout="m-b:xl" v-for="(story, key) in component.stories" :key="key">
      <h2 cds-layout="m-b:md">{{ story.storyName | uppercaseSplit }}</h2>
      <CdsDemo :code="story.code" />
    </section>
  </div>
</template>

<script>
import demos from '../../../data/core-demos.json';
import { uppercaseSplit } from '../filters/uppercaseSplit.js';

export default {
  name: 'CdsDemos',
  props: ['componentName'],
  filters: {
    uppercaseSplit,
  },
  computed: {
    component: function () {
      const guard = demos.coreStories.find(s => s.componentName === this.componentName);
      return guard ? guard : [];
    },
  },
};
</script>
