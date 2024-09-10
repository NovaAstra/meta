import { type Model, useModel } from "./useModel"

export enum ActionEnum {
    VIEWPORT,
    LENGTH
}

export type Actions =
    | [action: ActionEnum.VIEWPORT, viewport: number]
    | [action: ActionEnum.LENGTH, length: number]

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