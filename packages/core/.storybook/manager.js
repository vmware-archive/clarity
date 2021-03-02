import { addons } from '@storybook/addons';
import { create } from '@storybook/theming/create';
import { STORY_CHANGED } from '@storybook/core-events';
import * as tokens from './../dist/core/styles/module.tokens.min.css';
import * as theme from './../dist/core/styles/theme.dark.min.css';

console.log('core theme loaded', tokens, theme); // have to log to create reference so Storybook UI does not treeshake away the CSS

addons.setConfig({
  options: {
    showPanel: true,
  },
  theme: create({
    base: 'light',
    brandTitle: 'Clarity Design - Web Components',
    brandUrl: 'https://clarity.design',
    brandImage: './assets/images/clarity-logo.svg',
    colorPrimary: 'hsl(198, 100%, 34%)', // storybook doesn't allow css custom props
    colorSecondary: 'hsl(198, 100%, 95%)',
    barSelectedColor: 'hsl(198, 100%, 34%)',
  }),
});

addons.register('storybook/ga-analytics', api => {
  if (window.ga) {
    api.on(STORY_CHANGED, () => ga('send', 'pageview', `/storybook/core/?path=${api.getUrlState().path}`));
  }
});

setTimeout(() => {
  if (addons.elements.panel['addon-controls']) {
    addons.elements.panel['addon-controls'].title = () => 'API Options';
    addons.elements.panel['storybook/actions/panel'].title = 'Events';
  }
}, 0);
