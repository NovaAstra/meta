import { type Observer, useResizeObserver } from "./useResizeObserver"

export function useObserver(element: HTMLElement, observer: Observer) {
    observer.observe(element);
    return () => {
        observer.unobserve(element)
    }
}


export function useTable() {
    let root: HTMLElement | undefined;

    const visRows = new WeakMap<HTMLElement, number>()
    const visCols = new WeakMap<HTMLElement, number>()

    const observer = useResizeObserver((entries) => {
        for (const { target } of entries) {
            if (!(target as HTMLElement).offsetParent) continue;

            if (target === root) {

            }
        }
    })

    const bind = (weakMap: WeakMap<HTMLElement, number>) =>
        (element: HTMLElement, index: number) => {
            weakMap.set(element, index);
            observer.observe(element);
            return () => {
                weakMap.delete(element)
                observer.unobserve(element)
            }
        }

    return Object.freeze({
        observeRoot(element: HTMLElement) {
            observer.observe(root = element);
        },
        observeCol: bind(visCols),
        observeRow: bind(visRows),
        dispose: observer.dispose
    })
}