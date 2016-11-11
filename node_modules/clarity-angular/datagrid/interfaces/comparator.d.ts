export interface Comparator<T> {
    compare(a: T, b: T): number;
}
