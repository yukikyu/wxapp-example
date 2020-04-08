import Vue from 'vue'
import axios from "axios";
import qs from 'qs'

const baseURL = "http://192.168.11.247:8888/erp-i";

// axios 初始化
export const axiosInit = () => {

  // 超时
  axios.defaults.timeout = 15000

  // 基础请求地址
  axios.defaults.baseURL = baseURL

  // 请求头
  axios.defaults.headers.post['Content-Type'] = 'application/X-www-form-urlencoded;charset=UTF-8'

  // 适配器
  axios.defaults.adapter = function (config) {
    console.log(config, "config");
    return new Promise((resolve, reject) => {
      console.log(config.data,"config.data")
      console.log(config.params,"config.params")
      let data = config.method === 'get' ? config.params : JSON.parse(config.data)
      console.log(data,"data")
      // wx小程序 发起请求相应 log 就可以看到熟悉的返回啦
      wx.request({
        url: config.url,
        method: config.method,
        data: data,
        header:config.headers,
        success: (res) => {
          // console.log(res,"success");
          return resolve(res)
        },
        fail: (err) => {
          // console.log(err,"fail");
          return reject(err)
        }
      })
    })
  }

  // 请求拦截器
  axios.interceptors.request.use(function (request) {
    return request
  }, function (error) {
    return Promise.reject(error)
  })

  // 响应拦截器
  axios.interceptors.response.use(function (response) {
    console.log(response.data.data)
    return response
  }, function (error) {
    return Promise.reject(error)
  })

  // 添加Vue属性
  Vue.prototype.$axios = axios

}
