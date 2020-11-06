# Test Bundles & Tree Shaking

These tests check to ensure that Clarity Core properly can be consumed and
tree shaken by the most commonly used module bundlers.

```javascript
import '@cds/core/badge/register.js';
```

We should expect only the badge component code to included in the final application
and no other components are bundled.

More complex scenarios we want to also tree shake at the symbol level such as when
importing icons.

```javascript
import '@cds/core/icon/register.js';
import { ClarityIcons, userIcon, menuIcon } from '@cds/core/icon';

ClarityIcons.addIcons(userIcon, menuIcon);
```

This example should only include the icon Web Component as well as only two of
the many icons available in the final application bundle.

To run these tests run the following commands in order from the core directory:

```bash
yarn run build
yarn run test:treeshaking
yarn run test:bundles
```
