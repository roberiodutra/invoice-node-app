import { User } from '@app/entities/user';
import { UserRepository } from '@app/repositories/user-repository';
import UserModel from '@infra/database/sequelize/models/User';

export class SequelizeUserRepository implements UserRepository {
  constructor(private model = UserModel) {}

  async findByEmail(email: string): Promise<User | null> {
    const user = await this.model.findOne({
      where: { email },
      include: { all: true },
    });

    if (!user) {
      return null;
    }

    return user.dataValues;
  }
}
