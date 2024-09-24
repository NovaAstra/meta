import { defineComponent } from "vue"
import { useScroller } from "../vue"

export const List = defineComponent({
    setup() {
        const { viewport } = useScroller()

        return () => {
            return (
                <div class="list-root" ref={viewport}>
                    <div class="list-scroll-clip"></div>
                    <div class="list-virtual-panel" style="height:2000px"></div>
                </div>
            )
        }
    }
})