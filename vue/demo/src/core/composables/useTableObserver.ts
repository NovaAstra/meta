import { useResizeObserver } from "./useResizeObserver"
import { type Store } from "./useStore"

export function useTableObserver(hs: Store, vs: Store) {
    let root: HTMLElement | undefined;

    const observer = useResizeObserver((entries) => {
        for (const { target, contentRect } of entries) {
            if (!(target as HTMLElement).offsetParent) continue;

            if (target === root) {
              
            } else {
                const role = target.getAttribute('role');

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