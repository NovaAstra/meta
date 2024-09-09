<script lang="ts" setup>
import Element from "./Element.vue"

export interface CellProps {
    element?: 'td'
}

withDefaults(defineProps<CellProps>(), {
    element: "td"
})
</script>

<template>
    <Element :element="element">
        <slot></slot>
    </Element>
</template>