import { ref, onMounted, onUnmounted } from "vue";
import { useScroller } from "../vue/useScroller"

export function useList() {
    const root = ref<HTMLElement>()

    const scroller = useScroller()

    onMounted(() => {
        scroller.observe(root.value!)
    })

    onUnmounted(() => {
        scroller.dispose()
    })

    return {
        root
    }
}