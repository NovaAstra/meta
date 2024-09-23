import { type Store } from "./store"

export type Viewport = HTMLElement | Window

export class ScrollEventModel {
    public constructor(
        public store: Store,
        private viewport?: Viewport | null,
    ) { }

    public attach(viewport?: Viewport): () => boolean {
        if (!this.viewport && !viewport)
            console.warn('The scroll panel element is missing or unavailable.')

        if (this.viewport && viewport !== this.viewport) {
            this.detach()
        }

        if (!(viewport instanceof Element)) {
            console.error(`${viewport} is not a valid HTMLElement.`);
            return () => false;
        }

        if (viewport) this.viewport = viewport

        if (this.viewport) {
            this.viewport.addEventListener('scroll', this.onScroll, { passive: true })
            this.viewport.addEventListener('wheel', this.onWheel)
        }

        return this.detach
    }

    public detach(): boolean {
        if (!this.viewport)
            console.warn('The scroll panel element is missing or unavailable.')

        if (!(this.viewport instanceof Element)) {
            console.error(`${this.viewport} is not a valid HTMLElement.`);
            return false;
        }

        if (this.viewport) {
            this.viewport.removeEventListener("scroll", this.onScroll)
            this.viewport.removeEventListener("wheel", this.onWheel)
            this.viewport = null
        }

        return true
    }

    private onScroll = onScroll.bind(this)

    private onWheel = onWheel.bind(this)
}


function onScroll(this: ScrollEventModel, event: Event) {
    event.stopPropagation()
}

function onWheel(this: ScrollEventModel, event: Event) {
    event.preventDefault()
}