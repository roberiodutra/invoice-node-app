import { makeUser } from '@tests/factories/user-factory';
import { User } from './user';

describe('User entity', () => {
  it('should sign the properties correctly', () => {
    const sut = new User(makeUser());

    expect(sut).toBeInstanceOf(User);
    expect(sut.name).toBe(makeUser().name);
    expect(sut.email).toBe(makeUser().email);
    expect(sut.cashforceAdm).toBe(makeUser().cashforceAdm);
  });
});
