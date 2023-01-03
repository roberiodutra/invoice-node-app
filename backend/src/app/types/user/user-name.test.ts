import { UserName } from './user-name';

describe('User name - Value Object', () => {
  it('should be able to accept valid names', () => {
    const userName = new UserName('John Doe');
    expect(userName).toBeTruthy();
  });

  it('should throw error for names with less than 3 characters', () => {
    expect(() => new UserName('Jo')).toThrow();
  });
});
