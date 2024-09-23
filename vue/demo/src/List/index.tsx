import { defineComponent } from "vue"

export const List = defineComponent({
    setup() {
        return () => {
            return (
                <div class="list-root">
                    <div class="list-scroll-clip"></div>
                    <div class="list-virtual-panel"></div>
                </div>
            )
        }
    }
})