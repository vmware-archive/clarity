<template>
  <div cds-layout="grid m-t:lg">
    <div cds-layout="col:2 vertical gap:sm">
      <div
        v-for="type in types1"
        :key="type.colorToken"
        v-bind:cds-layout="'horizontal gap:md align:vertical-center' + (type.separate ? ' m-b:md' : '')"
      >
        <div class="swatch" :style="'background: var(--cds-alias-status-' + type.colorToken + ')'"></div>
        <div v-bind:cds-text="type.isTitle ? 'section' : ''">{{ type.title }}</div>
      </div>
    </div>
    <div cds-layout="col:2 vertical gap:sm">
      <div
        v-for="type in types2"
        :key="type.colorToken"
        v-bind:cds-layout="'horizontal gap:md align:vertical-center' + (type.separate ? ' m-b:md' : '')"
      >
        <div class="swatch" :style="'background: var(--cds-alias-status-' + type.colorToken + ')'"></div>
        <div v-bind:cds-text="type.isTitle ? 'section' : ''">{{ type.title }}</div>
      </div>
    </div>
    <div cds-layout="col:8 vertical align:stretch-horizontal" class="demo-container">
      <div class="tip" cds-layout="align:right">Status colors are used in the alert component</div>
      <div cds-layout="vertical gap:sm" class="demo">
        <cds-alert-group status="info" aria-label="This is an example info alert group">
          <cds-alert closable aria-label="This is an example info alert group">
            This example is a closable alert inside an alert group with a status of "info".
          </cds-alert>
        </cds-alert-group>

        <cds-alert-group status="success" aria-label="This is an example success alert group">
          <cds-alert closable cds-i18n='{ "closeButtonAriaLabel": "close success alert"}'>
            This example is an alert a user may be able to close inside an alert group with a status of "success".
          </cds-alert>
        </cds-alert-group>

        <cds-alert-group status="warning" aria-label="This is an example warning alert group">
          <cds-alert closable cds-i18n='{ "closeButtonAriaLabel": "close warning alert"}'>
            This example is an alert a user may be able to close inside an alert group with a status of "warning".
          </cds-alert>
        </cds-alert-group>

        <cds-alert-group status="danger" aria-label="This is an example error or danger alert group">
          <cds-alert closable cds-i18n='{ "closeButtonAriaLabel": "close danger alert"}'>
            This example is an alert a user may be able to close inside an alert group with a status of "danger".
          </cds-alert>
        </cds-alert-group>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DocColorStatusDemo',
  data: function () {
    return {
      types1: [
        { colorToken: 'info', title: 'Info', isTitle: true },
        { colorToken: 'info-shade', title: 'shade' },
        { colorToken: 'info-tint', title: 'tint', separate: true },
        { colorToken: 'success', title: 'Success', isTitle: true },
        { colorToken: 'success-shade', title: 'shade' },
        { colorToken: 'success-tint', title: 'tint', separate: true },
        { colorToken: 'warning', title: 'Warning', isTitle: true },
        { colorToken: 'warning-shade', title: 'shade' },
        { colorToken: 'warning-dark', title: 'dark' },
        { colorToken: 'warning-tint', title: 'tint', separate: true },
        { colorToken: 'danger', title: 'Danger', isTitle: true },
        { colorToken: 'danger-shade', title: 'shade' },
        { colorToken: 'danger-tint', title: 'tint' },
      ],
      types2: [
        { colorToken: 'alt', title: 'Alt', isTitle: true },
        { colorToken: 'alt-shade', title: 'shade' },
        { colorToken: 'alt-tint', title: 'tint', separate: true },
        { colorToken: 'neutral', title: 'Neutral', isTitle: true },
        { colorToken: 'neutral-shade', title: 'shade' },
        { colorToken: 'neutral-tint', title: 'tint', separate: true },
        { colorToken: 'disabled', title: 'Disabled', isTitle: true },
        { colorToken: 'disabled-shade', title: 'shade' },
        { colorToken: 'disabled-tint', title: 'tint' },
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
