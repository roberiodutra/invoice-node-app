import { makeUser } from '@tests/factories/user-factory';
import { InMemoryUserRepository } from '@tests/repositories/in-memory-user-repository';
import { GetUser } from './get-user';

describe('Get user', () => {
  it('should be able to get user by email', async () => {
    const userRepository = new InMemoryUserRepository();
    const getUser = new GetUser(userRepository);
    const newUser = makeUser();

    await userRepository.create(newUser);

    const { user } = await getUser.execute({
      email: newUser.email,
    });

    expect(user).toEqual(expect.objectContaining(newUser));
  });
});
