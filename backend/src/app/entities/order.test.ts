import { makeOrder } from '@tests/factories/order-factory';
import { Order } from './order';

describe('Order entity', () => {
  it('should sign the properties correctly', () => {
    const sut = new Order(makeOrder());

    expect(sut).toBeInstanceOf(Order);
    expect(sut.orderNumber).toBe(makeOrder().orderNumber);
    expect(sut.value).toBe(makeOrder().value);
    expect(sut.orderStatusBuyer).toBe(makeOrder().orderStatusBuyer);
  });
});
