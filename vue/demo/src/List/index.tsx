import "./index.css"

import { defineComponent } from "vue"
import { useList } from "./useList"

export const List = defineComponent({
    setup() {
        const { root } = useList()

        return () => {
            return (
                <div class="list-root" ref={root}>
                    <div class="list-scroll-clip"></div>
                    <div class="list-virtual-panel"></div>
                </div>
            )
        }
    }
})