import axios from 'axios';

import { TIMEOUT, BASE_URL } from './config'

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: TIMEOUT
})

instance.interceptors.request.use(config => {
  // 1.发送网络请求时，在界面的中间位置显示loading组件

  // 2.某一些请求必须携带用户的token，入股没有携带，那么直接跳转到登录页面

  // 3.params和data序列化

  console.log("请求被拦截");
  return config;
}, err => {

})

instance.interceptors.response.use(res => {
  return res.data;
}, err => {
  if (err && err.response) {
    switch (err.response.status) {
      case 400:
        console.log("请求错误");
        break;
      case 401:
        console.log("未授权访问");
        break
      default:
        console.log("其他错误");
    }
  }
  return err;
})

export default instance;