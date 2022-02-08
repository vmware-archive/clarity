import { setCustomElements } from '@web/storybook-prebuilt/web-components.js';
import pkg from '../dist/core/custom-elements.json';
import previewStyles from './public/preview.css';
import commonStyles from './public/common.css';
import managerStyles from './public/manager.css';
import img from './public/assets/images/clarity-logo.svg';

setCustomElements(pkg);

// storybook-prebuild does not run the manager.js through rollup so custom
// styles need to be appended from the preview.js
if (!window.parent.document.querySelector('#clarity-storybook-styles')) {
  const style = document.createElement('style');
  style.id = 'clarity-storybook-styles';
  style.textContent = `${commonStyles}${managerStyles}`;
  window.parent.document.head.append(style);

  const logo = window.parent.document.querySelector('.sidebar-header a[title="Storybook"]');
  if (logo) {
    logo.innerHTML = `<img src="${img}" />`;
  }
}

if (!window.document.querySelector('#clarity-storybook-styles')) {
  const style = document.createElement('style');
  style.id = 'clarity-storybook-styles';
  style.textContent = `${commonStyles}${previewStyles}`;
  window.parent.document.head.append(style);
}

export const parameters = {
  passArgsFirst: true,
  docs: {
    transformSource: (_src, storyContext) => {
      // cleanup story source code format
      let storySource = storyContext.originalStoryFn.toString().split('\n');

      // remove function wrapper
      if (storySource.length > 2) {
        storySource.shift();
        storySource.pop();
      }
      storySource[0] = storySource[0].replace('return html`', '').trim();
      storySource[storySource.length - 1] = storySource[storySource.length - 1].replace('`;', '');

      // shift tab space indent
      storySource = storySource.map((line, i) => (i !== 0 ? line.split('').slice(2).join('') : line));
      return storySource.join('\n');
    },
    source: {
      type: 'dynamic',
    },
  },
  options: {
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
        ['Circular Progress', 'Divider', 'Pagination'],
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
        ['Close Button', 'Panel', 'Motion', 'Overlay'],
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
    defaultValue: '',
    toolbar: {
      icon: 'paintbrush',
      showName: true,
      items: [
        { value: '', title: 'Light Theme' },
        { value: 'dark', title: 'Dark Theme' },
      ],
    },
  },
  dataTheme: {
    name: 'Data',
    description: 'Available demo datasets',
    defaultValue: 'infrastructure',
    toolbar: {
      icon: 'database',
      showName: true,
      items: [
        { value: 'infrastructure', title: 'Infrastructure' },
        { value: 'food', title: 'Food' },
        { value: 'system', title: 'System' },
      ],
    },
  },
  motion: {
    name: 'Animations',
    description: 'Clarity Animations',
    defaultValue: '',
    toolbar: {
      showName: true,
      icon: 'lightning',
      items: [
        { value: '', title: 'Enable Animations' },
        { value: 'low-motion', title: 'Disable Animations' },
      ],
    },
  },
  baseFont: {
    name: 'Base Font',
    description: 'Base Font for Document',
    defaultValue: '20',
    toolbar: {
      showName: true,
      icon: 'menu',
      items: [
        { value: '20', title: 'Base 20px (Default)' },
        { value: '16', title: 'Base 16px' },
      ],
    },
  },
};

const themeDecorator = (story, { globals }) => {
  const themes = `${globals.theme ? globals.theme : ''} ${globals.motion ? globals.motion : ''}`;
  document.body.setAttribute('cds-theme', `${themes}`);
  window.parent.document.body.setAttribute('cds-theme', `${themes}`);
  document.documentElement.style.setProperty('--cds-global-base', globals.baseFont);
  window.localStorage.setItem('cds-theme', themes);
  return story();
};

const dataThemeDecorator = (story, { globals }) => {
  localStorage.setItem('cds-data-theme', globals.dataTheme);
  const fn = (...args) => story(args);
  return fn();
};

export const decorators = [themeDecorator, dataThemeDecorator];

// We have this here since storybook does not have a easy way to set the <html> element in demos
// The token system generates a base 16px set of variables for apps that may not be able to easily set the base font to 125%
document.body.setAttribute('cds-text', 'body');
