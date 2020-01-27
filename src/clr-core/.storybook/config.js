import '!style-loader!css-loader!./../../../dist/clr-core/global.min.css';
import '!style-loader!css-loader!./../../../node_modules/@clr/city/css/bundles/default.min.css';
import '!style-loader!css-loader!./public/demo.css';
import { configure, setCustomElements, addDecorator, addParameters } from '@storybook/web-components';
import { withKnobs } from '@storybook/addon-knobs';
import { withCssResources } from '@storybook/addon-cssresources';
import { withA11y } from '@storybook/addon-a11y';
import { withDesign } from 'storybook-addon-designs';
import * as customElements from '../../../dist/clr-core/custom-elements.json';

addDecorator(withKnobs);
addDecorator(withDesign);
addDecorator(withCssResources);
addDecorator(withA11y);
addParameters({
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

configure(
  [
    require.context('../', false, /welcome\.stories\.ts/),
    require.context('../styles', false, /typography\.stories\.ts/),
    require.context('../styles', false, /layout\.stories\.ts/),
    require.context('../', true, /\.stories\.(ts|mdx)$/),
  ],
  module
);

const req = require.context('../', true, /\.stories\.(ts|mdx)$/);
if (module.hot) {
  module.hot.accept(req.id, () => {
    const currentLocationHref = window.location.href;
    window.history.pushState(null, null, currentLocationHref);
    window.location.reload();
  });
}
