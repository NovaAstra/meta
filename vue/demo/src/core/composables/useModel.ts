export class Model {
    public constructor(
        public readonly defaultSize: number = 40,
        public readonly length: number = 0,
        public indices: number[] = [],
    ) { }

    public at(index: number): number {
        const size = this.indices[index]!
        return size ? size : this.defaultSize
    }

    public set(index: number, size: number) {
        this.indices[index] = size
    }
}


export function useModel(size: number, length: number): Model {
    return new Model(size, length)
}