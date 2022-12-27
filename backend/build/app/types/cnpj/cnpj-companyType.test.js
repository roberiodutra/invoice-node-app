"use strict";var _cnpjcompanyType = require('./cnpj-companyType');

describe('Cnpj companyType - Value Object', () => {
  it('should be able to accept valid type', () => {
    const companyType = new (0, _cnpjcompanyType.CnpjCompanyType)('1');
    expect(companyType).toBeTruthy();
  });

  it('should throw error for invalid value', () => {
    ['0', '11'].forEach((invalidType) =>
      expect(() => new (0, _cnpjcompanyType.CnpjCompanyType)(invalidType)).toThrow()
    );
  });
});
