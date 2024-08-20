export type List<T = unknown[]> = T extends (infer E)[] ? ReadonlyArray<E> : never

export type Length<T extends List> = T['length']