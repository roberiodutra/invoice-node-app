import { Order } from '@app/entities/order';
import { OrderRepository } from '@app/repositories/order-repository';
import OrderModel from '../models/Order';

export class SequelizeOrderRepository implements OrderRepository {
  constructor(private model = OrderModel) {}

  async findByUserId(userId: number): Promise<Order[]> {
    const orders = await this.model.findAll({
      where: { userId },
      include: { all: true },
    });

    return orders as [];
  }
}
