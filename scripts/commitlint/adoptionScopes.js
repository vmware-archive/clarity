/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-var-requires */

const { delimiter } = require('./common');

const components = ['documentation', 'features'];

module.exports = {
  components,
  getScopes: () => {
    return components.map(c => `adoption${delimiter}${c}`).concat(['adoption']);
  },
};
