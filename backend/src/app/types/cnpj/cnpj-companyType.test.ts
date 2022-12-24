import { CnpjCompanyType } from './cnpj-companyType';

describe('Cnpj companyType - Value Object', () => {
  it('should be able to accept valid type', () => {
    const companyType = new CnpjCompanyType('1');
    expect(companyType).toBeTruthy();
  });

  it('should throw error for invalid value', () => {
    ['0', '11'].forEach((invalidType) =>
      expect(() => new CnpjCompanyType(invalidType)).toThrow()
    );
  });
});
