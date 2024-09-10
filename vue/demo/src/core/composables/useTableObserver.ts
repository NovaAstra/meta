import { type Observer, useResizeObserver } from "./useResizeObserver"
import { type Store, ActionEnum } from "./useStore"
import { WIDTH_KEY, HEIGHT_KEY, AxisEnum } from "./constants"

export function useObserver(element: HTMLElement, observer: Observer) {
    observer.observe(element);
    return () => {
        observer.unobserve(element)
    }
}

export function useTableObserver(hs: Store, vs: Store) {
    let root: HTMLElement | undefined;

    const elements = new WeakMap<Element, [AxisEnum, number]>()

    const observer = useResizeObserver((entries) => {
        for (const { target, contentRect } of entries) {
            if (!(target as HTMLElement).offsetParent) continue;

            if (target === root) {
                hs.update(ActionEnum.VIEWPORT, contentRect[HEIGHT_KEY])
                vs.update(ActionEnum.VIEWPORT, contentRect[WIDTH_KEY])
            } else {
                const element = elements.get(target)
                if (element) {
                    const [axis, index] = element
                }
            }
        }
    })

    const bind = (axis: AxisEnum) =>
        (element: HTMLElement, index: number) => {
            elements.set(element, [axis, index]);
            observer.observe(element);
            return () => {
                elements.delete(element)
                observer.unobserve(element)
            }
        }

    return Object.freeze({
        observeRoot(element: HTMLElement) {
            observer.observe(root = element);
        },
        observeCol: bind(AxisEnum.COL),
        observeRow: bind(AxisEnum.ROW),
        dispose: observer.dispose
    })
}

export type TableObserver = ReturnType<typeof useTableObserver>