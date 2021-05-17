import axios from 'axios'
// 创建axios实例
const request = axios.create({})
// request拦截器
request.interceptors.request.use(config => {
  return config
}, error => {
  return Promise.reject(error)
})

// 响应拦截器
request.interceptors.response.use(res => {
    return res.data
  },
  error => {
    return Promise.reject(error)
  }
)

export default request
