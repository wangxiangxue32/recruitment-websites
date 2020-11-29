import axios from 'axios'

export function request(config) {
  //1.创建 axios 实例
  const instance = axios.create({
    baseURL: 'http://127.0.0.1:8888',
    timeout: 5000
  });

  //请求次数，请求间隙
  instance.defaults.retry = 4;
  instance.defaults.retryDelay = 1000

  //2.2 请求拦截
  instance.interceptors.request.use(config => {
    console.log(config);
    return config
  },err => {
    console.log(err);
  });

  //2.2 响应拦截
  instance.interceptors.response.use(res => {
    console.log(res);
    // res.data
    return res.data
  },err => {
    console.log(err);
  });

  //3.发送真正的网络请求
  return instance(config)
}
