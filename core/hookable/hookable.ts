import { SyncHook, SyncBailHook, SyncWaterfallHook } from "."

const syncHook = new SyncHook()

syncHook.tap((name, age) => {
    console.log('EventA:', name, age)
})

syncHook.tap((name) => {
    console.log('EventB:', name)
})

syncHook.tap((name, age) => {
    console.log('EventC', name, age)
})

// syncHook.call('august.gao', '28')

const syncBailHook = new SyncBailHook()


syncBailHook.tap((name, age) => {
    console.log('EventA:', name, age)
})

syncBailHook.tap((name) => {
    console.log('EventB:', name)
    return "break"
})

syncBailHook.tap((name, age) => {
    console.log('EventC:', name, age)
})

// syncBailHook.call('august.gao', '28')

const syncWaterfallHook = new SyncWaterfallHook()

syncWaterfallHook.tap((name, age) => {
    console.log('EventA:', name, age)
})

syncWaterfallHook.tap((name) => {
    console.log('EventB:', name)
    return "Event B Value"
})

syncWaterfallHook.tap((name, age) => {
    console.log('EventC:', name, age)
})

syncWaterfallHook.call('august.gao', '28')