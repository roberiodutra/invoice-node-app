"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _errorcatalog = require('@helpers/error-catalog');

 class InMemoryUserRepository  {constructor() { InMemoryUserRepository.prototype.__init.call(this); }
   __init() {this.user = []}

  async findByEmail(email) {
    const user = this.user.find((item) => item.email === email);

    if (!user) {
      throw new Error(_errorcatalog.ErrorTypes.UserNotFound);
    }

    return user;
  }

  async create(user) {
    this.user.push(user);
  }
} exports.InMemoryUserRepository = InMemoryUserRepository;
