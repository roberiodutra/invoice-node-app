export type OrderType = {
  orderNumber: string;
  value: string;
  createdAt: string;
  orderStatusBuyer: string;
  provider: {
    name: string;
    createdAt: string;
    cnpj: {
      cnpj: string;
    };
  };
  buyer: {
    name: string;
  };
};
