import { SyncHook, SyncBailHook, SyncWaterfallHook } from "tapable"

const syncHook = new SyncHook(['name', 'age'])

syncHook.tap('EventA', (name, age) => {
    console.log('EventA:', name, age)
})

syncHook.tap('EventB', (name) => {
    console.log('EventB:', name)
})

syncHook.tap('EventC', (name, age) => {
    console.log('EventC:', name, age)
})

// syncHook.call('august.gao', '28')

const syncBailHook = new SyncBailHook(['name', 'age'])

syncBailHook.tap('EventA', async (name, age) => {
    console.log('EventA:', name, age)
})

syncBailHook.tap('EventB', (name) => {
    console.log('EventB:', name)
    return "break"
})

syncBailHook.tap('EventC', (name, age) => {
    console.log('EventC:', name, age)
})

// syncBailHook.call('august.gao', '28')

const syncWaterfallHook = new SyncWaterfallHook(['name', 'age'])

syncWaterfallHook.tap('EventA', (name, age) => {
    console.log('EventA:', name, age)
})

syncWaterfallHook.tap('EventB', (name) => {
    console.log('EventB:', name)
    return "Event B Value"
})

syncWaterfallHook.tap('EventC', (name, age) => {
    console.log('EventC:', name, age)
})

syncWaterfallHook.call('august.gao', '28')