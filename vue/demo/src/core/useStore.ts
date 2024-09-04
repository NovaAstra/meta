export class Store {
    public getViewportSize() { }

    public getVirtualSize() { }
}


export function useStore() {
    return new Store()
}