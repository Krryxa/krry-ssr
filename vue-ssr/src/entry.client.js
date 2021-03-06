import { createApp } from './main'

const app = createApp()
const router = app.$router
const store = app.$store

if (window.__INITIAL_STATE__) {
  // replaceState 是覆盖 state，要在挂载到应用程序之前替换
  store.replaceState(window.__INITIAL_STATE__)
}

router.onReady(() => {
  app.$mount('#app') // 服务端渲染默认会生成一个 id 为 app 的 div
})
