// @ts-ignore

import { type HookFactory } from "@meta-core/hookable"

export type Hook = HookFactory<any[], any>

export type Hooks = Record<string, Hook>

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

export function sortPlugins(plugins) {
    const p = []
    for (const plugin of plugins) {
        const post = plugin.post
        const pre = plugin.pre
    }
}

export function createScheduler(hooks, models) {
    const scheduler = Object.create(null)

    for (const key in models) {
        hooks.forEach(callbacks => {
            if (callbacks?.[key]) {
                models[key].tap(callbacks[key]);
            }
        });

        scheduler[key] = models[key].run.bind(models[key])
    }

    return scheduler;
}

export class PluginFactory {
    private plugins = []

    public constructor(plugins) {
        this.plugins = [...plugins]
    }

    public bootstrap() { }


    public static isPlugin() { }
}


