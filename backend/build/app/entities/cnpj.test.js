"use strict";var _cnpjfactory = require('@tests/factories/cnpj-factory');
var _cnpj = require('./cnpj');

describe('Cnpj entity', () => {
  it('should sign the properties correctly', () => {
    const sut = new (0, _cnpj.Cnpj)(_cnpjfactory.makeCnpj.call(void 0, ));

    expect(sut).toBeInstanceOf(_cnpj.Cnpj);
    expect(sut.cnpj.value).toBe(_cnpjfactory.makeCnpj.call(void 0, ).cnpj.value);
    expect(sut.companyType.value).toBe(_cnpjfactory.makeCnpj.call(void 0, ).companyType.value);
  });

  it('updated date cannot be less than creation date', () => {
    const updatedAt = new Date();

    updatedAt.setDate(updatedAt.getDate() + 1);

    const sut = new (0, _cnpj.Cnpj)(
      _cnpjfactory.makeCnpj.call(void 0, {
        updatedAt,
      })
    );

    expect(sut.updatedAt >= sut.createdAt).toBeTruthy();
  });
});
