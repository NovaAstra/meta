import { getWindow, getDocument } from "./dom"

function createResizeObserver(callback: ResizeObserverCallback) {
    let observer: ResizeObserver | undefined;

    return {
        observe(e: HTMLElement) {
            (
                observer ||
                (observer = new (getWindow(getDocument(e)).ResizeObserver)(callback))
            ).observe(e);
        },
        unobserve(e: HTMLElement) {
            observer!.unobserve(e);
        },
        dispose() {
            observer && observer.disconnect();
        },
    };
}