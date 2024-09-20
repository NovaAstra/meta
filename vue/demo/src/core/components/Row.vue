<script lang="ts" setup>
import Element from "./Element.vue"

export interface RowProps {
    element?: 'tr'
}

withDefaults(defineProps<RowProps>(), {
    element: "tr"
})


</script>

<template>
    <Element :element="element">
        <slot></slot>
    </Element>
</template>