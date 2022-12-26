import { makeOrder } from '@tests/factories/order-factory';
import { InMemoryOrderRepository } from '@tests/repositories/in-memory-order-repository';
import { GetUserOrders } from './get-user-orders';

describe('Get user orders', () => {
  it('should be able to get user orders', async () => {
    const orderRepository = new InMemoryOrderRepository();
    const getUserOrders = new GetUserOrders(orderRepository);
    const newOrder = makeOrder();

    await orderRepository.create(newOrder);

    const { orders } = await getUserOrders.execute({
      userId: newOrder.userId,
    });

    expect(orders).toEqual(
      expect.arrayContaining([expect.objectContaining(newOrder)])
    );
  });
});
