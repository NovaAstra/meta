import { type Store } from "./store"

export class ScrollEventModel {
    public constructor(
        private store: Store,
        private viewport?: HTMLElement | null
    ) { }

    public attach(viewport?: HTMLElement): () => true {
        if (!this.viewport && !viewport)
            console.warn('The scroll panel element is missing or unavailable.')

        if (this.viewport && viewport !== this.viewport) {
            this.detach()
        }

        if (viewport) this.viewport = viewport

        if (this.viewport) {
            this.viewport.addEventListener('scroll', this.onScroll.bind(this), { passive: true })
            this.viewport.addEventListener('wheel', this.onWheel.bind(this))
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

    private onScroll(event: Event) {
        event.stopPropagation();

        console.log(1)
    }

    private onWheel(event: WheelEvent) {
        event.preventDefault()

        console.log(event.deltaY)

    }
}