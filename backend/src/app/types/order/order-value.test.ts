import { OrderValue } from './order-value';

describe('Order - Value Object', () => {
  it('should be able to accept valid values', () => {
    const orderValue = new OrderValue('1');
    expect(orderValue).toBeTruthy();
  });

  it('should throw error for value less than or equal zero', () => {
    expect(() => new OrderValue('0')).toThrow();
  });
});
