export type Next<I, O> = (input?: I) => O;

export type Middleware<I, O> = (input: I, next: Next<I, O>) => O;

export type Middlewares<I, O> = Middleware<I, O>[]

export type MiddlewareInput<I, O> = Middleware<I, O> | Middlewares<I, O> | PipelineLike<I, O>;

export type PipelineLike<I, O> = { middlewares: Middlewares<I, O> };

export function getMiddlewares<I, O>(input: MiddlewareInput<I, O>): Middlewares<I, O> {
    if (typeof input === 'function') return [input];

    if (Array.isArray(input)) return input

    if (input.middlewares) return input.middlewares

    throw new Error(`${input} is not a valid MiddlewareInput`);
}

export class Pipeline<I, O> implements PipelineLike<I, O> {
    public middlewares: Middlewares<I, O> = []

    public use(middleware: MiddlewareInput<I, O>): void {
        const middlewares = getMiddlewares<I, O>(middleware)

        this.middlewares.push(...middlewares)
    }

    public start(input: I): O {
        return this.dispatch(0, input);
    }

    private dispatch(index: number, input: I): O {
        if (index >= this.middlewares.length) return

        const fn = this.middlewares[index];
        const next = ((nextInput = input) => this.dispatch(index + 1, nextInput)) as Next<I, O>
        return fn(input, next);
    }
}