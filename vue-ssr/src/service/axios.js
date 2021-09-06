'use strict'

import axios from 'axios'

const $axios = axios.create({
  baseURL: process.env.NODE_ENV === 'development' ? '' : 'https://ainyi.com',
  timeout: 20000
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