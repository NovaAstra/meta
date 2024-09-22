import { ref, onMounted, onUnmounted } from "vue";
import { useScroller } from "../vue/useScroller"
import { useStore } from "../vue/useStore"

export function useList() {
    const root = ref<HTMLElement>()

    const store = useStore()
    const scroller = useScroller(store)

    onMounted(() => {
        scroller.observe(root.value!)
    })

    onUnmounted(() => {
        scroller.dispose()
    })

    return {
        root,
        store
    }
}