export interface StringFilter<T> {
    accepts(item: T, search: string): boolean;
}
