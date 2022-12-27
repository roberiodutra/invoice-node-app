"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _user = require('@app/entities/user');



 function makeUser(override = {}) {
  return new (0, _user.User)({
    name: 'John Doe',
    email: 'johndoe@email.com',
    phoneNumber: '25067191',
    mobile: '988889999',
    departament: 'example',
    verificationCode: '123456',
    emailChecked: 0,
    createdAt: new Date(),
    updatedAt: new Date(),
    cashforceAdm: 0,
    ...override,
  });
} exports.makeUser = makeUser;
