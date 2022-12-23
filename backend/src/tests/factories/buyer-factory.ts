import { Buyer, BuyerProps } from '@app/entities/buyer';

type Override = Partial<BuyerProps>;

export function makeBuyer(override: Override = {}) {
  return new Buyer({
    name: 'John Doe',
    email: 'johndoe@email.com',
    createdAt: new Date(),
    updatedAt: new Date(),
    ...override,
  });
}
