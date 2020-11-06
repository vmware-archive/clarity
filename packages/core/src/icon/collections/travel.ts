/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { ClarityIcons } from '../icon.service.js';
import { IconAlias, IconShapeTuple } from '../interfaces/icon.interfaces.js';

import { airplaneIcon, airplaneIconName } from '../shapes/airplane.js';
import { bicycleIcon, bicycleIconName } from '../shapes/bicycle.js';
import { boatIcon, boatIconName } from '../shapes/boat.js';
import { campervanIcon, campervanIconName } from '../shapes/campervan.js';
import { carIcon, carIconName } from '../shapes/car.js';
import { caravanIcon, caravanIconName } from '../shapes/caravan.js';
import { compassIcon, compassIconName } from '../shapes/compass.js';
import { ferryIcon, ferryIconName } from '../shapes/ferry.js';
import { mapMarkerIcon, mapMarkerIconName } from '../shapes/map-marker.js';
import { mapIcon, mapIconName } from '../shapes/map.js';
import { onHolidayIcon, onHolidayIconName } from '../shapes/on-holiday.js';
import { trailerIcon, trailerIconName } from '../shapes/trailer.js';
import { truckIcon, truckIconName } from '../shapes/truck.js';

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

export const travelCollectionAliases: IconAlias[] = [
  [airplaneIconName, ['plane']],
  [caravanIconName, ['auto']],
];

/**
 * Function that can be called to load the core icon set.
 *
 * ```typescript
 * import '@cds/core/icon/register.js';
 * import { loadTravelIconSet } from '@cds/core/icon';
 *
 * loadTravelIconSet();
 * ```
 *
 */
export function loadTravelIconSet() {
  ClarityIcons.addIcons(...travelCollectionIcons);
  ClarityIcons.addAliases(...travelCollectionAliases);
}

declare module '@cds/core/internal' {
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
