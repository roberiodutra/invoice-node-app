import { Order } from '@app/entities/order';
import { OrderRepository } from '@app/repositories/order-repository';
import Cnpj from '../models/Cnpj';
import OrderModel from '../models/Order';
import Provider from '../models/Provider';

export class SequelizeOrderRepository implements OrderRepository {
  constructor(private model = OrderModel) {}

  async findByUserId(userId: number): Promise<Order[]> {
    const orders = await this.model.findAll({
      where: { userId },
      include: [{ all: true }, { model: Provider, include: [{ model: Cnpj }] }],
    });

    return orders as [];
  }
}
