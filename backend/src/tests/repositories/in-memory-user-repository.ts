import { User } from '@app/entities/user';
import { UserRepository } from '@app/repositories/user-repository';

export class InMemoryUserRepository implements UserRepository {
  public user: User[] = [];

  async findByEmail(email: string): Promise<User> {
    const user = this.user.find((item) => item.email === email);

    if (!user) {
      throw new Error('User Not Found');
    }

    return user;
  }
}
