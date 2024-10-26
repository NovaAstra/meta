export type Snapshot = [size: number, indices: number[], override: number[]]

export const ESTIMATED_DEFAULT_SIZE = 60;

export class ViewModel {
    public offset: number[] = []

    public indices: number[] = []

    public override: number[] = []

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