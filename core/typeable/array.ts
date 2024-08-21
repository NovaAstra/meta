export type List<T = unknown> = ReadonlyArray<T>

export type Length<T extends List> = T['length']

export type WritableArray<T> = T extends ReadonlyArray<infer U> ? U[] : T;