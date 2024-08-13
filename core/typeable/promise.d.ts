import type { Function, Return } from "./function"

export type Promisable<T> = T | PromiseLike<T>;

export type Promisify<T extends Function> = (...args: Parameters<T>) => Promise<Return<T>>

