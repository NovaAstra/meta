
import { type VNode, defineComponent } from "vue"
import { useScroller } from "../vue"

export const Item = defineComponent({
    props: {
        index: { type: Number, default: 0 }
    },
    setup(props) {
        return () => <div style={props.index % 2 === 0 ? {
            height: '40px', background: 'gray'
        } : {
            height: '40px', background: 'red'
        }}>{props.index}</div>
    }
})

export const Items = defineComponent({
    props: {
        start: { type: Number, default: 0 },
        end: { type: Number, default: 0 },
    },
    setup(props) {
        return () => {
            const items: VNode[] = []

            for (let index = props.start; index < props.end; index++) {
                items.push(<Item index={index} />)
            }

            return items
        }
    }
})

export const List = defineComponent({
    setup() {
        const { viewport, range, y } = useScroller()

        return () => {

            return (
                <div class="list-root" ref={viewport}>
                    <div class="list-scroll-clip">
                        <div style={{ transform: `translateY(-${y.value}px)` }}>
                            <Items start={range[0]} end={range[1]} />
                        </div>
                    </div>
                    <div class="list-virtual-panel" style="height:2000px"></div>
                </div>
            )
        }
    }
})