export enum ActionEnum {
    VIEWPORT_RESIZE
}

export class Store {
    public getViewportSize() { }

    public getVirtualSize() { }

    public update(action: ActionEnum): void {
        switch (action) {
            case ActionEnum.VIEWPORT_RESIZE: {

            }
        }
    }
}


export function useStore() {
    return new Store()
}