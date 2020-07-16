import '!style-loader!css-loader!./public/demo.css';
import { setCustomElements } from '@storybook/web-components';
import { applyPolyfill } from 'custom-elements-hmr-polyfill';
import customElements from '../dist/core/custom-elements.json';

applyPolyfill();

export const parameters = {
  passArgsFirst: true,
  options: {
    showRoots: true,
    storySort: {
      method: 'alphabetical',
      order: [
        'Welcome',
        'Documentation',
        ['Getting Started', 'Angular', 'Vue', 'React', 'Preact', 'AngularJS', 'Browser Support', 'Changelog'],
        'Foundation',
        [
          'Design Tokens',
          'Typography',
          'Color',
          'Spacing',
          'Layout',
          ['Get Started', 'Horizontal', 'Vertical', 'Grid', 'Spacing', 'Utilities', 'Patterns', 'All'],
          ['Getting Started', 'Stories'],
        ],
        'Components',
        'Forms (Preview)',
        [
          'Forms',
          ['Getting Started', 'Responsive', 'Validation'],
          'Control',
          'Checkbox',
          'Datalist',
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
        ['Circular Progress'],
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
};

// https://github.com/storybookjs/storybook/tree/master/app/web-components
setCustomElements(customElements);

// We have this here since storybook does not have a easy way to set the <html> element in demos
// The token system generates a base 16px set of variables for apps that may not be able to easily set the base font to 125%
document.body.setAttribute('cds-text', 'body');
// document.querySelector('html').setAttribute('cds-base-font', '16');
