import { makeCnpj } from '@tests/factories/cnpj-factory';
import { Cnpj } from './cnpj';

describe('Cnpj entity', () => {
  it('should sign the properties correctly', () => {
    const sut = new Cnpj(makeCnpj());

    expect(sut).toBeInstanceOf(Cnpj);
    expect(sut.cnpj).toBe(makeCnpj().cnpj);
    expect(sut.companyType).toBe(makeCnpj().companyType);
  });

  it('updated date cannot be less than creation date', () => {
    const updatedAt = new Date();

    updatedAt.setDate(updatedAt.getDate() + 1);

    const sut = new Cnpj(
      makeCnpj({
        updatedAt,
      })
    );

    expect(sut.updatedAt >= sut.createdAt).toBeTruthy();
  });
});
