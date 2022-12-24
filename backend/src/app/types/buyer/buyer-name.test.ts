import { BuyerName } from './buyer-name';

describe('Buyer name - Value Object', () => {
  it('should be able to accept valid names', () => {
    const buyerName = new BuyerName('John Doe');
    expect(buyerName).toBeTruthy();
  });

  it('should throw error for names with less than 5 characters', () => {
    expect(() => new BuyerName('John')).toThrow();
  });
});
