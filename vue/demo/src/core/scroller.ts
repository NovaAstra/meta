import { type Store } from "./store"

export type Viewport = HTMLElement | Window

export class ScrollEventModel {
    public constructor(
        public store: Store,
        private viewport: Viewport | null | undefined,
    ) { }

    public attach(viewport?: Viewport): () => true {
        if (!this.viewport && !viewport)
            console.warn('The scroll panel element is missing or unavailable.')

        if (this.viewport && viewport !== this.viewport) {
            this.detach()
        }

        if (viewport) this.viewport = viewport

        if (this.viewport) {
            this.viewport.addEventListener('scroll', this.onScroll.bind(this))
            this.viewport.addEventListener('wheel', this.onWheel.bind(this), { passive: true })
        }

        return this.detach
    }

    public detach(): true {
        if (!this.viewport)
            console.warn('The scroll panel element is missing or unavailable.')

        if (this.viewport) {
            this.viewport.removeEventListener("scroll", this.onScroll)
            this.viewport.removeEventListener("wheel", this.onWheel)
            this.viewport = null
        }

        return true
    }

    private onScroll() {
        console.log(1)
    }

    private onWheel() {
        console.log(2)
    }
}