import axios from '../axios'

const domain = 'https://ainyi.com'

export function getBlog(param, isServer) {
  return axios.get(`${isServer ? domain : ''}/blog/list`, { params: param })
}
