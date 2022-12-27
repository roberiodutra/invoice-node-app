"use strict";Object.defineProperty(exports, "__esModule", {value: true});
var _cnpj = require('@app/entities/cnpj');
var _cnpjcompanyType = require('@app/types/cnpj/cnpj-companyType');
var _cnpjvalue = require('@app/types/cnpj/cnpj-value');



 function makeCnpj(override = {}) {
  return new (0, _cnpj.Cnpj)({
    cnpj: new (0, _cnpjvalue.CnpjValue)('36.047.250/0001-24'),
    companyType: new (0, _cnpjcompanyType.CnpjCompanyType)('1'),
    createdAt: new Date(),
    updatedAt: new Date(),
    ...override,
  });
} exports.makeCnpj = makeCnpj;
