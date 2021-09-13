<template>
  <div cds-layout="grid m-t:lg">
    <div cds-layout="col:4 vertical gap:sm">
      <div cds-layout="horizontal gap:md align:vertical-center" v-for="type in types" :key="type.title">
        <div class="swatch" :style="'background: var(--cds-alias-object-interaction-' + type.colorToken + ')'"></div>
        <div>{{ type.title }}</div>
      </div>
    </div>
    <div cds-layout="col:8 vertical align:stretch-horizontal" class="demo-container">
      <div class="tip" cds-layout="align:right">Interaction colors are used in accordion component</div>
      <div class="demo">
        <cds-accordion>
          <cds-accordion-panel expanded>
            <cds-accordion-header>Breakfast</cds-accordion-header>
            <cds-accordion-content>
              <p cds-text="body">Expanded accordion content</p>
            </cds-accordion-content>
          </cds-accordion-panel>
          <cds-accordion-panel disabled>
            <cds-accordion-header>Lunch</cds-accordion-header>
            <cds-accordion-content>
              <p cds-text="body">Disabled accordion content</p>
            </cds-accordion-content>
          </cds-accordion-panel>
          <cds-accordion-panel>
            <cds-accordion-header>Supper</cds-accordion-header>
            <cds-accordion-content>
              <p cds-text="body">Collapsed accordion content</p>
            </cds-accordion-content>
          </cds-accordion-panel>
        </cds-accordion>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DocColorInteractionDemo',
  data: function () {
    return {
      types: [
        { colorToken: 'background', title: 'Background' },
        { colorToken: 'background-hover', title: 'Hover' },
        { colorToken: 'background-selected', title: 'Selected' },
        { colorToken: 'background-active', title: 'Active' },
        { colorToken: 'background-highlight', title: 'Background highlight' },
        { colorToken: 'background-disabled', title: 'Disabled' },
        { colorToken: 'color', title: 'Interaction' },
        { colorToken: 'color-hover', title: 'Interaction hover' },
        { colorToken: 'color-active', title: 'Interaction active' },
        { colorToken: 'color-selected', title: 'Interaction selected' },
        { colorToken: 'color-disabled', title: 'Interaction disabled' },
      ],
    };
  },
};
</script>

<style scoped>
.demo-container {
  background: var(--cds-alias-object-container-background);
  border: var(--cds-alias-object-border-width-100) solid var(--cds-alias-object-container-border-color);
  border-radius: var(--cds-alias-object-border-radius-100);
  box-shadow: var(--cds-alias-object-shadow-100);
}
.demo {
  padding: var(--cds-global-space-6) var(--cds-global-space-8);
}
.swatch {
  height: 1.6rem;
  width: 1.6rem;
  border: var(--cds-alias-object-border-width-100) solid var(--cds-alias-object-border-color);
  border-radius: var(--cds-alias-object-border-radius-100);
}
.tip {
  font-size: var(--cds-global-typography-font-size-4);
  border-bottom-left-radius: var(--cds-alias-object-border-radius-100);
  background: var(--cds-alias-object-container-background-tint);
  color: var(--cds-alias-object-interaction-color);
  padding: var(--cds-global-space-2) var(--cds-global-space-4);
  border-left: var(--cds-alias-object-border-width-100) solid var(--cds-alias-object-container-border-color);
  border-bottom: var(--cds-alias-object-border-width-100) solid var(--cds-alias-object-container-border-color);
}

/* Just a custom thing for the demo, no such thing as 'inverse' */
[cds-text~='demo-inverse'] {
  padding: var(--cds-global-space-4) var(--cds-global-space-6);
  border-radius: var(--cds-alias-object-border-radius-100);
  background: var(--cds-alias-status-info);
  color: var(--cds-global-typography-color-100);
}

/* These are custom overrides to fix styles for links with hover */
[cds-text~='link'] {
  &[cds-text~='hover'] {
    color: var(--cds-global-typography-link-color-hover) !important;
  }

  &[cds-text~='visited'] {
    color: var(--cds-global-typography-link-color-visited) !important;

    &[cds-text~='hover'] {
      color: var(--cds-global-typography-link-color-visited-hover) !important;
    }
  }
}
</style>
