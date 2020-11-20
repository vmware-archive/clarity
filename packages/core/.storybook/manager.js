import { addons } from '@storybook/addons';
import { create } from '@storybook/theming/create';
import { STORY_CHANGED } from '@storybook/core-events';

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

addons.register('storybook/ga-analytics', api => {
  if (window.ga) {
    api.on(STORY_CHANGED, () => ga('send', 'pageview', `/storybook/core/?path=${api.getUrlState().path}`));
  }
});

addons.register('theme/reset', api => {
  api.on(STORY_CHANGED, () => {
    const body = document.querySelector('#storybook-preview-iframe').contentWindow.document.body;
    body.removeAttribute('cds-theme');
    body.classList.remove('cds-theme-light');
    body.classList.remove('cds-theme-dark');
  });
});

setTimeout(() => {
  addons.elements.panel['addon-controls'].title = () => 'API Options';
  addons.elements.panel['storybook/cssresources/panel'].title = 'Theme';
  addons.elements.panel['storybook/source-loader/panel'].title = 'Code';
  addons.elements.panel['storybook/actions/panel'].title = 'Events';
}, 0);
