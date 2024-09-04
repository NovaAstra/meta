<script lang="ts" setup>
import { CSSProperties, type NativeElements, computed, ref, watch } from "vue"
import { type Observer } from "./useTableObserver"

export type DOMElements = keyof NativeElements

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

const elRef = ref<HTMLElement>()

const style = computed<CSSProperties>(() => ({
    display: 'grid',
    width: props.width + 'px',
    height: props.height + 'px'
}))

watch(
    () => elRef.value,
    (_, __, onCleanup) => {
        console.log(1)

        onCleanup(() => {
            console.log(2)
        })
    },
    {
        flush: "post"
    }
)
</script>

<template>
    <component ref="elRef" :is="element" :style="style">
        <slot></slot>
    </component>
</template>