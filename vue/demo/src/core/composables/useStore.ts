import { type Model, useModel } from "./useModel"

export type Range = Readonly<[startIndex: number, endIndex: number]>;

export class Store {
    public constructor(
        public readonly model: Model,
        public viewport: number = 0
    ) { }
}


export function useStore(length: number, size: number) {
    const model: Model = useModel(size, length)

    return new Store(model)
}
