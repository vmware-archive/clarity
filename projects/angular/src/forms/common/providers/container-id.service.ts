import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

let counter = 0;

/**
 * @TODO No idea why I need to use provideIn .. without I'm getting error that
 * ContainerIdService is not defined - But this must be optional service!?
 *
 * There is something wrong - will come back to investigate it when I have more time
 *
 */
@Injectable()
export class ContainerIdService {
  private _id = `clr-form-container-${++counter}`;
  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
    this._idChange.next(value);
  }

  private _idChange: BehaviorSubject<string> = new BehaviorSubject(this._id);
  public get idChange(): Observable<string> {
    return this._idChange.asObservable();
  }
}
