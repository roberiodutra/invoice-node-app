"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize');
var _ = require('.'); var _2 = _interopRequireDefault(_);
var _Order = require('./Order'); var _Order2 = _interopRequireDefault(_Order);

 class OrderPortion extends _sequelize.Model {
  
  
  
  
  
  
  
  
} exports.default = OrderPortion;

OrderPortion.init(
  {
    id: {
      type: _sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nDup: {
      type: _sequelize.STRING,
      allowNull: false,
    },
    dVenc: {
      type: _sequelize.STRING,
      allowNull: false,
    },
    vDup: {
      type: _sequelize.STRING,
      allowNull: false,
    },
    availableToMarket: {
      type: _sequelize.TINYINT,
      allowNull: true,
      defaultValue: 1,
    },
    createdAt: {
      type: _sequelize.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: _sequelize.DATE,
      allowNull: false,
    },
    orderId: {
      type: _sequelize.INTEGER,
      allowNull: true,
      defaultValue: null,
    },
  },
  {
    sequelize: _2.default,
    modelName: 'orderportions',
    timestamps: false,
  }
);

OrderPortion.hasOne(_Order2.default, { foreignKey: 'orderId' });
