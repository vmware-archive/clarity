import { Comparator } from "./comparator";
import { Filter } from "./filter";
export interface State {
    page?: {
        from?: number;
        to?: number;
        size?: number;
    };
    sort?: {
        by: string | Comparator<any>;
        reverse: boolean;
    };
    filters?: ({
        property: string;
        value: string;
    } | Filter<any>)[];
}
