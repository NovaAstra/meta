// @ts-nocheck

export type Setup<Hooks, API> = (api: API) => void

export type PluginOptions<Hooks, Setup = undefined> = {
    name?: string;
    pre?: string[];
    post?: string[];
    rivals?: string[];
    required?: string[];
    setup?: Setup;
    usePlugins?: PluginOptions<any, any>[];
    registerHook?: Partial<Hooks>;
}


export type Plugin<Hooks, API> = Required<PluginOptions<Hooks, Setup<Hooks, API>>>


export function createScheduler(hooks, models) {
    const scheduler = Object.create()

    if (models) {
        for (const key in models) {

        }

        scheduler[key] = (...args) => models[key].run.apply(null, ...args)
    }

    return scheduler;
}

export class PluginFactory {
    private plugins = []

    public constructor(plugins) {
        this.plugins = [...plugins]
    }

    public bootstrap() { }
}

export function plugable() {
    const factory = new PluginFactory();
    const scheduler = factory.bootstrap()
    return scheduler
}