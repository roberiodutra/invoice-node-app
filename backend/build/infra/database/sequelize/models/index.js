"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { newObj[key] = obj[key]; } } } newObj.default = obj; return newObj; } }var _sequelize = require('sequelize');
var _database = require('../config/database'); var config = _interopRequireWildcard(_database);

exports. default = new (0, _sequelize.Sequelize)(config);
