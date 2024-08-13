export type Arguments<T> = T extends (infer E)[] ? E[] : never

export type Function<T, O> = (...args: Arguments<T>) => O