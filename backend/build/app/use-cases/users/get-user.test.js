"use strict";var _errorcatalog = require('@helpers/error-catalog');
var _userfactory = require('@tests/factories/user-factory');
var _inmemoryuserrepository = require('@tests/repositories/in-memory-user-repository');
var _getuser = require('./get-user');

describe('Get user', () => {
  it('should be able to get user by email', async () => {
    const userRepository = new (0, _inmemoryuserrepository.InMemoryUserRepository)();
    const getUser = new (0, _getuser.GetUser)(userRepository);
    const newUser = _userfactory.makeUser.call(void 0, );

    await userRepository.create(newUser);

    const { user } = await getUser.execute({
      email: newUser.email,
    });

    expect(user).toEqual(expect.objectContaining(newUser));
  });

  it('should throw an error when user not found', async () => {
    const userRepository = new (0, _inmemoryuserrepository.InMemoryUserRepository)();
    const getUser = new (0, _getuser.GetUser)(userRepository);
    const newUser = _userfactory.makeUser.call(void 0, );

    await userRepository.create(newUser);

    expect(() => {
      return getUser.execute({
        email: 'non-existent@email.com',
      });
    }).rejects.toThrow(_errorcatalog.ErrorTypes.UserNotFound);
  });
});
