<template>
  <div cds-layout="grid m-t:lg">
    <div cds-layout="col:4 vertical gap:sm">
      <div cds-layout="horizontal gap:md align:vertical-center" v-for="type in types" :key="type.title">
        <div class="swatch" :style="'background: var(--cds-global-typography-' + type.colorToken + ')'"></div>
        <div :cds-text="type.textToken">{{ type.title }}</div>
      </div>
    </div>
    <div cds-layout="col:8 vertical align:stretch-horizontal" class="demo-container">
      <div class="tip" cds-layout="align:right">Type colors are used in form components</div>
      <div class="demo">
        <form cds-layout="vertical gap:md p:lg">
          <div cds-layout="horizontal">
            <p cds-text="title">Customize sandwich</p>
            <a href="#" cds-layout="align:right" cds-text="body link"
              >Open menu in new window <cds-icon shape="pop-out"></cds-icon
            ></a>
          </div>
          <p>Customize your sandwich to maximize your enjoyment.</p>
          <cds-form-group>
            <cds-select>
              <label>Choose a protein</label>
              <select>
                <option>Beef</option>
                <option>Chicken</option>
                <option>Fish</option>
                <option>Veggie Patty</option>
              </select>
            </cds-select>
            <cds-select>
              <label>Choose a cheese</label>
              <select>
                <option>Cheddar</option>
                <option>Swiss</option>
                <option>American</option>
                <option>None</option>
              </select>
            </cds-select>
          </cds-form-group>
          <p cds-text="caption">
            Please note that consuming undercooked meat can result in illness, so we cook everything to minimum safety
            temperatures.
          </p>
          <cds-button>Add to order</cds-button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DocColorTypeDemo',
  data: function () {
    return {
      types: [
        { colorToken: 'color-400', textToken: 'heading', title: 'Heading' },
        { colorToken: 'color-500', textToken: 'paragraph', title: 'Paragraph' },
        { colorToken: 'color-500', textToken: 'black', title: 'Black' },
        { colorToken: 'color-500', textToken: 'secondary', title: 'Secondary' },
        { colorToken: 'color-300', textToken: 'tertiary', title: 'Tertiary' }, // No such color defined
        { colorToken: 'color-200', textToken: 'secondary', title: 'Disabled' }, // No such color, probably only in forms
        { colorToken: 'link-color', textToken: 'link', title: 'Underlined link' },
        { colorToken: 'link-color-hover', textToken: 'link hover', title: 'Underlined hoved link' },
        { colorToken: 'link-color-visited', textToken: 'link visited', title: 'Visited link' },
        { colorToken: 'link-color-visited-hover', textToken: 'link visited hover', title: 'Visisted hover link' },
        { colorToken: 'color-100', textToken: 'demo-inverse', title: 'Inverse Type' },
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
