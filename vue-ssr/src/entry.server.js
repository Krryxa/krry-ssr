import { createApp } from './main'

export default context => {  //生成Vue实例的工厂函数，
  return new Promise((resolve, reject) => {
    const app = createApp()
    const router = app.$router

    const { url } = context    //context包含服务端需要传递给Vue实例的一些数据，比如这里的路由
    const { fullPath } = router.resolve(url).route

    if(fullPath !== url){  //判断当前路由在Vue实例中是否存在
      return reject({
        url: fullPath
      })
    }

    router.push(url)      //设置Vue实例的当前路由

    router.onReady(() => {
      const matchedComponents = router.getMatchedComponents()  //判断当前路由是否有对应组件
      if(!matchedComponents.length){
        return reject({
          code: 404
        })
      }
      resolve(app)    //返回Vue实例
    }, reject)
  })
}
