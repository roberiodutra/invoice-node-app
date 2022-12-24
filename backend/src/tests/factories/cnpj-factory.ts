import { BuyerProps } from '@app/entities/buyer';
import { Cnpj } from '@app/entities/cnpj';
import { CnpjCompanyType } from '@app/types/cnpj/cnpj-companyType';
import { CnpjValue } from '@app/types/cnpj/cnpj-value';

type Override = Partial<BuyerProps>;

export function makeCnpj(override: Override = {}) {
  return new Cnpj({
    cnpj: new CnpjValue('36.047.250/0001-24'),
    companyType: new CnpjCompanyType('1'),
    createdAt: new Date(),
    updatedAt: new Date(),
    ...override,
  });
}
