import { Order } from '@app/entities/order';
import { OrderRepository } from '@app/repositories/order-repository';

interface Request {
  userId?: number;
}

interface Response {
  orders: Order[];
}

export class GetUserOrders {
  constructor(private orderRepository: OrderRepository) {}

  async execute(request: Request): Promise<Response> {
    const { userId } = request;

    const orders = await this.orderRepository.findByUserId(userId);

    return { orders };
  }
}
