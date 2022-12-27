"use strict";var _orderfactory = require('@tests/factories/order-factory');
var _inmemoryorderrepository = require('@tests/repositories/in-memory-order-repository');
var _getuserorders = require('./get-user-orders');

describe('Get user orders', () => {
  it('should be able to get user orders', async () => {
    const orderRepository = new (0, _inmemoryorderrepository.InMemoryOrderRepository)();
    const getUserOrders = new (0, _getuserorders.GetUserOrders)(orderRepository);
    const newOrder = _orderfactory.makeOrder.call(void 0, );

    await orderRepository.create(newOrder);

    const { orders } = await getUserOrders.execute({
      userId: newOrder.userId,
    });

    expect(orders).toEqual(
      expect.arrayContaining([expect.objectContaining(newOrder)])
    );
  });
});
