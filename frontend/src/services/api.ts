import { OrderBodyType } from '../types/OrderBodyType';
import request from './api-core';

class Api {
  public async getOrders(data: OrderBodyType) {
    const orders = await request('/orders', 'post', {
      body: data,
    });

    return orders.data;
  }
}

export default new Api();
