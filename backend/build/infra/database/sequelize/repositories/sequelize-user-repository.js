"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _User = require('@infra/database/sequelize/models/User'); var _User2 = _interopRequireDefault(_User);

 class SequelizeUserRepository  {
  constructor( model = _User2.default) {;this.model = model;}

  async findByEmail(email) {
    const user = await this.model.findOne({
      where: { email },
      include: { all: true },
    });

    if (!user) {
      return null;
    }

    return user.dataValues;
  }
} exports.SequelizeUserRepository = SequelizeUserRepository;
