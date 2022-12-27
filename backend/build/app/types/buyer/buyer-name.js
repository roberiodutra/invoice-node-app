"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _errorcatalog = require('@helpers/error-catalog');

 class BuyerName {
  

   get value() {
    return this.name;
  }

   nameLengthValidate(name) {
    return name.length >= 5;
  }

  constructor(name) {
    const lengthCheck = this.nameLengthValidate(name);

    if (!lengthCheck) {
      throw new Error(_errorcatalog.ErrorTypes.InvalidBuyerName);
    }

    this.name = name;
  }
} exports.BuyerName = BuyerName;
