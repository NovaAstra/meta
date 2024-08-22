import { SyncHook, SyncBailHook, SyncWaterfallHook, SyncLoopHook } from "tapable"

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

// syncWaterfallHook.call('august.gao', '28')

const syncLoopHook = new SyncLoopHook(['name', 'age'])

syncLoopHook.tap('EventA', (name, age) => {
    console.log('EventA:', name, age)
})

syncLoopHook.tap('EventB', (name) => {
    console.log('EventB:', name)
    return "Event B Value"
})

syncLoopHook.tap('EventC', (name, age) => {
    console.log('EventC:', name, age)
})

syncLoopHook.call('august.gao', '28')


this.goodsList.reduce((result, current) => {
    const same = result.find(i => i.caseCode === current.caseCode)

    if (same) {
        same.goodsInfo.push(current)
    } else {
        result.push({ ...current, goodsInfo: [current] })
    }

    return result
}, [])