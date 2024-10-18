export type Snapshot = [indices: number[], override: number[], size: number]

export const DEFAULT_SIZE = 60

export class ViewModel {
    public size: number = DEFAULT_SIZE

    public length: number = 0

    public indices: Float32Array = new Float32Array()

    public override: Float32Array = new Float32Array()

    public readonly snapshot?: Snapshot

    public constructor(
        size: number,
        length: number,
        snapshot?: Snapshot
    ) {
        this.length = length
        this.snapshot = snapshot

        this.size = snapshot ? snapshot[2] : size
    }

    public clone() { }
}