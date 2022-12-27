"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _buyer = require('@app/entities/buyer');
var _buyeremail = require('@app/types/buyer/buyer-email');
var _buyername = require('@app/types/buyer/buyer-name');



 function makeBuyer(override = {}) {
  return new (0, _buyer.Buyer)({
    name: new (0, _buyername.BuyerName)('John Doe'),
    email: new (0, _buyeremail.BuyerEmail)('johndoe@email.com'),
    createdAt: new Date(),
    updatedAt: new Date(),
    ...override,
  });
} exports.makeBuyer = makeBuyer;
