import { User } from '@app/entities/user';
import { UserRepository } from '@app/repositories/user-repository';

interface Request {
  email: string;
}

interface Response {
  user: User;
}

export class GetUser {
  constructor(private userRepository: UserRepository) {}

  async execute(request: Request): Promise<Response> {
    const { email } = request;

    const user = await this.userRepository.findByEmail(email);

    return { user };
  }
}
