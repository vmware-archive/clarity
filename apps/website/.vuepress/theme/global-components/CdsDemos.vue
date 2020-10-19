<template>
  <div v-if="component.stories">
    <!--    <h2 cds-layout="m-b:xl">{{ componentName | uppercase }} Code</h2>-->
    <section cds-layout="m-b:xl" v-for="story in component.stories">
      <h2 cds-layout="m-b:md">{{ story.storyName | uppercase }}</h2>
      <CdsDemo :code="story.code" />
    </section>
  </div>
</template>

<script>
import demos from '../../../data/core-demos.json';

export default {
  name: 'CdsDemos',
  props: ['componentName'],
  computed: {
    component: function () {
      const guard = demos.coreStories.find(s => s.componentName === this.componentName);
      return guard ? guard : [];
    },
  },
};
</script>
