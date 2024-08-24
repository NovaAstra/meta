import { type Arguments, type Promisable } from "@meta-core/typeable"
import { Pipeline } from "@meta-core/pipeable"

export function unshift<R, I extends Arguments>(result: R, args: I): I {
    return result !== undefined ? [result, ...args.slice(1)] as I : args;
}

export abstract class HookFactory<I extends Arguments, O> {
    protected pipeline = new Pipeline<I, O>()

    public call(...args: I): Promisable<O> {
        return this.pipeline.start(args)
    }

    public abstract tap(callback: (...args: I) => Promisable<O>): void
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
        this.pipeline.use((input, next) => {
            const result = callback(...input)
            return result === undefined ? next() : this.call(...input)
        })
    }
}


export class AsyncParallelHook<I extends Arguments, O = void> extends HookFactory<I, O> {
    public tap(callback: (...args: I) => O): void {
        this.pipeline.use(async (input, next) => {
            callback(...input)
            return next()
        })
    }
}

export class AsyncParallelBailHook<I extends Arguments, O = void> extends HookFactory<I, O> {
    public tap(callback: (...args: I) => O): void {
        this.pipeline.use(async (input, next) => {
            const result = await callback(...input)
            if (result !== undefined) return next()
        })
    }
}

export class AsyncSeriesHook<I extends Arguments, O = void> extends HookFactory<I, O> {
    public tap(callback: (...args: I) => Promise<O>): void {
        this.pipeline.use(async (input, next) => {
            await callback(...input)
            return next()
        })
    }
}

export class AsyncSeriesBailHook<I extends Arguments, O = void> extends HookFactory<I, O> {
    public tap(callback: (...args: I) => Promise<O>): void {
        this.pipeline.use(async (input, next) => {
            const result = await callback(...input)
            return result !== undefined ? result : next()
        })
    }
}

export class AsyncSeriesWaterfallHook<I extends Arguments, O = void> extends HookFactory<I, O> {
    public tap(callback: (...args: I) => Promise<O>): void {
        this.pipeline.use(async (input, next) => {
            const result = await callback(...input)
            const nextInput = unshift(result, input)
            return next(nextInput)
        })
    }
}

