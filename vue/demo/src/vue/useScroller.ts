import { ref, onMounted, onUnmounted, reactive } from "vue"
import { ScrollEventModel } from "../core"

export function useScroller() {
    const viewport = ref<HTMLElement>()
    const range = reactive([0, 13])
    const y = ref(0)


    const scroller = new ScrollEventModel(undefined, (offset: number) => {
        const num = Math.floor(offset / 40)
        range[0] = num
        range[1] = num + 14
        y.value = offset % 40

        console.log(y.value, offset,range)
    })


    onMounted(() => {
        scroller.attach(viewport.value!)
    })

    onUnmounted(() => {
        scroller.detach()
    })

    return {
        viewport,
        range,
        y
    }
}