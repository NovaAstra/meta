export type Snapshot = [size: number, indices: number[], override: number[]]

export const ESTIMATED_DEFAULT_SIZE = 60;

export class ViewModel {
    public offset: number[] = []

    public indices: number[] = []

    public override: number[] = []

    public constructor(
        public size: number = ESTIMATED_DEFAULT_SIZE,
        public length: number = 0,
        readonly snapshot?: Snapshot,
    ) {
        if (snapshot) {
            [this.size, this.indices, this.override] = snapshot
        }
    }
}

export function findIndex(
    model: ViewModel,
    offset: number,
    low: number = 0,
    high: number = model.length - 1
) {
    while (low <= high) {
        const middle = Math.floor((low + high) / 2)
    }
}

export function getItemSize(model: ViewModel, index: number) {
    const size = model.indices[index]
    return size === undefined ? model.size : size
}

export function setItemSize(model: ViewModel, index: number, size: number) {
    model.indices[index] = size
}

export function aggregateSize() { }

export function computedOffset(model: ViewModel, index: number) {
    if (!model.length) return 0
}

