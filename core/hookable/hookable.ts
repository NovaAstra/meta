import { SyncHook } from "."

const syncHook = new SyncHook()

syncHook.tap((name, age) => {
    console.log('监听器1：', name, age)
})

syncHook.tap((name) => {
    console.log('监听器2：', name)
})

syncHook.tap((name, age) => {
    console.log('监听器3：', name, age)
})

syncHook.call('wade', '25')