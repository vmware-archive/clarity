import { CdsButton as Button } from '@clr/core/button';
import { CdsTag as Tag } from '@clr/core/tag';
import { CdsBadge as Badge } from '@clr/core/badge';
import { CdsAlert as Alert, CdsAlertContent as AlertContent } from '@clr/core/alert';
import { ClarityIcons, userIcon, CdsIcon as Icon } from '@clr/core/icon-shapes';
import '@clr/core/button';
import '@clr/core/tag';
import '@clr/core/badge';
import '@clr/core/icon';
import '@clr/core/alert';

import wrapCustomElement from './converter/wrapCustomElement';

ClarityIcons.addIcons(userIcon);

type CdsButtonProps = Button;
type CdsTagProps = Tag;
type CdsBadgeProps = Badge;
type CdsIconProps = Icon;
type CdsAlertProps = Alert & { onClosedChange(event: CustomEvent): void }; // for mapping custom events
type CdsAlertContentProps = AlertContent;

export const CdsButton = wrapCustomElement<CdsButtonProps>('cds-button');
export const CdsTag = wrapCustomElement<CdsTagProps>('cds-tag');
export const CdsBadge = wrapCustomElement<CdsBadgeProps>('cds-badge');
export const CdsAlert = wrapCustomElement<CdsAlertProps>('cds-alert');
export const CdsAlertContent = wrapCustomElement<CdsAlertContentProps>('cds-alert-content');
export const CdsIcon = wrapCustomElement<CdsIconProps>('cds-icon');
