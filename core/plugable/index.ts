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