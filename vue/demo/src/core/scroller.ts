type Truly = () => true

const truly: Truly = () => true

export class ScrollEventModel {
    public constructor(public viewport?: HTMLElement, public update?: (offset: number) => void) {
        if (viewport && !(viewport instanceof Element))
            console.error(`${viewport} is not a valid scroll view element.`)
    }

    public attach(viewport?: HTMLElement): Truly {
        if (!viewport && !this.viewport) {
            console.error(`Please ensure the scroll view is attached to enable scrolling functionality.`)
            return truly
        }


        if (viewport && !(viewport instanceof Element)) {
            console.error(`${viewport} is not a valid scroll view element.`)
            return truly
        }


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

    private readonly onScroll: (event: Event) => void = onScroll.bind(this)

    private readonly onWheel: (event: WheelEvent) => void = onWheel.bind(this)
}

function onScroll(this: ScrollEventModel, event: Event) {
    event.stopPropagation()

    this.update!(this.viewport!.scrollTop)
}

function onWheel(this: ScrollEventModel, event: WheelEvent) {
    event.preventDefault()
}