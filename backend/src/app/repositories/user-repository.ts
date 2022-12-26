import { User } from '../entities/user';

export abstract class UserRepository {
  abstract findByEmail(email: string): Promise<User | null>;
}
