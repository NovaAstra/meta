import { type Model, useModel } from "./useModel"

export class Store {
    private viewport: number = 0

    public constructor(private readonly model: Model) { }

    public getLength(): number {
        return this.model.length
    }

    public getViewport(): number {
        return this.viewport
    }

    public updateViewport(viewport: number): void {
        this.viewport = viewport
    }
}


export function useStore(length: number, size: number) {
    const model: Model = useModel(size, length)

    return new Store(model)
}
