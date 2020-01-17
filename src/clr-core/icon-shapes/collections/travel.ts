/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { ClarityIcons } from '../icon.service';
import { IconAlias, IconShapeTuple } from '../interfaces/icon.interfaces';

import { airplaneIcon, airplaneIconName } from '../shapes/airplane';
import { bicycleIcon, bicycleIconName } from '../shapes/bicycle';
import { boatIcon, boatIconName } from '../shapes/boat';
import { campervanIcon, campervanIconName } from '../shapes/campervan';
import { carIcon, carIconName } from '../shapes/car';
import { caravanIcon, caravanIconName } from '../shapes/caravan';
import { compassIcon, compassIconName } from '../shapes/compass';
import { ferryIcon, ferryIconName } from '../shapes/ferry';
import { mapIcon, mapIconName } from '../shapes/map';
import { mapMarkerIcon, mapMarkerIconName } from '../shapes/map-marker';
import { onHolidayIcon, onHolidayIconName } from '../shapes/on-holiday';
import { trailerIcon, trailerIconName } from '../shapes/trailer';
import { truckIcon, truckIconName } from '../shapes/truck';

export const travelCollectionIcons: IconShapeTuple[] = [
  airplaneIcon,
  bicycleIcon,
  boatIcon,
  carIcon,
  campervanIcon,
  caravanIcon,
  compassIcon,
  ferryIcon,
  mapIcon,
  mapMarkerIcon,
  onHolidayIcon,
  trailerIcon,
  truckIcon,
];

export const travelCollectionAliases: IconAlias[] = [[airplaneIconName, ['plane']], [caravanIconName, ['auto']]];

/**
 * Function that can be called to load the core icon set.
 *
 * ```typescript
 * import '@clr/core/icon';
 * import { loadTravelIconSet } from '@clr/core/icon-shapes';
 *
 * loadTravelIconSet();
 * ```
 *
 */
export function loadTravelIconSet() {
  ClarityIcons.addIcons(...travelCollectionIcons);
  ClarityIcons.addAliases(...travelCollectionAliases);
}

declare module '@clr/core/common' {
  interface IconRegistrySources {
    [airplaneIconName]: string;
    [bicycleIconName]: string;
    [boatIconName]: string;
    [carIconName]: string;
    [caravanIconName]: string;
    [campervanIconName]: string;
    [compassIconName]: string;
    [ferryIconName]: string;
    [mapIconName]: string;
    [mapMarkerIconName]: string;
    [onHolidayIconName]: string;
    [trailerIconName]: string;
    [truckIconName]: string;
  }
}
