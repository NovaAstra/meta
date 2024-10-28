import { defineComponent } from "vue";

export const Table = defineComponent({
    name: 'MTable',
    setup() {
        return () => {
            <div class="m-table__wrapper">
                <div class="m-table-virtual-panel"></div>
                <div class='m-table-scroll-clip'>
                    <table>
                        
                    </table>
                </div>
            </div>
        }
    }
})