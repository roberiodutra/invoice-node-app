import { User } from '@app/entities/user';
import { UserRepository } from '@app/repositories/user-repository';
import { ErrorTypes } from '@helpers/error-catalog';

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

    if (!user) {
      throw new Error(ErrorTypes.UserNotFound);
    }

    return { user };
  }
}
