export class Model {
    public constructor(
        public size: number = 50,
        public count: number = 0,
        public autosizes: number[] = []
    ) { }

    public at(index: number): number {
        const size = this.autosizes[index]
        return size === undefined ? size : this.size
    }

    public set(index: number, size: number): boolean {
        const cache = this.autosizes[index]
        this.autosizes[index] = size
        return cache !== undefined
    }
}