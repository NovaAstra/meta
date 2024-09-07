<script lang="ts" setup>
import { type NativeElements } from "vue"

export type DomElements = keyof NativeElements

export interface CellProps {
    element?: DomElements
}

withDefaults(defineProps<CellProps>(), {
    element: 'td'
})
</script>

<template>
    <component :is="element"></component>
</template>