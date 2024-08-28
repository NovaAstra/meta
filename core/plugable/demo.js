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
    const graph = {}
    const inDegree = {}

    plugins.forEach(plugin => {
        graph[plugin.name] = []
        inDegree[plugin.name] = 0
    });

    plugins.forEach(({ name, pre = [], post = [] }) => {
        pre.forEach(dep => {
            graph.get(dep).push(name)
        })
        post.forEach(dep => {
            graph.get(name).push(dep)
        })
    })
}