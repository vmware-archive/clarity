import { CdsToggleGroup as ToggleGroup } from '@clr/core/toggle';
import { CdsToggle as Toggle } from '@clr/core/toggle';

import '@clr/core/toggle/register';
import { createReactComponent } from '../converter/react-wrapper';

type CdsToggleGroupType = ToggleGroup;
type CdsToggleType = Toggle;

export const CdsToggleGroup = createReactComponent<CdsToggleGroupType>('cds-toggle-group');
export const CdsToggle = createReactComponent<CdsToggleType>('cds-toggle');
