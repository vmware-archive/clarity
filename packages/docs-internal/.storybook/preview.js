import { setCustomElements } from '@web/storybook-prebuilt/web-components.js';
import pkg from '../dist/lib/custom-elements.json';
import './index.css';

setCustomElements(pkg);

export const parameters = {
  viewMode: 'docs',
  docs: {
    transformSource: (_src, storyContext) => {
      return storyContext.storyFn().strings;
    },
    source: {
      type: 'dynamic',
    },
  },
};
