"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _httpstatuscodes = require('http-status-codes');


 class UserController {
  constructor( getUser) {;this.getUser = getUser;UserController.prototype.__init.call(this);}

   __init() {this.findByEmail = async (req, res) => {
    const { email } = req.body;
    const { user } = await this.getUser.execute({ email });
    return res.status(_httpstatuscodes.StatusCodes.OK).json(user);
  }}
} exports.UserController = UserController;
