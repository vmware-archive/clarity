import { CdsButton as Button } from '@cds/core/button';
import { CdsIconButton as IconButton } from '@cds/core/button';
import { CdsInlineButton as InlineButton } from '@cds/core/button';
import '@cds/core/button/register';
import { createReactComponent } from '../converter/react-wrapper';

export type CdsButtonType = Button;
export type CdsIconButtonType = IconButton;
export type CdsInlineButtonType = InlineButton;

export class CdsButton extends createReactComponent<CdsButtonType>('cds-button') {}
export class CdsIconButton extends createReactComponent<CdsIconButtonType>('cds-icon-button') {}
export class CdsInlineButton extends createReactComponent<CdsInlineButtonType>('cds-inline-button') {}
