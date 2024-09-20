import { useResizeObserver } from "./useResizeObserver"
import { type Store } from "./useStore"
import { WIDTH_KEY, HEIGHT_KEY, RoleEnum, ActionEnum } from "./constants"

export function useTableObserver(hs: Store, vs: Store) {
    let root: HTMLElement | undefined;

    const observer = useResizeObserver((entries) => {
        for (const { target, contentRect } of entries) {
            if (!(target as HTMLElement).offsetParent) continue;

            if (target === root) {
                hs.update(ActionEnum.VIEWPORT_RESIZE, contentRect[HEIGHT_KEY])
                vs.update(ActionEnum.VIEWPORT_RESIZE, contentRect[WIDTH_KEY])
            } else {
                const role = target.getAttribute('role');

                if (role === RoleEnum.ROW) {
                    hs.update(ActionEnum.ROW_RESIZE, contentRect[HEIGHT_KEY])
                }
            }
        }
    })


    return Object.freeze({
        observeRoot(element: HTMLElement) {
            observer.observe(root = element);
        },
        observeRow(element: HTMLElement) {
            observer.observe(element);
            return () => {
                observer.unobserve(element)
            }
        },
        dispose: observer.dispose
    })
}

export type TableObserver = ReturnType<typeof useTableObserver>