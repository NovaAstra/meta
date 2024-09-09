<script lang="ts" setup>
import { type PropType } from "vue"

import { type Size, useTable } from "./useTable"
import Rows from "./Rows"

const props = defineProps({
    rows: { type: Number, required: true },
    cols: { type: Number, required: true },
    size: {
        type: [Number, Array] as PropType<Size>,
        default: [60, 30]
    }
})

const { root } = useTable(props)
</script>

<template>
    <div class="meta-table-root" ref="root">
        <div class="meta-table-scroll-clip">
            <table border="1" cellspacing="0">
                <Rows :start-col="0" :end-col="50" :start-row="0" :end-row="50" v-slot="{ cidx, ridx }">
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