"use strict";var _buyeremail = require('./buyer-email');

describe('Buyer email - Value Object', () => {
  it('should be able to accept valid email', () => {
    const buyerEmail = new (0, _buyeremail.BuyerEmail)('johndoe@email.com');
    expect(buyerEmail).toBeTruthy();
  });

  it('should throw error for invalid email', () => {
    ['email', '@email', 'johndoe@com', 'john@email'].forEach((invalidEmail) =>
      expect(() => new (0, _buyeremail.BuyerEmail)(invalidEmail)).toThrow()
    );
  });
});
