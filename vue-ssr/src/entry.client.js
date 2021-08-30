import { createApp } from './main'

const app = createApp()
const router = app.$router

router.onReady(() => {
  app.$mount('#app')      //服务端渲染默认会生成一个id为app的div
})
