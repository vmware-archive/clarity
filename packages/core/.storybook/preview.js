import styles from './public/demo.css';
import { setCustomElements } from '@web/storybook-prebuilt/web-components.js';
import pkg from '../dist/core/custom-elements.legacy.json';
import img from './public/assets/images/clarity-logo.svg';

setCustomElements(pkg);

// storybook-prebuild does not run the manager.js through rollup so custom
// styles need to be appended from the preivew.js
if (!window.parent.document.querySelector('#clarity-storybook-styles')) {
  const style = document.createElement('style');
  style.id = 'clarity-storybook-styles';
  style.textContent = `${styles}`;
  window.parent.document.head.append(style);
  const logo = window.parent.document.querySelector('.sidebar-header a');
  if (logo) {
    logo.innerHTML = `<img src="${img}" />`;
  }
}

export const parameters = {
  passArgsFirst: true,
  docs: {
    transformSource: (_src, storyContext) => {
      return storyContext.storyFn().strings;
    },
    source: {
      type: 'dynamic',
    },
  },
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
        'Data Grid (Preview)',
        [
          'Basic',
          'Kitchen Sink',
          'Row Single Select',
          'Row Multi Select',
          'Row Action',
          'Row Batch Action',
          'Row Sort',
          'Row Multi Sort',
          'Row Detail',
          'Row Header',
          'Row and Column Height',
          'Column Filter',
          'Column Multi Filter',
          'Column Width',
          'Column Resize',
          'Column Visibility',
          'Column Sticky',
          'Column Fixed',
          'Column Align',
          'Async Data',
          'Footer',
          'Pagination',
          'Placeholder',
          'Scroll Height',
          'Async Data',
          'Borders',
          'Compact',
          'Dark Theme',
          'RTL',
          'Responsive',
          'Performance',
          // experimental
          'Cell Editable',
          'Range Select',
          'Row Fixed',
          'Row Sticky',
          'Row Draggable',
          'Row Swappable',
          'Column Draggable',
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
        [
          'Close Button',
          'Panel',
          'Motion',
          'Overlay',
          'Aria Grid Controller',
          'Aria Popup Controller',
          'Responsive Controller',
          'Draggable List Controller',
          'Key Navigation List Controller',
          'Key Navigation Grid Controller',
        ],
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
      items: [
        { value: '', title: 'Light Theme' },
        { value: 'dark', title: 'Dark Theme' },
      ],
    },
  },
  dataTheme: {
    name: 'Data',
    description: 'Available demo datasets',
    defaultValue: '',
    toolbar: {
      items: [
        { value: 'infrastructure', title: 'Infrastructure' },
        { value: 'food', title: 'Food' },
        { value: 'system', title: 'System' },
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
    defaultValue: '20',
    toolbar: {
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
