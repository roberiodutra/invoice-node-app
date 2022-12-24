import { CnpjValue } from './cnpj-value';

describe('Cnpj format - Value Object', () => {
  it('should be able to accept valid cnpm format', () => {
    const cnpj = new CnpjValue('36.047.250/0001-24');
    expect(cnpj).toBeTruthy();
  });

  it('should throw error for invalid cnpj format', () => {
    ['00.000.000/0000-000', '99.999.999/9999-9'].forEach((invalidCnpj) =>
      expect(() => new CnpjValue(invalidCnpj)).toThrow()
    );
  });
});
