"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _getuserorders = require('@app/use-cases/orders/get-user-orders');
var _sequelizeorderrepository = require('@infra/database/sequelize/repositories/sequelize-order-repository');
var _ordercontroller = require('@infra/http/controllers/order.controller');
var _express = require('express');

const route = _express.Router.call(void 0, );

// Dependency injection
const orderRepository = new (0, _sequelizeorderrepository.SequelizeOrderRepository)();
const getUserOrders = new (0, _getuserorders.GetUserOrders)(orderRepository);
const controller = new (0, _ordercontroller.OrderController)(getUserOrders);

route.post('/', controller.findByUserId);

exports. default = route;
