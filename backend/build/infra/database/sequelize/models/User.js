"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize');
var _ = require('.'); var _2 = _interopRequireDefault(_);

 class User extends _sequelize.Model {
  
  
  
  
  
  
  
  
  
  
  
} exports.default = User;

User.init(
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
    email: {
      type: _sequelize.STRING,
      allowNull: false,
    },
    phoneNumber: {
      type: _sequelize.STRING,
      allowNull: true,
      defaultValue: null,
    },
    mobile: {
      type: _sequelize.STRING,
      allowNull: true,
      defaultValue: null,
    },
    departament: {
      type: _sequelize.STRING,
      allowNull: true,
      defaultValue: null,
    },
    verificationCode: {
      type: _sequelize.STRING,
      allowNull: true,
      defaultValue: null,
    },
    emailChecked: {
      type: _sequelize.TINYINT,
      allowNull: false,
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
    cashforceAdm: {
      type: _sequelize.TINYINT,
      allowNull: false,
      defaultValue: 0,
    },
  },
  {
    sequelize: _2.default,
    modelName: 'users',
    timestamps: false,
  }
);
