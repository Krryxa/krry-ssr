import Vue from 'vue'
import Vuex from 'vuex'
import { getBlog } from '@/service/api'

Vue.use(Vuex)

const state = {
  blogListFromVuex: []
}

const getters = {

}

const actions = {
  async getBlogList(store) {
    console.log('开始发起请求')
    const { result } = await getBlog({
      pageNo: 3,
      pageSize: 16
    })
    console.log('请求发送完毕')
    store.commit('setBlogList', result.data)
  }
}

const mutations = {
  setBlogList(state, list) {
    state.blogListFromVuex = list
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
