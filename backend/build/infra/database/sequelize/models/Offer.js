"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize');
var _ = require('.'); var _2 = _interopRequireDefault(_);
var _Order = require('./Order'); var _Order2 = _interopRequireDefault(_Order);

 class Offer extends _sequelize.Model {
  
  
  
  
  
  
  
  
  
  
  
  
  
} exports.default = Offer;

Offer.init(
  {
    id: {
      type: _sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    tax: {
      type: _sequelize.STRING,
      allowNull: false,
    },
    tariff: {
      type: _sequelize.STRING,
      allowNull: false,
    },
    adValorem: {
      type: _sequelize.STRING,
      allowNull: false,
    },
    float: {
      type: _sequelize.STRING,
      allowNull: false,
    },
    iof: {
      type: _sequelize.STRING,
      allowNull: false,
    },
    expiresIn: {
      type: _sequelize.STRING,
      allowNull: false,
    },
    paymentStatusSponsor: {
      type: _sequelize.TINYINT,
      defaultValue: 0,
    },
    paymentStatusProvider: {
      type: _sequelize.TINYINT,
      defaultValue: 0,
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
    sponsorId: {
      type: _sequelize.INTEGER,
      allowNull: true,
      defaultValue: null,
    },
  },
  {
    sequelize: _2.default,
    modelName: 'offers',
    timestamps: false,
  }
);

Offer.hasOne(_Order2.default, { foreignKey: 'orderId' });
