import { Store } from "../core/store"

export function useStore(): Store {
    return new Store()
}