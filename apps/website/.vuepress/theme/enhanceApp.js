import * as Sentry from '@sentry/browser';
import { Vue as VueIntegration } from '@sentry/integrations';
import VueResource from 'vue-resource';
import Hotjar from 'vue-hotjar';

import './filters/uppercase';

import './styles/index.scss';

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData, // site metadata,
  isServer,
}) => {
  if (!isServer) {
    import('./core');

    Vue.use(VueResource);
    Vue.use(Hotjar, {
      id: '1762865',
    });

    Sentry.init({
      dsn: 'https://3e41de8eb9e440d6b834fc556ad8e83c@o378402.ingest.sentry.io/5201749',
      integrations: [new VueIntegration({ Vue, attachProps: true, logErrors: true })],
    });
  }
};
