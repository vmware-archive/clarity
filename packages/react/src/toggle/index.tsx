import { CdsToggleGroup as ToggleGroup, CdsToggle as Toggle } from '@cds/core/toggle';
import '@cds/core/toggle/register';
import { createComponent } from '../converter/react-wrapper.js';

export const CdsToggleGroup = createComponent('cds-toggle-group', ToggleGroup);
export const CdsToggle = createComponent('cds-toggle', Toggle);
