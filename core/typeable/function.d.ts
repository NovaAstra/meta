import { type List } from "./list"

export type Arguments<T = unknown> = List<T>

export type Function<T = unknown, O = unknown> = (...args: Arguments<T>) => O

export type Return<T extends Function> = T extends ((...args: Arguments) => infer R) ? R : never