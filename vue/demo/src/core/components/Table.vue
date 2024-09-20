<script lang="ts" setup>
import { ref, onMounted } from "vue";

import { type TableObserver, useTableObserver } from "../composables/useTableObserver"
import { useStore } from "../composables/useStore"

import { Tbody } from "./Tbody"
import { createContext } from "./useContext"

const props = defineProps({
    rows: { type: Number, required: true },
    cols: { type: Number, required: true },
    size: {
        type: [Number, Array],
        default: [60, 30]
    }
})

const elRef = ref<HTMLElement>()

const hs = useStore(props.rows, props.size[1])
const vs = useStore(props.cols, props.size[0])
const observer: TableObserver = useTableObserver(hs, vs)

onMounted(() => {
    observer.observeRoot(elRef.value!)
})

createContext({ observer })
</script>

<template>
    <div class="meta-table-root" ref="elRef" role="grid">
        <div class="meta-table-scroll-clip">
            <table border="1" cellspacing="0" >
                <Tbody :observer="observer" :start-col="0" :end-col="50" :start-row="0" :end-row="50"
                    v-slot="{ rowIndex, colIndex }">
                    {{ colIndex }} * {{ rowIndex }}
                </Tbody>
            </table>
        </div>
        <div class="meta-table-virtual-panel"></div>
    </div>
</template>

<style>
@import "./table.css";
</style>