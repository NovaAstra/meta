import { ScrollEventModel } from "../core/scroller"

export function useScroller() {
    const scroller = new ScrollEventModel()

    return {
        observe(viewport: HTMLElement) {
            return scroller.attach(viewport)
        },
        dispose(): boolean {
            return scroller.detach()
        }
    }
}