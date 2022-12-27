"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _orderrouter = require('./order-router'); var _orderrouter2 = _interopRequireDefault(_orderrouter);
var _userrouter = require('./user-router'); var _userrouter2 = _interopRequireDefault(_userrouter);

const Endpoints = _express.Router.call(void 0, );

Endpoints.use('/users', _userrouter2.default);
Endpoints.use('/orders', _orderrouter2.default);

exports. default = Endpoints;
