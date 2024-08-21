import { type List } from "./array"

export type Arguments<T = unknown> = List<T>

export type Function<T extends List = unknown[], R = unknown> = (...args: T) => R

export type Return<T extends Function> = T extends ((...args: Arguments) => infer R) ? R : never