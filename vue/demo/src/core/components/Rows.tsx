import { type PropType, type ComponentObjectPropsOptions, type Component, defineComponent } from "vue";

import Cell from "./Cell.vue"
import Row from "./Row.vue"

const props = {
    startCol: { type: Number, required: true },
    endCol: { type: Number, required: true },
    startRow: { type: Number, required: true },
    endRow: { type: Number, required: true },
    element: { type: String as PropType<'tr'>, default: 'tr' }
} satisfies ComponentObjectPropsOptions

export const Rows = defineComponent({
    name: "MetaRows",
    props,
    setup(props, { slots }) {
        return () => {
            const Rows: Component[] = []

            for (let ridx = props.startRow; ridx < props.endRow; ridx++) {
                const Cells: Component[] = []

                for (let cidx = props.startCol; cidx < props.endCol; cidx++) {
                    Cells.push(<Cell key={cidx}>{slots?.default?.({ cidx, ridx })}</Cell>)
                }

                Rows.push(<Row key={ridx}>{Cells}</Row>)
            }

            return Rows
        }
    }
})

export default Rows