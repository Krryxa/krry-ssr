import axios from '../axios'

export function getBlog(param) {
  return axios.get('/krryblog/blog/getBlog', {params: param})
}