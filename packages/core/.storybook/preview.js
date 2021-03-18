import { document } from 'global';
import '!style-loader!css-loader!./public/demo.css';
import { setCustomElements } from '@storybook/web-components';
import { applyPolyfill } from 'custom-elements-hmr-polyfill';
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
          'Color',
          'Design Tokens',
          'Object Styles',
          'Interaction Styles',
          'Spacing',
          'Status',
          'Platforms',
          'Motion',
          'Typography',
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
        'Internal Documentation',
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
        'Internal API',
        'Stories',
        'Internal Stories',
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

const defaultTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : '';
export const globalTypes = {
  theme: {
    name: 'Themes',
    description: 'Available built in Clarity themes',
    defaultValue: defaultTheme,
    toolbar: {
      items: [
        { value: '', title: 'Light Theme' },
        { value: 'dark', title: 'Dark Theme' },
      ],
    },
  },
  baseFont: {
    name: 'Base Font',
    description: 'Base Font for Document',
    defaultValue: '125%',
    toolbar: {
      items: [
        { value: '125%', title: 'Base 20px (Default)' },
        { value: '100%', title: 'Base 16px' },
      ],
    },
  },
  // motion: {
  //   name: 'Motion',
  //   description: 'Clarity Animations',
  //   defaultValue: '',
  //   toolbar: {
  //     items: [
  //       { value: '', title: 'Enable Animations' },
  //       { value: 'low-motion', title: 'Disable Animations' },
  //     ],
  //   },
  // },
};

const themeDecorator = (story, { globals }) => {
  const themes = `${globals.theme ? globals.theme : ''} ${globals.motion ? globals.motion : ''}`;
  document.body.setAttribute('cds-theme', `${themes}`);
  window.parent.document.body.setAttribute('cds-theme', `${themes}`);
  document.documentElement.setAttribute('cds-base-font', `${globals.baseFont === '100%' ? '16' : ''}`);
  return story();
};

export const decorators = [themeDecorator];

// https://github.com/storybookjs/storybook/tree/master/app/web-components
setCustomElements(customElements);

// We have this here since storybook does not have a easy way to set the <html> element in demos
// The token system generates a base 16px set of variables for apps that may not be able to easily set the base font to 125%
document.body.setAttribute('cds-text', 'body');
