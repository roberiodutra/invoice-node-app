import { Buyer, BuyerProps } from '@app/entities/buyer';
import { BuyerEmail } from '@app/types/buyer/buyer-email';
import { BuyerName } from '@app/types/buyer/buyer-name';

type Override = Partial<BuyerProps>;

export function makeBuyer(override: Override = {}) {
  return new Buyer({
    name: new BuyerName('John Doe'),
    email: new BuyerEmail('johndoe@email.com'),
    createdAt: new Date(),
    updatedAt: new Date(),
    ...override,
  });
}
