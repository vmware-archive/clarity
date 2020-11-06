import { CdsAlert as Alert } from '@cds/core/alert';
import { CdsAlertActions as AlertActions } from '@cds/core/alert';
import { CdsAlertGroup as AlertGroup } from '@cds/core/alert';
import '@cds/core/alert/register';
import { createReactComponent } from '../converter/react-wrapper';

type CdsAlertType = Alert & { onCloseChange: (e: any) => void };
type CdsAlertActionsType = AlertActions;
type CdsAlertGroupType = AlertGroup;

export class CdsAlert extends createReactComponent<CdsAlertType>('cds-alert') {}
export class CdsAlertActions extends createReactComponent<CdsAlertActionsType>('cds-alert-actions') {}
export class CdsAlertGroup extends createReactComponent<CdsAlertGroupType>('cds-alert-group') {}
