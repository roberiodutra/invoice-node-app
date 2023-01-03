import axios, { AxiosRequestHeaders } from 'axios';
import { OrderBodyType } from '../types/OrderBodyType';

enum methods {
  get,
  post,
  put,
  delete,
}

async function request(
  path: string,
  method: keyof typeof methods,
  data: {
    body?: OrderBodyType;
    headers?: AxiosRequestHeaders;
  },
) {
  const { body, headers } = data;
  const instance = axios.create({
    baseURL: 'http://localhost:5550',
    headers,
  });

  const res = await instance[method](path, body);
  return res;
}

export default request;
