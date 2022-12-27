"use strict";var _buyername = require('./buyer-name');

describe('Buyer name - Value Object', () => {
  it('should be able to accept valid names', () => {
    const buyerName = new (0, _buyername.BuyerName)('John Doe');
    expect(buyerName).toBeTruthy();
  });

  it('should throw error for names with less than 5 characters', () => {
    expect(() => new (0, _buyername.BuyerName)('John')).toThrow();
  });
});
