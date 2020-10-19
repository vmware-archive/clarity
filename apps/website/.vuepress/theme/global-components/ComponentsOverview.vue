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
        <img cds-layout="fill" :src="component.name | adjustToSvgUrl" :alt="component.title + ' visual example'" />
      </template>
    </ItemOverview>
  </section>
</template>

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
            return componentsSection.children.slice(1).filter(item => item.title !== 'Get Started');
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
