import { UserEmail } from './user-email';

describe('User email - Value Object', () => {
  it('should be able to accept valid email', () => {
    const userEmail = new UserEmail('johndoe@email.com');
    expect(userEmail).toBeTruthy();
  });

  it('should throw error for invalid email', () => {
    ['email', '@email', 'johndoe@com', 'john@email'].forEach((invalidEmail) =>
      expect(() => new UserEmail(invalidEmail)).toThrow()
    );
  });
});
