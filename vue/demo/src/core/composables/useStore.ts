export function useStore() {
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