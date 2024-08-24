import { SyncHook, SyncBailHook, SyncWaterfallHook, SyncLoopHook, AsyncParallelBailHook } from "tapable"

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

// syncLoopHook.call('august.gao', '28')

const asyncParallelBailHook = new AsyncParallelBailHook(['name', 'age'])

asyncParallelBailHook.tapAsync('EventA', (name, age, callback) => {
    console.log('EventA:', name, age)
    setTimeout(() => {
        callback()
    }, 1000)
})

asyncParallelBailHook.tapAsync('EventB', (name, age, callback) => {
    console.log('EventB:', name, age)
    callback(null, '测试2有返回值啦')
})

asyncParallelBailHook.tapAsync('EventC', (name, age, callback) => {
    console.log('EventC:', name, age)
    setTimeout(() => {
        callback(null, '测试3有返回值啦')
    }, 3000)
})

asyncParallelBailHook.callAsync('august.gao', '28', (err, result) => {
    // 等全部都完成了才会走到这里来
    console.log('这是成功后的回调', err, result)
    console.timeEnd('time')
})