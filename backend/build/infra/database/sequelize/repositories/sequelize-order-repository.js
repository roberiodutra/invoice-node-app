"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _Order = require('../models/Order'); var _Order2 = _interopRequireDefault(_Order);

 class SequelizeOrderRepository  {
  constructor( model = _Order2.default) {;this.model = model;}

  async findByUserId(userId) {
    const orders = await this.model.findAll({
      where: { userId },
      include: { all: true },
    });

    return orders ;
  }
} exports.SequelizeOrderRepository = SequelizeOrderRepository;
