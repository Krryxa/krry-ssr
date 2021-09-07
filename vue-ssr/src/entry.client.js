import { createApp } from './main'

const app = createApp()
const router = app.$router
const store = app.$store

if (window.__INITIAL_STATE__) {
  store.replaceState(window.__INITIAL_STATE__) // replaceState 是覆盖 state
}

router.onReady(() => {
  app.$mount('#app')      // 服务端渲染默认会生成一个 id 为 app 的 div
})
