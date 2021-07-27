import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { Methods } from '/@/enums/http';

const service = axios.create({
  baseURL: import.meta.env.BASE_URL,
  timeout: 10000,
  withCredentials: true
});

service.defaults.headers['Content-Type'] = 'application/json;charset=utf-8';

service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // 是否需要设置 token
    // const isToken = (config.headers || {}).isToken === false;
    // if (getToken() && !isToken) {
    //   config.headers['Authorization'] = 'Bearer ' + getToken(); // 让每个请求携带自定义token 请根据实际情况自行修改
    // }
    // get请求映射params参数
    if (config.method === Methods.get && config.params) {
      let url = config.url + '?';
      for (const propName of Object.keys(config.params)) {
        const value = config.params[propName];
        const part = encodeURIComponent(propName) + '=';
        if (value !== null && typeof value !== 'undefined') {
          if (typeof value === 'object') {
            for (const key of Object.keys(value)) {
              const params = propName + '[' + key + ']';
              const subPart = encodeURIComponent(params) + '=';
              url += subPart + encodeURIComponent(value[key]) + '&';
            }
          } else {
            url += part + encodeURIComponent(value) + '&';
          }
        }
      }
      url = url.slice(0, -1);
      config.params = {};
      config.url = url;
    }
    return config;
  },
  (error: string) => {
    Promise.reject(error);
  }
);

service.interceptors.response.use(
  (response: AxiosResponse) => {
    if (response.data.code != 200) {
      Promise.reject(response.data.message);
    }
    return response.data;
  },
  (error: string) => {
    Promise.reject(error);
  }
);

export default service;
