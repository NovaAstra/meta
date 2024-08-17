import {
    type IntrinsicElementAttributes,
    type AllowedComponentProps,
    type ComponentCustomProps,
    type Component,
    h,
    defineComponent
} from "vue"

export type DOMElements = keyof IntrinsicElementAttributes
export type ElementType = Parameters<typeof h>[0]



export interface JsxFactory {
    <T extends ElementType>(component: T): Component
}

export type JsxElements = {
    [K in DOMElements]: Component
}

export type StyledFactoryFn = JsxFactory & JsxElements

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

const styledFn = createStyled.bind(null) as unknown as JsxFactory

export function factory() {
    const cache = new Map()

    const instance = new Proxy(styledFn, {
        apply(_, __, args: Parameters<typeof createStyled>) {
            return styledFn(...args)
        },
        get(_, el) {
            const as = el as unknown as ElementType
            if (!cache.has(as)) {
                cache.set(as, styledFn(as))
            }
            return cache.get(el)
        }
    })

    return instance
}

export const chroma = factory() as unknown as StyledFactoryFn