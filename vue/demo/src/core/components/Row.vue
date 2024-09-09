<script lang="ts" setup>
import { onMounted, getCurrentInstance } from "vue";
import Element from "./Element.vue"
import { useContext } from "./useContext"

export interface RowProps {
    index: number;
    element?: 'tr'
}

const props = withDefaults(defineProps<RowProps>(), {
    element: "tr"
})

const instance = getCurrentInstance()!;

const { observer } = useContext()

onMounted(() => {
    observer.observeRow(instance.proxy!.$el, props.index)
})
</script>

<template>
    <Element :element="element" :data-row="index">
        <slot></slot>
    </Element>
</template>