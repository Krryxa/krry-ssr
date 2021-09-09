'use strict'

import axios from 'axios'
import adapter from 'axios/lib/adapters/http'

const $axios = axios.create({
  timeout: 20000,
  adapter
})

$axios.interceptors.request.use(
  config => {
    return config
  },
  error => {
    console.log(error)
    return Promise.reject(error)
  }
)

$axios.interceptors.response.use(
  res => {
    const apiRes = res.data
    return apiRes
  },
  async error => {
    return Promise.reject(error)
  }
)

export default $axios