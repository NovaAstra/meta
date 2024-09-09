import { type Model, useModel } from "./useModel"


export function useStore(count: number, size: number) {
    const viewport: number = 0

    const model: Model = useModel(count, size)

    return {
        getRange() {

        },
        getSizes() { },
        getLength(): number {
            return model.length
        },
        getViewport(): number {
            return viewport
        },
        update() { }
    }
}

export type Store = ReturnType<typeof useStore>