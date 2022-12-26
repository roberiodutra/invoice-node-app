import { Order } from '@app/entities/order';
import { OrderRepository } from '@app/repositories/order-repository';

export class InMemoryOrderRepository implements OrderRepository {
  public order: Order[] = [];

  async findByUserId(userId: number): Promise<Order[]> {
    return this.order.filter((item) => item.userId === userId);
  }

  async create(order: Order) {
    this.order.push(order);
  }
}
