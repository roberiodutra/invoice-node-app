"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _errorcatalog = require('@helpers/error-catalog');

 class CnpjValue {
  

   get value() {
    return this.cnpj;
  }

   cnpjFormatValidate(cnpj) {
    const cnpjRegex = /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/g;
    return cnpjRegex.test(cnpj);
  }

  constructor(cnpj) {
    const formatCheck = this.cnpjFormatValidate(cnpj);

    if (!formatCheck) {
      throw new Error(_errorcatalog.ErrorTypes.InvalidCnpjFormat);
    }

    this.cnpj = cnpj;
  }
} exports.CnpjValue = CnpjValue;
