import { BuyerProps } from '@app/entities/buyer';
import { Cnpj } from '@app/entities/cnpj';

type Override = Partial<BuyerProps>;

export function makeCnpj(override: Override = {}) {
  return new Cnpj({
    cnpj: '36.047.250/0001-24',
    companyType: '1',
    createdAt: new Date(),
    updatedAt: new Date(),
    ...override,
  });
}
