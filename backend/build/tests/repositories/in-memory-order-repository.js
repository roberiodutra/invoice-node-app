"use strict";Object.defineProperty(exports, "__esModule", {value: true});


 class InMemoryOrderRepository  {constructor() { InMemoryOrderRepository.prototype.__init.call(this); }
   __init() {this.order = []}

  async findByUserId(userId) {
    return this.order.filter((item) => item.userId === userId);
  }

  async create(order) {
    this.order.push(order);
  }
} exports.InMemoryOrderRepository = InMemoryOrderRepository;
