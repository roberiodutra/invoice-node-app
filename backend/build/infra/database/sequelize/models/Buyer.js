"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize');
var _ = require('.'); var _2 = _interopRequireDefault(_);

 class Buyer extends _sequelize.Model {
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
} exports.default = Buyer;

Buyer.init(
  {
    id: {
      type: _sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: _sequelize.STRING,
      allowNull: false,
    },
    tradingName: {
      type: _sequelize.STRING,
      allowNull: true,
      defaultValue: null,
    },
    cashforceTax: {
      type: _sequelize.STRING,
      allowNull: true,
      defaultValue: null,
    },
    responsibleName: {
      type: _sequelize.STRING,
      allowNull: true,
      defaultValue: null,
    },
    responsibleEmail: {
      type: _sequelize.STRING,
      allowNull: true,
      defaultValue: null,
    },
    responsiblePosition: {
      type: _sequelize.STRING,
      allowNull: true,
      defaultValue: null,
    },
    responsiblePhone: {
      type: _sequelize.STRING,
      allowNull: true,
      defaultValue: null,
    },
    responsibleMobile: {
      type: _sequelize.STRING,
      allowNull: true,
      defaultValue: null,
    },
    website: {
      type: _sequelize.STRING,
      allowNull: true,
      defaultValue: null,
    },
    postalCode: {
      type: _sequelize.STRING,
      allowNull: true,
      defaultValue: null,
    },
    address: {
      type: _sequelize.STRING,
      allowNull: true,
      defaultValue: null,
    },
    number: {
      type: _sequelize.STRING,
      allowNull: true,
      defaultValue: null,
    },
    complement: {
      type: _sequelize.STRING,
      allowNull: true,
      defaultValue: null,
    },
    neighborhood: {
      type: _sequelize.STRING,
      allowNull: true,
      defaultValue: null,
    },
    city: {
      type: _sequelize.STRING,
      allowNull: true,
      defaultValue: null,
    },
    state: {
      type: _sequelize.STRING,
      allowNull: true,
      defaultValue: null,
    },
    phoneNumber: {
      type: _sequelize.STRING,
      allowNull: true,
      defaultValue: null,
    },
    situation: {
      type: _sequelize.STRING,
      allowNull: true,
      defaultValue: null,
    },
    situationDate: {
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
    confirm: {
      type: _sequelize.TINYINT,
      allowNull: true,
      defaultValue: 1,
    },
    email: {
      type: _sequelize.STRING,
      allowNull: true,
      defaultValue: null,
    },
  },
  {
    sequelize: _2.default,
    modelName: 'buyers',
    timestamps: false,
  }
);

// Buyer.hasMany(Cnpj, { foreignKey: 'cnpjId' });
