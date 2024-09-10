import { type Model, useModel } from "./useModel"
import { ActionEnum } from "./constants"

export type ItemResize = Readonly<[index: number, size: number]>;

export type Actions =
    | [action: ActionEnum.VIEWPORT, size: number]
    | [action: ActionEnum.LENGTH, length: number]
    | [action: ActionEnum.ELEMENT, entries: ItemResize[]]

export function useStore(length: number, size: number) {
    let viewport: number = 0

    const model: Model = useModel(length, size)

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
        update(...args: Actions) {
            const [action, payload] = args
            switch (action) {
                case ActionEnum.VIEWPORT:
                    if (payload !== viewport) {
                        viewport = payload
                    }
                    break;
                case ActionEnum.LENGTH:
            }
        }
    }
}

export type Store = ReturnType<typeof useStore>