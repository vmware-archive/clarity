import '!style-loader!css-loader!./public/demo.css';
import { setCustomElements } from '@storybook/web-components';
import { applyPolyfill } from 'custom-elements-hmr-polyfill';
import { withCssResources } from '@storybook/addon-cssresources';
import customElements from '../dist/core/custom-elements.json';

window.HMR_SKIP_DEEP_PATCH = true;
applyPolyfill();

export const parameters = {
  passArgsFirst: true,
  options: {
    showRoots: true,
    storySort: {
      method: 'alphabetical',
      order: [
        'Documentation',
        [
          'Welcome',
          'Getting Started',
          'Angular',
          'Vue',
          'React',
          'Preact',
          'AngularJS',
          'Browser Support',
          'Changelog',
        ],
        'Foundation',
        [
          'Design Tokens',
          'Typography',
          'Spacing',
          'Color',
          'Object Styles',
          'Interaction Styles',
          'Design Tokens Stories',
          'Typography Stories',
        ],
        'Themes',
        ['Getting Started', 'Dark Theme', 'Dynamic Themes'],
        'Layout',
        ['Get Started', 'Horizontal', 'Vertical', 'Grid', 'Spacing', 'Utilities', 'Patterns', 'All'],
        'Components',
        'Forms',
        [
          'Getting Started',
          'Responsive',
          'Validation',
          'Control',
          'Checkbox',
          'Datalist',
          'Date',
          'File',
          'Input',
          'Input Groups',
          'Password',
          'Radio',
          'Range',
          'Search',
          'Select',
          'Textarea',
          'Time',
          'Toggle',
          'Date (Internal)',
        ],
        'Components (Preview)',
        ['Circular Progress', 'Divider'],
        'Utilities (Preview)',
        'Internal',
        [
          'Documentation',
          [
            'Getting Started',
            'Package',
            'Public API',
            'Stateless API',
            'Component Code Conventions',
            'Imports and Dependencies',
            'Registering Components',
            'Templates and Styles',
            'Content Projection',
            'Using Icons',
            'Accessibility',
            'Unit Testing',
          ],
          'APIs',
        ],
      ],
    },
  },
  themes: {
    list: [
      { name: 'light', class: 'cds-theme-light', color: 'hsl(0, 0%, 100%)' },
      { name: 'dark', class: 'cds-theme-dark', color: 'hsl(211, 63%, 14%)' },
    ],
    clearable: false,
    onChange: theme => {
      const doc = document.querySelector('#storybook-preview-iframe').contentWindow.document;
      doc.body.setAttribute('cds-theme', theme.name);
      doc
        .querySelectorAll(`[id*='story--'], [cds-theme]`)
        .forEach(story => story.setAttribute('cds-theme', theme.name));
    },
  },
};

export const decorators = [withCssResources];

// https://github.com/storybookjs/storybook/tree/master/app/web-components
setCustomElements(customElements);

// We have this here since storybook does not have a easy way to set the <html> element in demos
// The token system generates a base 16px set of variables for apps that may not be able to easily set the base font to 125%
document.body.setAttribute('cds-text', 'body');
// document.querySelector('html').setAttribute('cds-base-font', '16');
