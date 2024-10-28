import { defineComponent } from "vue";

export const Cell = defineComponent({
    name: 'MTableCell',
    setup(props, { slots }) {
        return () => <td>{slots.default?.()}</td>
    }
})