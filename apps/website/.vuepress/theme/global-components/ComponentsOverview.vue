<template>
  <section cds-layout="m-y:xl grid gap:md cols@sm:12 cols@md:6 cols@lg:4 align:vertical-stretch">
    <ItemOverview
      v-for="component in componentList"
      :title="component.title"
      :path="component.path"
      :target="component.target"
      :isNew="component.isNew"
    >
      <template>
        <img class="overview-image" :src="component.name | adjustToSvgUrl" :alt="component.title + ' visual example'" />
      </template>
    </ItemOverview>
  </section>
</template>

<style lang="scss">
.overview-image {
  max-width: 50%;
  height: auto;
}
</style>

<script>
export default {
  name: 'ComponentsOverview',
  props: {
    framework: String,
  },
  filters: {
    adjustToSvgUrl: componentName => {
      return `/images/components/overview/${componentName}.svg`;
    },
  },
  computed: {
    componentList: function () {
      if (this.framework) {
        if (this.$site && this.$site.themeConfig && this.$site.themeConfig.sidebar) {
          const componentsSection = this.$site.themeConfig.sidebar.find(x => x.title === this.framework);

          if (componentsSection) {
            return componentsSection.children.slice(1).filter(item => item.overview !== false);
          }
        }
      }
      // if (this.$site && this.$site.themeConfig && this.$site.themeConfig.sidebar) {
      //   const componentsSection = this.$site.themeConfig.sidebar.find(x => x.title === 'Angular Components');
      //
      //   if (componentsSection) {
      //     return componentsSection.children.slice(1);
      //   }
      // }

      return [];
    },
  },
};
</script>
