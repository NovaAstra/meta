import { useDocument } from "./useDocument"
import { useWindow } from "./useWindow"

export function useResizeObserver(globalCallback?: ResizeObserverCallback) {
    let observer: ResizeObserver | undefined

    return Object.freeze({
        observe(element: HTMLElement, callback?: ResizeObserverCallback): ResizeObserver | undefined {
            if (!(element instanceof Element)) {
                console.error(`${element} is not a valid observable HTMLElement.`);
                return;
            }

            const cb: ResizeObserverCallback = (...args: Parameters<ResizeObserverCallback>): void => {
                if (callback) return callback(...args)
                if (globalCallback) return globalCallback(...args)

                console.warn(`${element} lacks a callback for observing size changes.`);
            }

            if (!observer) observer = new (useWindow(useDocument(element))).ResizeObserver(cb)
            observer.observe(element)
            return observer
        },
        unobserve(element: HTMLElement) {
            if (!(element instanceof Element)) {
                console.error(`${element} is not a valid observable element.`);
                return;
            }
            observer!.unobserve(element)
        },
        dispose() {
            observer && observer.disconnect()
        }
    })
}
