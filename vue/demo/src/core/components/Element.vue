<script lang="ts" setup>
import { type NativeElements } from "vue"

export type DOMElements = keyof NativeElements

export interface ElementProps {
    element: DOMElements
}

withDefaults(defineProps<ElementProps>(), {})
</script>

<template>
    <component :is="element">
        <slot></slot>
    </component>
</template>