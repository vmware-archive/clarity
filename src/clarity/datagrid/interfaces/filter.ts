import {Observable} from "rxjs";

export interface Filter<T> {
    isActive(): boolean;

    accepts(item: T): boolean;

    changes: Observable<any>;
}