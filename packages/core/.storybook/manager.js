import { addons } from '@web/storybook-prebuilt/addons';
import { create } from '@web/storybook-prebuilt/theming';

addons.setConfig({
  showPanel: false,
  sidebar: {
    showRoots: true,
  },
  theme: create({
    base: 'light',
    brandTitle: 'Clarity Design',
    brandUrl: 'https://clarity.design',
    brandImage: 'https://clarity.design/images/clarity-logo.svg',
  }),
});
