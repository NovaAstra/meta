import { SyncHook } from "tapable"

const syncHook = new SyncHook(['author', 'age'])

syncHook.tap('监听器1', (name, age) => {
    console.log('监听器1：', name, age)
})

syncHook.tap('监听器2', (name) => {
    console.log('监听器2：', name)
})

syncHook.tap('监听器3', (name, age) => {
    console.log('监听器3：', name, age)
})

syncHook.call('wade', '25')