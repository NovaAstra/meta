import { useResizeObserver } from "./useResizeObserver"

export function useTableObserver() {
    let rootElement: HTMLElement | undefined

    const observer = useResizeObserver()

    return {
        observeRoot(element: HTMLElement) {
            observer.observe(rootElement = element)
        },
        observeCell() { },
        dispose() {
            observer.disconnect()
        }
    }
}

export type Observer = ReturnType<typeof useTableObserver>