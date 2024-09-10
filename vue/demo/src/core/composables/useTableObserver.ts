import { type Observer, useResizeObserver } from "./useResizeObserver"
import { type Store, ActionEnum } from "./useStore"
import { WIDTH, HEIGHT } from "./constants"

export function useObserver(element: HTMLElement, observer: Observer) {
    observer.observe(element);
    return () => {
        observer.unobserve(element)
    }
}

export function useTableObserver(hs: Store, vs: Store) {
    let root: HTMLElement | undefined;

    const visRows = new WeakMap<HTMLElement, number>()
    const visCols = new WeakMap<HTMLElement, number>()

    const observer = useResizeObserver((entries) => {
        for (const { target, contentRect } of entries) {
            if (!(target as HTMLElement).offsetParent) continue;

            if (target === root) {
                hs.update(ActionEnum.VIEWPORT, contentRect[HEIGHT])
                vs.update(ActionEnum.VIEWPORT, contentRect[WIDTH])
            } else {

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

export type TableObserver = ReturnType<typeof useTableObserver>