/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { User } from './user';
import { BEGINNING, COLORS, NAMES, NOW, POKEMONS } from './values';

export class Inventory {
  public size = 100;
  public latency = 0;

  private _all: User[];
  private _currentQuery: User[];

  get all(): User[] {
    return this._all.slice();
  }

  reset() {
    this._all = [];
    for (let i = 0; i < this.size; i++) {
      this._all.push({
        id: randomInt(100000),
        name: NAMES[randomInt(NAMES.length)],
        creation: new Date(BEGINNING + randomInt(NOW - BEGINNING)),
        color: COLORS[randomInt(COLORS.length)],
        pokemon: POKEMONS[randomInt(POKEMONS.length)],
      });
    }
  }

  private _checkCurrentQuery() {
    if (!this._currentQuery) {
      this._currentQuery = this._all.slice();
    }
  }

  filter(filters: { [key: string]: string[] }): Inventory {
    this._checkCurrentQuery();
    if (filters) {
      for (const key in filters) {
        if (filters[key].length === 0) {
          continue;
        }

        let getFilterProperty = (user: User) => '' + user[key];
        if (key === 'pokemon') {
          getFilterProperty = (user: User) => user.pokemon.name;
        }

        const lowerCase = filters[key].map(value => value.toLowerCase());
        this._currentQuery = this._currentQuery.filter(user => {
          for (const value of lowerCase) {
            if (
              getFilterProperty(user)
                .toLowerCase()
                .indexOf(value) >= 0
            ) {
              return true;
            }
          }
          return false;
        });
      }
    }
    return this;
  }

  sort(sort: { by: string; reverse: boolean }): Inventory {
    this._checkCurrentQuery();
    if (sort && sort.by) {
      let getSortProperty = (user: User) => user[sort.by];
      if (sort.by === 'pokemon') {
        getSortProperty = (user: User) => user.pokemon.number;
      }

      this._currentQuery.sort((a, b) => {
        let comp = 0;
        const propA = getSortProperty(a),
          propB = getSortProperty(b);
        if (propA < propB) {
          comp = -1;
        } else if (propA > propB) {
          comp = 1;
        }
        if (sort.reverse) {
          comp = -comp;
        }
        return comp;
      });
    }
    return this;
  }

  fetch(skip: number = 0, limit: number = this._currentQuery.length): Promise<FetchResult> {
    const result: FetchResult = {
      users: this._currentQuery.slice(skip, skip + limit),
      length: this._currentQuery.length,
    };
    this._currentQuery = null;
    return this._fakeHttp(result);
  }

  private _fakeHttp<T>(result: T): Promise<T> {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(result), this.latency);
    });
  }
}

export interface FetchResult {
  users: User[];
  length: number;
}

function randomInt(max: number): number {
  return Math.floor(Math.random() * max);
}
