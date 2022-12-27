"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _httpstatuscodes = require('http-status-codes');

var ErrorTypes; (function (ErrorTypes) {
  const InvalidUpdatedDate = 'InvalidUpdatedDate'; ErrorTypes["InvalidUpdatedDate"] = InvalidUpdatedDate;
  const InvalidBuyerName = 'InvalidBuyerName'; ErrorTypes["InvalidBuyerName"] = InvalidBuyerName;
  const InvalidBuyerEmail = 'InvalidBuyerEmail'; ErrorTypes["InvalidBuyerEmail"] = InvalidBuyerEmail;
  const InvalidCnpjFormat = 'InvalidCnpjFormat'; ErrorTypes["InvalidCnpjFormat"] = InvalidCnpjFormat;
  const InvalidCnpjCompanyType = 'InvalidCnpjCompanyType'; ErrorTypes["InvalidCnpjCompanyType"] = InvalidCnpjCompanyType;
  const UserNotFound = 'UserNotFound'; ErrorTypes["UserNotFound"] = UserNotFound;
})(ErrorTypes || (exports.ErrorTypes = ErrorTypes = {}));










 const ErrorCatalog = {
  InvalidUpdatedDate: {
    message: 'Invalid updated date',
    code: _httpstatuscodes.StatusCodes.BAD_REQUEST,
  },

  InvalidBuyerName: {
    message: 'Buyer name must be at least 5 characters long',
    code: _httpstatuscodes.StatusCodes.BAD_REQUEST,
  },

  InvalidBuyerEmail: {
    message: 'Buyer email must be valid "example@email.com"',
    code: _httpstatuscodes.StatusCodes.BAD_REQUEST,
  },

  InvalidCnpjFormat: {
    message: 'Cnpj must have a valid format',
    code: _httpstatuscodes.StatusCodes.BAD_REQUEST,
  },

  InvalidCnpjCompanyType: {
    message: 'CompanyType must have a value between 1 and 10',
    code: _httpstatuscodes.StatusCodes.BAD_REQUEST,
  },

  UserNotFound: {
    message: 'User Not Found',
    code: _httpstatuscodes.StatusCodes.NOT_FOUND,
  },
}; exports.ErrorCatalog = ErrorCatalog;
