export enum ActionTypeEnum {
    VIEWPORT_RESIZE,
    ELEMENT_RESIZE,
    SCROLL,
    LENGTH
}

export type ElementResize = Readonly<[index: number, size: number]>;

export type Actions =
    | [type: ActionTypeEnum.VIEWPORT_RESIZE, size: number]
    | [type: ActionTypeEnum.ELEMENT_RESIZE, entries: ElementResize]
    | [type: ActionTypeEnum.SCROLL, offset: number]
    | [type: ActionTypeEnum.LENGTH, length: number]

export class Store {
    public viewportSize: number = 0

    public update(...actions: Actions) {
        const [type, payload] = actions

        switch (type) {
            case ActionTypeEnum.VIEWPORT_RESIZE: {
                if (this.viewportSize !== payload)
                    this.viewportSize = payload

                break;
            }

            case ActionTypeEnum.ELEMENT_RESIZE: {
                break;
            }

            case ActionTypeEnum.SCROLL: {
                break;
            }

            case ActionTypeEnum.LENGTH: {
                break;
            }
        }
    }
}