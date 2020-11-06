import { CdsToggleGroup as ToggleGroup } from '@cds/core/toggle';
import { CdsToggle as Toggle } from '@cds/core/toggle';

import '@cds/core/toggle/register';
import { createReactComponent } from '../converter/react-wrapper';

type CdsToggleGroupType = ToggleGroup;
type CdsToggleType = Toggle;

export class CdsToggleGroup extends createReactComponent<CdsToggleGroupType>('cds-toggle-group') {}
export class CdsToggle extends createReactComponent<CdsToggleType>('cds-toggle') {}
