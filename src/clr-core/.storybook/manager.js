import { addons } from '@storybook/addons';
import { create } from '@storybook/theming/create';

addons.setConfig({
  options: {
    showPanel: true,
  },
  theme: create({
    base: 'light',
    brandTitle: 'Clarity Design - Web Components',
    brandUrl: 'https://clarity.design',
    brandImage: './assets/images/clarity-logo.svg',
  }),
});

setTimeout(() => {
  addons.elements.panel['storybookjs/knobs/panel'].title = 'Properties';
  addons.elements.panel['storybook/actions/panel'].title = 'Events';
  addons.elements.panel['storybook/cssresources/panel'].title = 'Theme';
  addons.elements.panel['storybook/source-loader/panel'].title = 'Code';
  addons.elements.panel['storybook/a11y/panel'].title = 'A11y';
}, 0);
