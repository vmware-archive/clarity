import { CdsButton as Button } from '@clr/core/button';
import { CdsTag as Tag } from '@clr/core/tag';
import { CdsBadge as Badge } from '@clr/core/badge';
import { CdsAlert as Alert, CdsAlertGroup as AlertGroup } from '@clr/core/alert';
import { ClarityIcons, userIcon, CdsIcon as Icon } from '@clr/core/icon';
import '@clr/core/button/register.js';
import '@clr/core/tag/register.js';
import '@clr/core/badge/register.js';
import '@clr/core/icon/register.js';
import '@clr/core/alert/register.js';

import wrapCustomElement from './converter/wrapCustomElement';

ClarityIcons.addIcons(userIcon);

type CdsButtonProps = Button;
type CdsTagProps = Tag;
type CdsBadgeProps = Badge;
type CdsIconProps = Icon;
type CdsAlertProps = Alert & { onCloseChange(event: CustomEvent): void }; // for mapping custom events
type CdsAlertGroupProps = AlertGroup;

export const CdsButton = wrapCustomElement<CdsButtonProps>('cds-button');
export const CdsTag = wrapCustomElement<CdsTagProps>('cds-tag');
export const CdsBadge = wrapCustomElement<CdsBadgeProps>('cds-badge');
export const CdsAlert = wrapCustomElement<CdsAlertProps>('cds-alert');
export const CdsAlertGroup = wrapCustomElement<CdsAlertGroupProps>('cds-alert-group');
export const CdsIcon = wrapCustomElement<CdsIconProps>('cds-icon');
