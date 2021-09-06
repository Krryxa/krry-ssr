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
    const { result } = await getBlog({
      pageNo: 3,
      pageSize: 16
    })
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
