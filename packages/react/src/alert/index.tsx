import { CdsAlert as Alert } from '@clr/core/alert';
import { CdsAlertActions as AlertActions } from '@clr/core/alert';
import { CdsAlertGroup as AlertGroup } from '@clr/core/alert';
import '@clr/core/alert/register';
import { createReactComponent } from '../converter/react-wrapper';

type CdsAlertType = Alert & { onCloseChange: (e: any) => void };
type CdsAlertActionsType = AlertActions;
type CdsAlertGroupType = AlertGroup;

export class CdsAlert extends createReactComponent<CdsAlertType>('cds-alert') {}
export class CdsAlertActions extends createReactComponent<CdsAlertActionsType>('cds-alert-actions') {}
export class CdsAlertGroup extends createReactComponent<CdsAlertGroupType>('cds-alert-group') {}
