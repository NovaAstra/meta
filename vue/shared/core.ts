export type Snapshot = [size: number, indices: number[], override: number[]]

export const ESTIMATED_DEFAULT_SIZE = 60;

export class ViewModel {
    public offsets: number[] = []

    public indices: number[] = []

    public override: number[] = []

    public lastMeasuredIndex: number = -1

    public constructor(
        public size: number = ESTIMATED_DEFAULT_SIZE,
        public length: number = 0,
        protected readonly snapshot?: Snapshot,
    ) {
        if (snapshot) {
            [this.size, this.indices, this.override] = snapshot
        }
    }
}

export function getItemSize(model: ViewModel, index: number): number {
    return model.indices[index] ?? model.size;
}

export function calculateOffset(model: ViewModel, index: number): number {
    if (!model.length) return 0

    if (model.lastMeasuredIndex >= index) {
        return model.offsets[index]
    }

    if (model.lastMeasuredIndex < 0) {
        model.offsets[0] = 0
        model.lastMeasuredIndex = 0
    }

    let offset = model.offsets[model.lastMeasuredIndex];

    for (let i = model.lastMeasuredIndex + 1; i <= index; i++) {
        offset += getItemSize(model, i);
        model.offsets[i] = offset;
    }

    model.lastMeasuredIndex = index
    return offset
}

export function calculateIndex(
    model: ViewModel,
    offset: number,
    low: number = 0,
    high: number = model.length - 1
): number {
    while (low <= high) {
        const middle = Math.floor((low + high) / 2)
        const itemOffset = calculateOffset(model, middle)

        if (itemOffset <= offset) {
            if (itemOffset + getItemSize(model, middle) > offset)
                return middle

            low = middle + 1;
        } else {
            high = middle - 1;
        }
    }

    return Math.min(model.length - 1, Math.max(0, low))
}

export function calculateRange(
    model: ViewModel,
    scrollOffset: number,
    viewportSize: number,
    prevStartIndex: number
): [number, number] {
    prevStartIndex = Math.min(prevStartIndex, model.length - 1);

    if (calculateOffset(model, prevStartIndex) <= scrollOffset) {
        const end = calculateIndex(model, scrollOffset + viewportSize, prevStartIndex)
        return [calculateIndex(model, scrollOffset, prevStartIndex, end), end]
    }

    const start = calculateIndex(model, scrollOffset, 0, prevStartIndex)
    return [start, calculateIndex(model, scrollOffset + viewportSize, start)]
}