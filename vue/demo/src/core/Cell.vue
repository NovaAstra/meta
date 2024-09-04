<script lang="ts" setup>
import { CSSProperties, type IntrinsicElementAttributes, computed } from "vue"

export type DOMElements = keyof IntrinsicElementAttributes

export interface CellProps {
    width: number;
    height: number;
    left: number;
    top: number;
    tag?: DOMElements,
}

const props = withDefaults(defineProps<CellProps>(), {
    tag: 'div'
})

const style = computed<CSSProperties>(() => ({
    position: 'absolute',
    display: 'grid',
    width: props.width
}))
</script>

<template>
    <component :is="tag" :style="style"></component>
</template>