import { Model } from "../core/model"

export function useModel(size: number, count: number): Model {
    return new Model(size, count)
}