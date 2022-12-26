import { User } from '@app/entities/user';
import { UserRepository } from '@app/repositories/user-repository';
import { ErrorTypes } from '@helpers/error-catalog';

export class InMemoryUserRepository implements UserRepository {
  public user: User[] = [];

  async findByEmail(email: string): Promise<User> {
    const user = this.user.find((item) => item.email === email);

    if (!user) {
      throw new Error(ErrorTypes.UserNotFound);
    }

    return user;
  }
}
