"use strict";Object.defineProperty(exports, "__esModule", {value: true});










 class GetUserOrders {
  constructor( orderRepository) {;this.orderRepository = orderRepository;}

  async execute(request) {
    const { userId } = request;

    const orders = await this.orderRepository.findByUserId(userId);

    return { orders };
  }
} exports.GetUserOrders = GetUserOrders;
