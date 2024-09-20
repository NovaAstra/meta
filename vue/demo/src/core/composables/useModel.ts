export class Model {
    public constructor(
        public readonly defaultSize: number = 40,
        public readonly length: number = 0,
        public autosizes: number[] = [],
    ) { }

    public at(index: number): number {
        const size = this.autosizes[index]!
        return size ? size : this.defaultSize
    }

    public set(index: number, size: number) {
        this.autosizes[index] = size 
    }
}


export function useModel(size: number, length: number): Model {
    return new Model(size, length)
}

export function getSizes(mode: Model): number {
    let sizes: number = 0,
        index: number = 0

    while (index < 30) {
        sizes += mode.at(index)
        index++
    }

    return sizes
}