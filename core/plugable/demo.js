const a = [
    {
        name: "plugin1",
        pre: []
    },
    {
        name: "plugin2",
        pre: ["plugin8", "plugin7"]
    },
    {
        name: 'plugin3',
        pre: ['plugin5']
    },
    {
        name: 'plugin4'
    },
    {
        name: 'plugin5'
    },
    {
        name: 'plugin6'
    },
    {
        name: 'plugin7'
    },
    {
        name: 'plugin8'
    }
]

const pluginDagSort = (
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

console.log(pluginDagSort(a))