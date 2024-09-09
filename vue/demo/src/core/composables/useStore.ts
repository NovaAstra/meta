import { type Model, useModel } from "./useModel"

export enum ActionEnum {
    VIEWPORT,
    LENGTH
}

export type Actions =
    | [action: ActionEnum.VIEWPORT, size: number]
    | [action: ActionEnum.LENGTH, length: number]

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
        update(...args: Actions) {
            const [action] = args
            switch (action) {
                case ActionEnum.VIEWPORT:
                case ActionEnum.LENGTH:
            }
        }
    }
}

export type Store = ReturnType<typeof useStore>