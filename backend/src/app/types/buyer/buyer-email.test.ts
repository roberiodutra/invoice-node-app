import { BuyerEmail } from './buyer-email';

describe('Buyer email - Value Object', () => {
  it('should be able to accept valid email', () => {
    const buyerEmail = new BuyerEmail('johndoe@email.com');
    expect(buyerEmail).toBeTruthy();
  });

  it('should throw error for invalid email', () => {
    ['email', '@email', 'johndoe@com', 'john@email'].forEach((invalidEmail) =>
      expect(() => new BuyerEmail(invalidEmail)).toThrow()
    );
  });
});
