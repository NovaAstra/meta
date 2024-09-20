<script lang="ts" setup>
import { ref } from "vue";

import { Tbody } from "./Tbody"

defineProps({
    rows: { type: Number, required: true },
    cols: { type: Number, required: true },
    size: {
        type: [Number, Array],
        default: [60, 30]
    }
})

const elRef = ref<HTMLElement>()

</script>

<template>
    <div class="meta-table-root" ref="elRef" role="grid">
        <div class="meta-table-scroll-clip">
            <table border="1" cellspacing="0">
                <Tbody :start-col="0" :end-col="100" :start-row="0" :end-row="100" v-slot="{ rowIndex, colIndex }">
                    {{ colIndex }} * {{ rowIndex }}
                </Tbody>
            </table>
        </div>
        <div class="meta-table-virtual-panel" style="height: 1500px;"></div>
    </div>
</template>

<style>
@import "./table.css";
</style>