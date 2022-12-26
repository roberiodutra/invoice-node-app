import { Order } from '@app/entities/order';
import { UserProps } from '@app/entities/user';

type Override = Partial<UserProps>;

export function makeOrder(override: Override = {}) {
  return new Order({
    orderNfId: '1234',
    orderNumber: '1',
    orderPath: 'path',
    orderFileName: 'name',
    orderOriginalName: 'original',
    emissionDate: '2010-02-05',
    pdfFile: 'pdf',
    emitedTo: 'John Doe',
    nNf: 'nf',
    CTE: 'cte',
    value: '100',
    createdAt: new Date(),
    updatedAt: new Date(),
    cnpjId: 1,
    userId: 1,
    buyerId: 1,
    providerId: 1,
    orderStatusBuyer: 'status',
    orderStatusProvider: 'status',
    deliveryReceipt: 'delivery',
    cargoPackingList: 'packing',
    deliveryCtrc: 'ctrc',
    ...override,
  });
}
