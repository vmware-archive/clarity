/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { ClarityIcons } from '../icon.service.js';
import { IconAlias, IconShapeTuple } from '../interfaces/icon.interfaces.js';

import { bankIcon, bankIconName } from '../shapes/bank.js';
import { bitcoinIcon, bitcoinIconName } from '../shapes/bitcoin.js';
import { calculatorIcon, calculatorIconName } from '../shapes/calculator.js';
import { coinBagIcon, coinBagIconName } from '../shapes/coin-bag.js';
import { creditCardIcon, creditCardIconName } from '../shapes/credit-card.js';
import { dollarBillIcon, dollarBillIconName } from '../shapes/dollar-bill.js';
import { dollarIcon, dollarIconName } from '../shapes/dollar.js';
import { eCheckIcon, eCheckIconName } from '../shapes/e-check.js';
import { employeeGroupIcon, employeeGroupIconName } from '../shapes/employee-group.js';
import { employeeIcon, employeeIconName } from '../shapes/employee.js';
import { euroIcon, euroIconName } from '../shapes/euro.js';
import { factoryIcon, factoryIconName } from '../shapes/factory.js';
import { pesoIcon, pesoIconName } from '../shapes/peso.js';
import { piggyBankIcon, piggyBankIconName } from '../shapes/piggy-bank.js';
import { poundIcon, poundIconName } from '../shapes/pound.js';
import { rubleIcon, rubleIconName } from '../shapes/ruble.js';
import { rupeeIcon, rupeeIconName } from '../shapes/rupee.js';
import { shoppingBagIcon, shoppingBagIconName } from '../shapes/shopping-bag.js';
import { shoppingCartIcon, shoppingCartIconName } from '../shapes/shopping-cart.js';
import { storeIcon, storeIconName } from '../shapes/store.js';
import { walletIcon, walletIconName } from '../shapes/wallet.js';
import { wonIcon, wonIconName } from '../shapes/won.js';
import { yenIcon, yenIconName } from '../shapes/yen.js';

export const commerceCollectionIcons: IconShapeTuple[] = [
  bankIcon,
  bitcoinIcon,
  calculatorIcon,
  creditCardIcon,
  coinBagIcon,
  dollarIcon,
  dollarBillIcon,
  eCheckIcon,
  employeeGroupIcon,
  employeeIcon,
  euroIcon,
  factoryIcon,
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
 * import '@cds/core/icon/register.js';
 * import { loadCommerceIconSet } from '@cds/core/icon';
 *
 * loadCommerceIconSet();
 * ```
 *
 */
export function loadCommerceIconSet() {
  ClarityIcons.addIcons(...commerceCollectionIcons);
  ClarityIcons.addAliases(...commerceCollectionAliases);
}

declare module '@cds/core/internal' {
  interface IconRegistrySources {
    [bankIconName]: string;
    [bitcoinIconName]: string;
    [calculatorIconName]: string;
    [coinBagIconName]: string;
    [creditCardIconName]: string;
    [dollarIconName]: string;
    [dollarBillIconName]: string;
    [eCheckIconName]: string;
    [employeeIconName]: string;
    [employeeGroupIconName]: string;
    [euroIconName]: string;
    [factoryIconName]: string;
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
