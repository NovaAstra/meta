<script lang="ts" setup>
import { ref, onMounted } from "vue";

import { useTable } from "../composables/useTable"

import Rows from "./Rows"

defineProps({
    rows: { type: Number, required: true },
    cols: { type: Number, required: true },
    size: {
        type: [Number, Array],
        default: [60, 30]
    }
})

const root = ref<HTMLElement>()

const { observeRoot } = useTable()

onMounted(() => {
    observeRoot(root.value!)
})
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