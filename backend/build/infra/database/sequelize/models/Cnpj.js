"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize');
var _ = require('.'); var _2 = _interopRequireDefault(_);

 class Cnpj extends _sequelize.Model {
  
  
  
  
  
} exports.default = Cnpj;

Cnpj.init(
  {
    id: {
      type: _sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    cnpj: {
      type: _sequelize.STRING,
      allowNull: false,
    },
    companyType: {
      type: _sequelize.STRING,
      allowNull: false,
    },
    createdAt: {
      type: _sequelize.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: _sequelize.DATE,
      allowNull: false,
    },
  },
  {
    sequelize: _2.default,
    modelName: 'cnpjs',
    timestamps: false,
  }
);
