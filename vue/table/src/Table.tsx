import { defineComponent } from "vue";

export const Table = defineComponent({
    name: 'Table',
    setup() {
        return () => {
            <div class="table__wrapper">
                <div class="table-virtual-panel"></div>
                <div class='table-scroll-clip'>
                    <table>

                    </table>
                </div>
            </div>
        }
    }
})