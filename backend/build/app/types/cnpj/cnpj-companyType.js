"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _errorcatalog = require('@helpers/error-catalog');

 class CnpjCompanyType {
  

   get value() {
    return this.companyType;
  }

   typeValidate(companyType) {
    return companyType >= 1 && companyType <= 10;
  }

  constructor(companyType) {
    const typeCheck = this.typeValidate(+companyType);

    if (!typeCheck) {
      throw new Error(_errorcatalog.ErrorTypes.InvalidCnpjCompanyType);
    }

    this.companyType = companyType;
  }
} exports.CnpjCompanyType = CnpjCompanyType;
