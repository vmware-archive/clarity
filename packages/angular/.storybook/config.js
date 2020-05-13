// import '!style-loader!css-loader!sass-loader!../projects/clr-angular/src/main.scss';
// import '!style-loader!css-loader!../../../dist/core/global.min.css';
// import '!style-loader!css-loader!../node_modules/@clr/city/css/bundles/default.min.css';
// import '@clr/icons';
// import '@clr/angular';

// import { withA11y } from '@storybook/addon-a11y';
import { withDesign } from 'storybook-addon-designs';
import { withKnobs } from '@storybook/addon-knobs';
import { addDecorator, addParameters } from '@storybook/angular';
import { withCssResources } from '@storybook/addon-cssresources';

import darkTheme from '!style-loader!css-loader!sass-loader!../projects/clr-angular/src/dark-theme.scss';

// addDecorator(withA11y);
addDecorator(withCssResources);
addDecorator(withDesign);
addDecorator(withKnobs);
addParameters({
  cssresources: [
    {
      id: 'darktheme',
      code: `
        <style>body { background-color: #232323; }</style>
        <style>
          ${darkTheme}
        </style>
      `,
      picked: false,
      hideCode: false,
    },
  ],
});
