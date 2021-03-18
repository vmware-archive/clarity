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
          'Design Tokens',
          'Typography',
          'Color',
          'Object Styles',
          'Interaction Styles',
          'Spacing',
          'Status',
          'Motion',
          'Platforms',
          'Internationalization',
        ],
        'Themes',
        ['Getting Started', 'Dark Theme', 'Low Motion Theme', 'Dynamic Themes'],
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
};

export const globalTypes = {
  theme: {
    name: 'Themes',
    description: 'Available built in Clarity themes',
    defaultValue: window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : window.localStorage.getItem('cds-color-theme'),
    toolbar: {
      items: [
        { value: '', title: 'Light Theme' },
        { value: 'dark', title: 'Dark Theme' },
      ],
    },
  },
  motion: {
    name: 'Motion',
    description: 'Clarity Animations',
    defaultValue: '',
    toolbar: {
      items: [
        { value: '', title: 'Enable Animations' },
        { value: 'low-motion', title: 'Disable Animations' },
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
};

const themeDecorator = (story, { globals }) => {
  const themes = `${globals.theme ? globals.theme : ''} ${globals.motion ? globals.motion : ''}`;
  document.body.setAttribute('cds-theme', `${themes}`);
  window.parent.document.body.setAttribute('cds-theme', `${themes}`);
  document.documentElement.setAttribute('cds-base-font', `${globals.baseFont === '100%' ? '16' : ''}`);

  window.localStorage.setItem('cds-theme', themes);

  window.addEventListener('storage', () => {
    const updatedTheme = window.localStorage.getItem('cds-theme');
    if (updatedTheme) {
      window.document.body.setAttribute('cds-theme', `${updatedTheme}`);
    }
  });

  return story();
};

export const decorators = [themeDecorator];

// https://github.com/storybookjs/storybook/tree/master/app/web-components
setCustomElements(customElements);

// We have this here since storybook does not have a easy way to set the <html> element in demos
// The token system generates a base 16px set of variables for apps that may not be able to easily set the base font to 125%
document.body.setAttribute('cds-text', 'body');
