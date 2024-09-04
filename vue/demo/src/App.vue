<script setup lang="ts">
import { ref } from "vue";

import { useTableObserver } from "./core/useTableObserver"
import Cell from "./core/Cell.vue"

const observer = useTableObserver()

const value = ref({
    rows: 100,
    cols: 100,
    data: [
        [1, 2, 3, 4, 5, 6, 7, 8, 9],
        [11, 22, 33, 44, 55, 66, 77, 88, 99],
    ],
    rowGroups: [],
    colGroups: []
})
</script>

<template>
    <table class="viewport">
        <tr v-for="ridx in 10" :key="ridx">
            <td v-for="cidx in 10" :key="cidx">
                <Cell :top="40" :left="100" :width="200" :height="80" :observer="observer">
                    demo
                </Cell>
            </td>
        </tr>
    </table>
</template>
