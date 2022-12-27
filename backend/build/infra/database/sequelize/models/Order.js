"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize');
var _ = require('.'); var _2 = _interopRequireDefault(_);
var _Buyer = require('./Buyer'); var _Buyer2 = _interopRequireDefault(_Buyer);
var _Cnpj = require('./Cnpj'); var _Cnpj2 = _interopRequireDefault(_Cnpj);
var _Provider = require('./Provider'); var _Provider2 = _interopRequireDefault(_Provider);
var _User = require('./User'); var _User2 = _interopRequireDefault(_User);

 class Order extends _sequelize.Model {
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
} exports.default = Order;

Order.init(
  {
    id: {
      type: _sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    orderNfId: {
      type: _sequelize.STRING,
      allowNull: false,
    },
    orderNumber: {
      type: _sequelize.STRING,
      allowNull: false,
    },
    orderPath: {
      type: _sequelize.STRING,
      allowNull: true,
      defaultValue: null,
    },
    orderFileName: {
      type: _sequelize.STRING,
      allowNull: true,
      defaultValue: null,
    },
    orderOriginalName: {
      type: _sequelize.STRING,
      allowNull: true,
      defaultValue: null,
    },
    emissionDate: {
      type: _sequelize.STRING,
      allowNull: true,
      defaultValue: null,
    },
    pdfFile: {
      type: _sequelize.STRING,
      allowNull: true,
      defaultValue: null,
    },
    emitedTo: {
      type: _sequelize.STRING,
      allowNull: true,
      defaultValue: null,
    },
    nNf: {
      type: _sequelize.STRING,
      allowNull: true,
      defaultValue: null,
    },
    CTE: {
      type: _sequelize.STRING,
      allowNull: true,
      defaultValue: null,
    },
    value: {
      type: _sequelize.STRING,
      allowNull: true,
      defaultValue: null,
    },
    createdAt: {
      type: _sequelize.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: _sequelize.DATE,
      allowNull: false,
    },
    cnpjId: {
      type: _sequelize.INTEGER,
      allowNull: true,
      defaultValue: null,
    },
    userId: {
      type: _sequelize.INTEGER,
      allowNull: true,
      defaultValue: null,
    },
    buyerId: {
      type: _sequelize.INTEGER,
      allowNull: true,
      defaultValue: null,
    },
    providerId: {
      type: _sequelize.INTEGER,
      allowNull: true,
      defaultValue: null,
    },
    orderStatusBuyer: {
      type: _sequelize.STRING,
      allowNull: false,
      defaultValue: '0',
    },
    orderStatusProvider: {
      type: _sequelize.STRING,
      allowNull: false,
      defaultValue: '0',
    },
    deliveryReceipt: {
      type: _sequelize.STRING,
      allowNull: true,
      defaultValue: null,
    },
    cargoPackingList: {
      type: _sequelize.STRING,
      allowNull: true,
      defaultValue: null,
    },
    deliveryCtrc: {
      type: _sequelize.STRING,
      allowNull: true,
      defaultValue: null,
    },
  },
  {
    sequelize: _2.default,
    modelName: 'orders',
    timestamps: false,
  }
);

Order.belongsTo(_User2.default, { foreignKey: 'userId' });
_User2.default.hasMany(Order);

Order.belongsTo(_Cnpj2.default, { foreignKey: 'cnpjId' });
Order.belongsTo(_Buyer2.default, { foreignKey: 'buyerId' });
Order.belongsTo(_Provider2.default, { foreignKey: 'providerId' });
