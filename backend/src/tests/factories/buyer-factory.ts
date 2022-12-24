import { Buyer, BuyerProps } from '@app/entities/buyer';
import { BuyerName } from '@app/types/buyer/buyer-name';

type Override = Partial<BuyerProps>;

export function makeBuyer(override: Override = {}) {
  return new Buyer({
    name: new BuyerName('John Doe'),
    email: 'johndoe@email.com',
    createdAt: new Date(),
    updatedAt: new Date(),
    ...override,
  });
}
