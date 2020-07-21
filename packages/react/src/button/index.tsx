import { CdsButton as Button } from '@clr/core/button';
import { CdsIconButton as IconButton } from '@clr/core/button';
import { CdsInlineButton as InlineButton } from '@clr/core/button';
import '@clr/core/button/register';
import { createReactComponent } from '../converter/react-wrapper';

export type CdsButtonType = Button;
export type CdsIconButtonType = IconButton;
export type CdsInlineButtonType = InlineButton;

export class CdsButton extends createReactComponent<CdsButtonType>('cds-button') {}
export class CdsIconButton extends createReactComponent<CdsIconButtonType>('cds-button') {}
export class CdsInlineButton extends createReactComponent<CdsInlineButtonType>('cds-button') {}
