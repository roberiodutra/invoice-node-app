"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _httpstatuscodes = require('http-status-codes');


 class OrderController {
  constructor( getUserOrders) {;this.getUserOrders = getUserOrders;OrderController.prototype.__init.call(this);}

   __init() {this.findByUserId = async (req, res) => {
    const { userId } = req.body;
    const { orders } = await this.getUserOrders.execute({ userId });
    return res.status(_httpstatuscodes.StatusCodes.OK).json(orders);
  }}
} exports.OrderController = OrderController;
