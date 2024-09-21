import { type Model } from "./model"

export class Store {
    public viewport: number = 0;

    public constructor(
        public model: Model
    ) { }
}