export const DEFAULT_SIZE = 40 as const;

export class Model {
    public constructor(
        public size: number = DEFAULT_SIZE,
        public length: number = 0,
        public indices: number[] = [],
    ) { }

    public at(index: number): number {
        const size = this.indices[index]
        return size !== undefined ? size : this.size
    }

    public set(index: number, size: number): boolean {
        const cache = this.indices[index]
        if (cache !== size)
            this.indices[index] = size ?? this.size
        return cache !== undefined;
    }
}

export function getItemSize(model: Model, index: number): number {
    return model.at(index);
}

export function setItemSize(model: Model, index: number, size: number): boolean {
    return model.set(index, size)
}

export function findOffset(model: Model, index: number): number {
    if (!model.length) return 0;

    let top = 0;
    for (let i = 0; i <= index - 1; i += 1) {
        const size = getItemSize(model, i);
        top += size;
    }

    return top
}

export function findIndex() { }

export function getTotalSize(model: Model) {
    if (!model.length) return 0;

    return
}

export function getRange() {

}