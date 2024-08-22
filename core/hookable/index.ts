import { type Arguments } from "@meta-core/typeable"
import { Pipeline } from "@meta-core/pipeable"

export function unshift<R, I extends Arguments>(result: R, args: I): I {
    return result !== undefined ? [result, ...args.slice(1)] as I : args;
}

export abstract class HookFactory<I extends Arguments, O> {
    protected pipeline = new Pipeline<I, O>()

    public call(...args: I): O {
        return this.pipeline.start(args)
    }

    public abstract tap(callback: (...args: I) => O): void
}

export class SyncHook<I extends Arguments, O = void> extends HookFactory<I, O> {
    public tap(callback: (...args: I) => O): void {
        this.pipeline.use((input, next) => {
            callback(...input)
            return next()
        })
    }
}

export class SyncBailHook<I extends Arguments, O = void> extends HookFactory<I, O> {
    public tap(callback: (...args: I) => O): void {
        this.pipeline.use((input, next) => {
            const result = callback(...input)
            if (result !== undefined) return result;
            return next()
        })
    }
}

export class SyncWaterfallHook<I extends Arguments, O = void> extends HookFactory<I, O> {
    public tap(callback: (...args: I) => O): void {
        this.pipeline.use((input, next) => {
            const result = callback(...input)
            const nextInput = unshift(result, input)
            return next(nextInput)
        })
    }
}

export class SyncLoopHook<I extends Arguments, O = void> extends HookFactory<I, O> {
    public tap(callback: (...args: I) => O): void {

    }
}



// export class AsyncParallelHook<T, O> extends HookFactory<T, O> {
//     public tap(callback) {
//         this.use((input, next) => {
//             callback(...input)

//             next()
//         })
//     }
// }

// export class AsyncParallelBailHook<T, O> extends HookFactory<T, O> {

// }

// export class AsyncSeriesHook<T, O> extends HookFactory<T, O> { }

// export class AsyncSeriesBailHook<T, O> extends HookFactory<T, O> {
//     public tap(callback) {
//         this.use((input, next) => {
//             callback(...input).then(result => result !== undefined ? result : next())
//         })
//     }
// }

// export class AsyncSeriesWaterfallHook<T, O> extends HookFactory<T, O> { }

