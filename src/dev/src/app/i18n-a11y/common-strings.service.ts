/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Injectable, Inject, LOCALE_ID } from '@angular/core';
import { ClrCommonStrings } from '@clr/angular';

@Injectable()
export class CommonStringsService implements ClrCommonStrings {
  constructor(@Inject(LOCALE_ID) locale: string) {
    // Pretend we use the current locale here to retrieve the correct strings.
    // We just hardcode French for this example.
  }

  open = 'Ouvrir';
  close = 'Fermer';
  show = 'Montrer';
  hide = 'Masquer';
  expand = 'Dérouler';
  collapse = 'Enrouler';
  more = 'Plus';
  select = 'Sélectionner';
  selectAll = 'Tout sélectionner';
  previous = 'Précédent';
  next = 'Suivant';
  current = "Aujourd'hui";
  info = 'Info';
  success = 'Succès';
  warning = 'Avertissement';
  danger = 'Erreur';
  rowActions = 'Actions disponibles';
  pickColumns = 'Modifier les colonnes';
}
