export enum ModelActionEnum {

}

export class Model {
    public count: number = 0

    public viewportSize: number = 0

    public scrollSize: number = 0

    public scrollOffset: number = 0

    public autoSizes: number[] = []

    public update(action: ModelActionEnum): void {
        switch (action) { }
    }
}