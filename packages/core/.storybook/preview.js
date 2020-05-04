import '!style-loader!css-loader!./public/demo.css';
import { setCustomElements, addDecorator, addParameters } from '@storybook/web-components';
import { withKnobs } from '@storybook/addon-knobs';
import { withCssResources } from '@storybook/addon-cssresources';
import { withA11y } from '@storybook/addon-a11y';
import { withDesign } from 'storybook-addon-designs';
import { applyPolyfill } from 'custom-elements-hmr-polyfill';
import * as customElements from '../dist/core/custom-elements.json';

applyPolyfill();
addDecorator(withKnobs);
addDecorator(withDesign);
addDecorator(withCssResources);
addDecorator(withA11y);

addParameters({
  options: {
    showRoots: true,
    storySort: {
      method: 'alphabetical',
      order: [
        'Welcome',
        'Documentation',
        ['Getting Started', 'Angular', 'Vue', 'React', 'Browser Support', 'Changelog'],
        'Components',
        'Experimental',
        [
          'Design Tokens',
          'Typography',
          'Color',
          'Spacing',
          'Layout',
          ['Get Started', 'Horizontal', 'Vertical', 'Grid', 'Spacing', 'Utilities', 'Patterns', 'All'],
          ['Getting Started', 'Stories'],
        ],
      ],
    },
  },
  cssresources: [
    {
      id: 'darktheme',
      code: `
      <style>
        /* coming soon dark theme demo (will load external dark theme CSS file) */
        body { background-color: hsl(201, 30%, 15%); }
      </style>`,
      picked: false,
    },
  ],
});

// https://github.com/storybookjs/storybook/tree/master/app/web-components
setCustomElements(customElements.default);
