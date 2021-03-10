import { CdsButton as Button, CdsIconButton as IconButton, CdsInlineButton as InlineButton } from '@cds/core/button';
import '@cds/core/button/register';
import { createComponent } from '../converter/react-wrapper.js';

export const CdsButton = createComponent('cds-button', Button);
export const CdsIconButton = createComponent('cds-icon-button', IconButton);
export const CdsInlineButton = createComponent('cds-inline-button', InlineButton);
