<script setup lang="ts">
import { useTableObserver } from "./core/useTableObserver"
import Cell from "./core/Cell.vue"

const observer = useTableObserver()
</script>

<template>
    <div class="viewport">
        <Cell :top="40" :left="100" :width="200" :height="80" :observer="observer"> demo</Cell>
    </div>
</template>
