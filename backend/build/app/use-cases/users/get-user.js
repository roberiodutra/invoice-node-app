"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _errorcatalog = require('@helpers/error-catalog');









 class GetUser {
  constructor( userRepository) {;this.userRepository = userRepository;}

  async execute(request) {
    const { email } = request;

    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      throw new Error(_errorcatalog.ErrorTypes.UserNotFound);
    }

    return { user };
  }
} exports.GetUser = GetUser;
