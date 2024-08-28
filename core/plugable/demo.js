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
    const graph = new Map()
    const inDegree = new Map()

    plugins.forEach(({ name }) => {
        graph.set(name, []);
        inDegree.set(name, 0);
    });

    plugins.forEach(({ name, pre = [], post = [] }) => {
        pre.forEach(dep => {
            graph.get(dep).push(name)
            inDegree.set(name, (inDegree.get(name) || 0) + 1);
        })
        post.forEach(dep => {
            graph.get(name).push(dep)
        })
    })

    console.log(graph)
}

sortPlugins(data)