import { CdsButton as Button } from '@clr/core/button';
import { CdsIconButton as IconButton } from '@clr/core/button';
import { CdsInlineButton as InlineButton } from '@clr/core/button';
import '@clr/core/button/register';
import { createReactComponent } from '../converter/react-wrapper';

type baseType = HTMLButtonElement & { nativeElement: Promise<typeof Button> };
export type CdsButtonType = Button & baseType;
export type CdsIconButtonType = IconButton & baseType;
export type CdsInlineButtonType = InlineButton & baseType;
export const CdsButton = createReactComponent<CdsButtonType>('cds-button');
export const CdsIconButton = createReactComponent<CdsIconButtonType>('cds-button');
export const CdsInlineButton = createReactComponent<CdsInlineButtonType>('cds-button');
