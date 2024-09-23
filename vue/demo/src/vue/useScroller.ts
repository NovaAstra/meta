import { ScrollEventModel } from "../core/scroller"
import { type Store } from "../core/store"

export function useScroller(store: Store) {
    const scroller = new ScrollEventModel(store, undefined)

    return {
        observe(viewport: HTMLElement) {
            return scroller.attach(viewport)
        },
        dispose(): boolean {
            return scroller.detach()
        }
    }
}