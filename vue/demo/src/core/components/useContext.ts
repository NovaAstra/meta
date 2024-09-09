import { type InjectionKey, provide, inject } from "vue"

import { type TableObserver } from "../composables/useTableObserver"


export interface Context {
    observer: TableObserver;
}

const key: InjectionKey<Context> = Symbol("table")

export function createContext(context: Context) {
    provide(key, context)
}

export function useContext() {
    return inject(key)!
}