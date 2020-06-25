import { CdsAlert as Alert } from '@clr/core/alert';
import { CdsAlertActions as AlertActions } from '@clr/core/alert';
import { CdsAlertGroup as AlertGroup } from '@clr/core/alert';
import '@clr/core/alert/register';
import { createReactComponent } from '../converter/react-wrapper';

type CdsAlertType = Alert & { onCloseChange: (e: any) => void };
type CdsAlertActionsType = AlertActions;
type CdsAlertGroupType = AlertGroup;

export const CdsAlert = createReactComponent<CdsAlertType>('cds-alert');
export const CdsAlertActions = createReactComponent<CdsAlertActionsType>('cds-alert-actions');
export const CdsAlertGroup = createReactComponent<CdsAlertGroupType>('cds-alert-group');
