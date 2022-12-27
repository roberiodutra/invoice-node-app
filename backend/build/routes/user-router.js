"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _getuser = require('@app/use-cases/users/get-user');
var _sequelizeuserrepository = require('@infra/database/sequelize/repositories/sequelize-user-repository');
var _usercontroller = require('@infra/http/controllers/user.controller');
var _express = require('express');

const route = _express.Router.call(void 0, );

// Dependency injection
const userRepository = new (0, _sequelizeuserrepository.SequelizeUserRepository)();
const getUser = new (0, _getuser.GetUser)(userRepository);
const controller = new (0, _usercontroller.UserController)(getUser);

route.post('/sign_in', controller.findByEmail);

exports. default = route;
