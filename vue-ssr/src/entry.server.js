import { createApp } from './main'

export default context => {
  return new Promise((resolve, reject) => {
    const app = createApp()
    const router = app.$router
    const store = app.$store

    const { url } = context // context 是 node 运行时传进来的上下文，包含路由
    router.push(url) // 设置 Vue 实例的当前路由
    router.onReady(() => {
      // router.getMatchedComponents：返回当前路由匹配的组件数组
      const matchedComponents = router.getMatchedComponents()  //判断当前路由是否有对应组件
      if(!matchedComponents.length){ // 判断当前路由是否有对应组件
        return reject({
          code: 404
        })
      }
      Promise.all(matchedComponents.map(Component => {
        if (Component.asyncData) { // 如果组件暴露出 asyncData，就调用
          return Component.asyncData({  
            store,
            route: router.currentRoute
          })
        }
      })).then(() => {
        // 执行到这里，说明 Vuex action 请求的数据已经写入 state
        // 此时只要将 store.state 添加到渲染上下文的 context.state，客户端获取数据的时候要用
        context.state = store.state
        resolve(app) // 返回 Vue 实例
      }).catch(reject)
    }, reject)
  })
}
