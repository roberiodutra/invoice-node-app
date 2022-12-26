import { Order } from '@app/entities/order';
import { OrderRepository } from '@app/repositories/order-repository';
import { ErrorTypes } from '@helpers/error-catalog';

export class InMemoryOrderRepository implements OrderRepository {
  public order: Order[] = [];

  async findByUserId(userId: number): Promise<Order> {
    const orders = this.order.find((item) => item.userId === userId);

    if (!orders) {
      throw new Error(ErrorTypes.UserNotFound);
    }

    return orders;
  }

  async create(order: Order) {
    this.order.push(order);
  }
}
