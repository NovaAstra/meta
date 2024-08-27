const data = [
    {
        name: 'plugin1',
    },
    {
        name: 'plugin2',
        post: ['plugin1']
    },
    {
        name: 'plugin3',
        pre: ['plugin4']
    },
    {
        name: 'plugin4'
    }
]
function sortPlugins(plugins) {
    const nameToPlugin = {};
    const sortedPlugins = [];

    // 将插件按名称映射，便于查找
    plugins.forEach(plugin => {
        nameToPlugin[plugin.name] = plugin;
    });

    // 辅助函数：插入插件
    function insertPlugin(plugin) {
        const pre = plugin.pre || [];
        const post = plugin.post || [];

        // 检查是否已经插入
        if (sortedPlugins.includes(plugin)) {
            return;
        }

        // 插入依赖的前置插件
        pre.forEach(preName => {
            if (nameToPlugin[preName]) {
                insertPlugin(nameToPlugin[preName]);
            }
        });

        // 插入当前插件
        sortedPlugins.push(plugin);

        // 插入依赖的后置插件
        post.forEach(postName => {
            if (nameToPlugin[postName]) {
                insertPlugin(nameToPlugin[postName]);
            }
        });
    }

    // 插入所有插件
    plugins.forEach(plugin => {
        insertPlugin(plugin);
    });

    return sortedPlugins;
}


export const pluginDagSort = (
    plugins,
    key = 'name',
    preKey = 'pre',
    postKey = 'post',
) => {
    let allLines = [];
    function getPluginByAny(q) {
        const target = plugins.find(item =>
            typeof q === 'string' ? item[key] === q : item[key] === q[key],
        );
        // current plugin design can't guarantee the plugins in pre/post existed
        if (!target) {
            throw new Error(`plugin ${q} not existed`);
        }
        return target;
    }
    plugins.forEach(item => {
        item[preKey]?.forEach((p) => {
            // compatibility: do not add the plugin-name that plugins not have
            if (plugins.find(ap => ap.name === p)) {
                allLines.push([getPluginByAny(p)[key], getPluginByAny(item)[key]]);
            }
        });
        item[postKey]?.forEach((pt) => {
            // compatibility: do not add the plugin-name that plugins not have
            if (plugins.find(ap => ap.name === pt)) {
                allLines.push([getPluginByAny(item)[key], getPluginByAny(pt)[key]]);
            }
        });
    });

    // search the zero input plugin
    let zeroEndPoints = plugins.filter(
        item => !allLines.find(l => l[1] === item[key]),
    );

    const sortedPoint = [];
    while (zeroEndPoints.length) {
        const zep = zeroEndPoints.shift();
        sortedPoint.push(getPluginByAny(zep));
        allLines = allLines.filter(l => l[0] !== getPluginByAny(zep)[key]);

        const restPoints = plugins.filter(
            item => !sortedPoint.find(sp => sp[key] === item[key]),
        );
        zeroEndPoints = restPoints.filter(
            item => !allLines.find(l => l[1] === item[key]),
        );
    }
    // if has ring, throw error
    if (allLines.length) {
        const restInRingPoints = {};
        allLines.forEach(l => {
            restInRingPoints[l[0]] = true;
            restInRingPoints[l[1]] = true;
        });

        throw new Error(
            `plugins dependencies has loop: ${Object.keys(restInRingPoints).join(
                ',',
            )}`,
        );
    }
    return sortedPoint;
};


console.log(sortPlugins(JSON.parse(JSON.stringify(data))), pluginDagSort(JSON.parse(JSON.stringify(data))));
