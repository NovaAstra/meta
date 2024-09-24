export class ScrollViewModel {
    public constructor(public viewport?: HTMLElement) {
        if (viewport && !(viewport instanceof Element))
            console.error(`${viewport} is not a valid scroll view element.`)
    }

    public attach(viewport?: HTMLElement): () => true {
        if (!viewport && !this.viewport)
            console.error(`Please ensure the scroll view is attached to enable scrolling functionality.`)


        if (viewport && !(viewport instanceof Element))
            console.error(`${viewport} is not a valid scroll view element.`)

        this.detach()

        if (viewport) this.viewport = viewport

        if (this.viewport) {
            this.viewport.addEventListener('scroll', this.onScroll, { passive: true })
            this.viewport.addEventListener('wheel', this.onWheel)
        }

        return this.detach
    }

    public detach(): true {
        if (this.viewport) {
            this.viewport.removeEventListener('scroll', this.onScroll)
            this.viewport.removeEventListener('wheel', this.onWheel)

            this.viewport = undefined
        }

        return true
    }

    private onScroll: (event: Event) => void = onScroll.bind(this)

    private onWheel: (event: WheelEvent) => void = onWheel.bind(this)
}

function onScroll(this: ScrollViewModel, event: Event) {
    event.stopPropagation()
    console.log(this.viewport!.scrollTop)
}

function onWheel(this: ScrollViewModel, event: WheelEvent) {
    event.preventDefault()

}