export type Snapshot = [sizes: number[], override: number[], size: number]

export const DEFAULT_SIZE = 60

export class ViewModel {
    public size: number

    public length: number = 0

    public indices: number[] = []

    public readonly snapshot?: Snapshot

    public constructor(
        length: number,
        size: number = DEFAULT_SIZE,
        snapshot?: Snapshot
    ) {
        this.length = length
        this.size = snapshot ? snapshot[2] : size
    }
}