import { useResizeObserver } from "./useResizeObserver"

export function useTable() {
    let root: HTMLElement | undefined;

    const observer = useResizeObserver((entries) => {
        for (const { target, contentRect } of entries) {
            if (!(target as HTMLElement).offsetParent) continue;

            if (target === root) {

            }
        }
    })

    return Object.freeze({
        observeRoot(element: HTMLElement) {
            observer.observe((root = element));
        },
        observeCol(element: HTMLElement) {
            observer.observe(element);
        },
        observeRow(element: HTMLElement) {
            observer.observe(element);
        },
        dispose() {
            observer.dispose()
        }
    })
}