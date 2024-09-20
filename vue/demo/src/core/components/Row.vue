<script lang="ts" setup>
import { onMounted, getCurrentInstance } from "vue";
import Element from "./Element.vue"
import { useContext } from "./useContext"

export interface RowProps {
    element?: 'tr'
}

withDefaults(defineProps<RowProps>(), {
    element: "tr"
})

const instance = getCurrentInstance()!;

const { observer } = useContext()

onMounted(() => {
    observer.observeRow(instance.proxy!.$el)
})
</script>

<template>
    <Element :element="element">
        <slot></slot>
    </Element>
</template>