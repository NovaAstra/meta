<script lang="ts" setup>
import { CSSProperties, type IntrinsicElementAttributes, computed, watch } from "vue"
import { type Observer } from "./useTableObserver"

export type DOMElements = keyof IntrinsicElementAttributes

export interface CellProps {
    width: number;
    height: number;
    left: number;
    top: number;
    observer: Observer
    element?: DOMElements,
}

const props = withDefaults(defineProps<CellProps>(), {
    element: 'div'
})

const style = computed<CSSProperties>(() => ({
    position: 'absolute',
    display: 'grid',
    width: props.width
}))
</script>

<template>
    <component :is="element" :style="style"></component>
</template>