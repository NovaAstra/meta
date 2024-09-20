import { type ComponentObjectPropsOptions, type Component, type ExtractPropTypes, defineComponent } from "vue";

import Cell from "./Cell.vue"
import Row from "./Row.vue"
import { RoleEnum } from "../composables/constants"

export const tbodyProps = {
    startRow: { type: Number, required: true },
    endRow: { type: Number, required: true },
    startCol: { type: Number, required: true },
    endCol: { type: Number, required: true },
} satisfies ComponentObjectPropsOptions

export type TbodyPropsProp = ExtractPropTypes<typeof tbodyProps>

export const Tbody = defineComponent({
    name: "Tbody",
    props: tbodyProps,
    setup(props, ctx) {
        return () => {
            const Rows: Component[] = []

            for (let rowIndex = props.startRow; rowIndex < props.endRow; rowIndex++) {
                const Cells: Component[] = []

                for (let colIndex = props.startCol; colIndex < props.endCol; colIndex++) {
                    Cells.push(<Cell key={colIndex} aria-colindex={colIndex} element="td" role={RoleEnum.CELL}>{ctx.slots.default?.({ rowIndex, colIndex })}</Cell>)
                }

                Rows.push(<Row key={rowIndex} index={rowIndex} aria-rowindex={rowIndex} row-index={rowIndex} element="tr" role={RoleEnum.ROW}>{Cells}</Row>)
            }

            return Rows
        }
    }
})