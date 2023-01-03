import { OrderNumber } from './order-number';

describe('Order number - Value Object', () => {
  it('should be able to accept valid values', () => {
    const orderNumber = new OrderNumber('1');
    expect(orderNumber).toBeTruthy();
  });

  it('should throw error for number less than or equal 1', () => {
    expect(() => new OrderNumber('0')).toThrow();
  });
});
