import { GetUser } from '@app/use-cases/users/get-user';
import { SequelizeUserRepository } from '@infra/database/sequelize/repositories/sequelize-user-repository';
import { UserController } from '@infra/http/controllers/user.controller';
import { Router } from 'express';

const route = Router();

// Dependency injection
const userRepository = new SequelizeUserRepository();
const getUser = new GetUser(userRepository);
const controller = new UserController(getUser);

route.post('/sign_in', controller.findByEmail);

export default route;
