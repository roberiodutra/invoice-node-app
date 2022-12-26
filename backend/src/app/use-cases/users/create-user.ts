import { User, UserProps } from '@app/entities/user';
import { UserRepository } from '@app/repositories/user-repository';

interface Response {
  user: User;
}

export class CreateUser {
  constructor(private repository: UserRepository) {}

  async execute(request: UserProps): Promise<Response> {
    const user = new User(request);

    await this.repository.create(user);

    return { user };
  }
}
