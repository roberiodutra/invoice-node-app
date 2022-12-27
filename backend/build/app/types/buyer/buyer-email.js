"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _errorcatalog = require('@helpers/error-catalog');

 class BuyerEmail {
  

   get value() {
    return this.email;
  }

   emailValidate(email) {
    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    return emailRegex.test(email);
  }

  constructor(email) {
    const validate = this.emailValidate(email);

    if (!validate) {
      throw new Error(_errorcatalog.ErrorTypes.InvalidBuyerEmail);
    }

    this.email = email;
  }
} exports.BuyerEmail = BuyerEmail;
