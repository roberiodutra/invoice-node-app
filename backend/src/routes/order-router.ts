import { GetUserOrders } from '@app/use-cases/orders/get-user-orders';
import { SequelizeOrderRepository } from '@infra/database/sequelize/repositories/sequelize-order-repository';
import { OrderController } from '@infra/http/controllers/order.controller';
import { Router } from 'express';

const route = Router();

// Dependency injection
const orderRepository = new SequelizeOrderRepository();
const getUserOrders = new GetUserOrders(orderRepository);
const controller = new OrderController(getUserOrders);

route.post('/', controller.findByUserId);

export default route;
