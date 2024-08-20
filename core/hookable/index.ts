export type Next<T, O> = (input?: T) => O;

export type Middleware<T, O> = (input: T, next: Next<T, O>) => O

export type Middlewares<T, O> = Middleware<T, O>[];

export type PipelineLike<T, O> = { middlewares: Middlewares<T, O> };

export type MiddlewareInput<T, O> = Middleware<T, O> | Middlewares<T, O> | PipelineLike<T, O>;

export function getMiddlewares<T, O>(input: MiddlewareInput<T, O>): Middlewares<T, O> {
    if (typeof input === 'function') return [input];

    if (Array.isArray(input)) return input

    if (input.middlewares) return input.middlewares

    throw new Error(`${input} is not a valid Middleware`);
}

export function unshift<T>(element: T, args: T[]): T[] {
    return element ? [element].concat(args.slice(0, -1)) : args;
}

export class Pipeline<T = unknown, O = unknown> implements PipelineLike<T, O> {
    public middlewares: Middlewares<T, O> = []

    public use(middleware: MiddlewareInput<T, O>): void {
        const middlewares = getMiddlewares<T, O>(middleware)

        this.middlewares.push(...middlewares)
    }

    public start(input: T): O {
        return this.dispatch(0, input);
    }

    private dispatch(index: number, input: T): O {
        const fn = this.middlewares[index];
        const next = ((nextInput = input) => this.dispatch(index + 1, nextInput)) as Next<T, O>

        return fn(input, next);
    }
}

export abstract class HookFactory<T, O> extends Pipeline<T, O> {
    public call(...args: any[]) {
        this.start(args as T)
    }
}

export class SyncHook<T, O> extends HookFactory<T, O> {

}

export class SyncBailHook<T, O> extends HookFactory<T, O> {
    public tap(callback) {
        this.use((input, next) => {
            const result = callback(...input)

            if (result !== undefined) return result;

            return next()
        })
    }
}

export class SyncWaterfallHook<T, O> extends HookFactory<T, O> {
    public tap(callback) {
        this.use((input, next) => {
            const result = callback(...input)

            const nextInput = unshift(result, input)

            return next(nextInput)
        })
    }
}

export class SyncLoopHook<T, O> extends HookFactory<T, O> {
    public tap(callback) {

    }
}

export class AsyncParallelHook<T, O> extends HookFactory<T, O> {
    public tap(callback) {
        this.use((input, next) => {
            callback(...input)

            next()
        })
    }
}

export class AsyncParallelBailHook<T, O> extends HookFactory<T, O> {

}

export class AsyncSeriesHook<T, O> extends HookFactory<T, O> { }

export class AsyncSeriesBailHook<T, O> extends HookFactory<T, O> {
    public tap(callback) {
        this.use((input, next) => {
            callback(...input).then(result => result !== undefined ? result : next())
        })
    }
}

export class AsyncSeriesWaterfallHook<T, O> extends HookFactory<T, O> { }

