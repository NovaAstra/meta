import { useDocument } from "./useDocument"
import { useWindow } from "./useWindow"

export function useResizeObserver(globalCallback?: ResizeObserverCallback) {
    let observer: ResizeObserver | undefined

    return Object.freeze({
        observe(node: HTMLElement, callback?: ResizeObserverCallback): ResizeObserver | undefined {
            if (!(node instanceof Element)) {
                console.error(`${node} is not a valid observable HTMLElement.`);
                return;
            }

            const cb: ResizeObserverCallback = (...args: Parameters<ResizeObserverCallback>): void => {
                if (callback) return callback(...args)
                if (globalCallback) return globalCallback(...args)

                console.warn(`${node} lacks a callback for observing size changes.`);
            }

            if (!observer) observer = new (useWindow(useDocument(node))).ResizeObserver(cb)
            observer.observe(node)
            return observer
        },
        unobserve(node: HTMLElement) {
            if (!(node instanceof Element)) {
                console.error(`${node} is not a valid observable element.`);
                return;
            }
            observer!.unobserve(node)
        },
        disconnect() {
            observer && observer.disconnect()
        }
    })
}