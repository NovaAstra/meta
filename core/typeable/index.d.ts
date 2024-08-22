export type List<T = unknown> = Array<T>

export type Tail<T extends any[]> = T extends [any, ...infer R] ? R : never;

export type Length<T extends List> = T['length']

export type WritableArray<T> = T extends ReadonlyArray<infer U> ? U[] : T;

export type Arguments<T = unknown> = List<T>

export type Function<T extends List = unknown[], R = unknown> = (...args: T) => R

export type Return<T extends Function> = T extends ((...args: Arguments) => infer R) ? R : never

export type Mutable<T> = {
    -readonly [K in keyof T]: T[K]
} & {}

export type Promisable<T> = T | PromiseLike<T>;

export type Promisify<T extends Function> = (...args: Parameters<T>) => Promise<Return<T>>

export type Nullable<T> = T | undefined | null;

export type NonNullable<U extends unknown> = Exclude<U, undefined | null>

export type Optional<T> = T | undefined;

export type Maybe<T> = T | null;
