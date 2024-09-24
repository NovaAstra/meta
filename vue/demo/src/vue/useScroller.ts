import { ref, onMounted, onUnmounted } from "vue"
import { ScrollViewModel } from "../core"

export function useScroller() {
    const viewport = ref<HTMLElement>()
    const scroller = new ScrollViewModel()

    onMounted(() => {
        scroller.attach(viewport.value!)
    })

    onUnmounted(() => {
        scroller.detach()
    })

    return {
        viewport
    }
}