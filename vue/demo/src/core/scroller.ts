export class Scroller {
    public constructor(
        private element: HTMLElement
    ) { }

    public observe() {
        this.element.addEventListener("scroll", this.onScroll);
        this.element.addEventListener("wheel", this.onWheel, { passive: true });
        this.element.addEventListener("touchstart", this.onTouchStart, { passive: true });
        this.element.addEventListener("touchend", this.onTouchEnd, { passive: true });
    }

    public dispose() {
        this.element.removeEventListener("scroll", this.onScroll);
        this.element.removeEventListener("wheel", this.onWheel);
        this.element.removeEventListener("touchstart", this.onTouchStart);
        this.element.removeEventListener("touchend", this.onTouchEnd);
    }

    private onScroll() { }

    private onWheel() { }

    private onTouchStart() { }

    private onTouchEnd() { }
}