<script lang="ts" setup>
import { ref, onMounted } from "vue";

import { type TableObserver, useTableObserver } from "../composables/useTableObserver"

import Rows from "./Rows"
import { createContext } from "./useContext"

defineProps({
    rows: { type: Number, required: true },
    cols: { type: Number, required: true },
    size: {
        type: [Number, Array],
        default: [60, 30]
    }
})

const elRef = ref<HTMLElement>()

const observer: TableObserver = useTableObserver()

onMounted(() => {
    observer.observeRoot(elRef.value!)
})

createContext({ observer })
</script>

<template>
    <div class="meta-table-root" ref="elRef">
        <div class="meta-table-scroll-clip">
            <table border="1" cellspacing="0">
                <Rows :observer="observer" :start-col="0" :end-col="50" :start-row="0" :end-row="50"
                    v-slot="{ cidx, ridx }">
                    {{ cidx }} * {{ ridx }}
                </Rows>
            </table>
        </div>
        <div class="meta-table-virtual-panel"></div>
    </div>
</template>

<style>
@import "./table.css";
</style>