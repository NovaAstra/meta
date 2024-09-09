import { ref, watch, onMounted, onUnmounted } from "vue"

import { useStore } from "../composables/useStore"

export type Size = number | [number, number] | [number]

export interface TableProps {
    rows: number;
    cols: number;
    size: Size
}

export function useTable(props: Partial<TableProps>) {
    const root = ref<HTMLElement>()

    const hStore = useStore()
    const vStore = useStore()

    onMounted(() => { })

    onUnmounted(() => { })

    return {
        root,
        hStore,
        vStore
    }
}