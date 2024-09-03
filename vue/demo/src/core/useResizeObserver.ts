import { useDocument } from "./useDocument"
import { useWindow } from "./useWindow"

export interface Observer {
    observe(element: HTMLElement, callback?: ResizeObserverCallback): ResizeObserver | undefined;
    unobserve(element: HTMLElement): void;
    disconnect(): void;
}

export function useResizeObserver(globalCallback: ResizeObserverCallback): Observer {
    let observer: ResizeObserver | undefined

    return Object.freeze({
        observe(element: HTMLElement, callback?: ResizeObserverCallback): ResizeObserver | undefined {
            if (!(element instanceof Element)) {
                console.error(`${element} is not a valid observable element.`);
                return;
            }
            if (!observer) observer = new (useWindow(useDocument(element))).ResizeObserver(callback || globalCallback)
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
        disconnect() {
            observer && observer.disconnect()
        }
    })
}