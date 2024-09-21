import { getCurrentWindow, getCurrentDocument } from "./dom"

export class Resizer {
    private observer: ResizeObserver | undefined

    public constructor(
        private readonly globalCallback: ResizeObserverCallback
    ) { }

    public observe(element: HTMLElement, callback?: ResizeObserverCallback) {
        if (!(element instanceof Element)) {
            console.error(`${element} is not a valid observable HTMLElement.`);
            return;
        }

        const cb: ResizeObserverCallback = (...args: Parameters<ResizeObserverCallback>): void => {
            if (callback) return callback(...args)
            if (this.globalCallback) return this.globalCallback(...args)

            console.warn(`${element} lacks a callback for observing size changes.`);
        }

        if (!this.observer) this.observer = new (getCurrentWindow(getCurrentDocument(element))).ResizeObserver(cb)
        this.observer.observe(element)
        return this.observer
    }

    public unobserve(element: HTMLElement): void {
        if (!(element instanceof Element)) {
            console.error(`${element} is not a valid observable element.`);
            return;
        }

        this.observer!.unobserve(element)
    }

    public dispose(): void {
        if (this.observer) this.observer.disconnect()
    }
}