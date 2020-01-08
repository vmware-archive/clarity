/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { ClarityIcons } from '../icon.service';
import { IconAlias, IconShapeTuple } from '../interfaces/icon.interfaces';

import { bankIcon, bankIconName } from '../shapes/bank';
import { bitcoinIcon, bitcoinIconName } from '../shapes/bitcoin';
import { calculatorIcon, calculatorIconName } from '../shapes/calculator';
import { coinBagIcon, coinBagIconName } from '../shapes/coin-bag';
import { creditCardIcon, creditCardIconName } from '../shapes/credit-card';
import { dollarIcon, dollarIconName } from '../shapes/dollar';
import { dollarBillIcon, dollarBillIconName } from '../shapes/dollar-bill';
import { eCheckIcon, eCheckIconName } from '../shapes/e-check';
import { euroIcon, euroIconName } from '../shapes/euro';
import { pesoIcon, pesoIconName } from '../shapes/peso';
import { piggyBankIcon, piggyBankIconName } from '../shapes/piggy-bank';
import { poundIcon, poundIconName } from '../shapes/pound';
import { rubleIcon, rubleIconName } from '../shapes/ruble';
import { rupeeIcon, rupeeIconName } from '../shapes/rupee';
import { shoppingBagIcon, shoppingBagIconName } from '../shapes/shopping-bag';
import { shoppingCartIcon, shoppingCartIconName } from '../shapes/shopping-cart';
import { storeIcon, storeIconName } from '../shapes/store';
import { walletIcon, walletIconName } from '../shapes/wallet';
import { wonIcon, wonIconName } from '../shapes/won';
import { yenIcon, yenIconName } from '../shapes/yen';

export const commerceCollectionIcons: IconShapeTuple[] = [
  bankIcon,
  bitcoinIcon,
  calculatorIcon,
  creditCardIcon,
  coinBagIcon,
  dollarIcon,
  dollarBillIcon,
  eCheckIcon,
  euroIcon,
  pesoIcon,
  piggyBankIcon,
  poundIcon,
  rubleIcon,
  rupeeIcon,
  shoppingBagIcon,
  shoppingCartIcon,
  storeIcon,
  walletIcon,
  wonIcon,
  yenIcon,
];

export const commerceCollectionAliases: IconAlias[] = [[piggyBankIconName, ['savings']]];

/**
 * Function that can be called to load the core icon set.
 *
 * ```typescript
 * import '@clr/core/icon';
 * import { loadCommerceIconSet } from '@clr/core/icon-shapes';
 *
 * loadCommerceIconSet();
 * ```
 *
 */
export function loadCommerceIconSet() {
  ClarityIcons.addIcons(...commerceCollectionIcons);
  ClarityIcons.addAliases(...commerceCollectionAliases);
}

declare module '@clr/core/common' {
  interface IconRegistrySources {
    [bankIconName]: string;
    [bitcoinIconName]: string;
    [calculatorIconName]: string;
    [coinBagIconName]: string;
    [creditCardIconName]: string;
    [dollarIconName]: string;
    [dollarBillIconName]: string;
    [eCheckIconName]: string;
    [euroIconName]: string;
    [pesoIconName]: string;
    [piggyBankIconName]: string;
    [poundIconName]: string;
    [rubleIconName]: string;
    [rupeeIconName]: string;
    [shoppingBagIconName]: string;
    [shoppingCartIconName]: string;
    [storeIconName]: string;
    [walletIconName]: string;
    [wonIconName]: string;
    [yenIconName]: string;
  }
}
