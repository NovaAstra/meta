export type Model = {
    readonly size: number;
    readonly length: number;
    readonly indices: number[]
}

export const UNCACHED = -1;

export function fill(array: number[], length: number, prepend?: boolean): number[] {
    const key = prepend ? "unshift" : "push";
    for (let i = 0; i < length; i++) {
        array[key](UNCACHED);
    }
    return array;
}

export function useModel(length: number, size: number): Model {
    return {
        size,
        length,
        indices: fill([], length)
    }
}