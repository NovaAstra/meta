import { type IntrinsicElementAttributes, h, defineComponent } from "vue"

export type DOMElements = keyof IntrinsicElementAttributes
export type ElementType = Parameters<typeof h>[0]

const Slot = defineComponent({
    inheritAttrs: false,
    setup() {
        return <div>11</div>
    }
})


export function createStyled(tag: ElementType) {
    const Primitive = defineComponent({
        inheritAttrs: false,
        props: {
            asChild: {
                type: Boolean,
                default: false,
            },
        },
        setup() {
            return () => <div>11</div>
        }
    })

    return Primitive
}

const styledFn = createStyled.bind(null) as any

export function factory() {
    const cache = new Map()

    const instance = new Proxy(styledFn, {
        apply(_, __, args: Parameters<typeof createStyled>) {
            return styledFn(...args)
        },
        get(_, el) {
            if (!cache.has(el)) {
                cache.set(el, styledFn(el))
            }
            return cache.get(el)
        }
    })

    return instance
}