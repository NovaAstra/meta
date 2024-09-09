import { useModel } from "./useModel"

export function useStore(count: number, size: number) {
    const model = useModel(count, size)

    const getRange = () => { }

    const getSizes = () => { }

    const update = () => { }

    return {
        getRange,
        getSizes,
        update
    }
}

export type Store = ReturnType<typeof useStore>