import { useResizeObserver } from "./useResizeObserver"

export function useTableObserver() {
    const observer = useResizeObserver()

    return {
        observeRoot() { },
        observeCell() { },
        dispose() { }
    }
}