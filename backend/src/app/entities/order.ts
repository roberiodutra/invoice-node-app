export interface OrderProps {
  orderNfId: string;
  orderNumber: string;
  orderPath?: string;
  orderFileName?: string;
  orderOriginalName?: string;
  emissionDate?: string;
  pdfFile?: string;
  emitedTo: string;
  nNf?: string;
  CTE?: string;
  value?: string;
  createdAt: Date;
  updatedAt: Date;
  cnpjId?: number;
  userId?: number;
  buyerId?: number;
  providerId?: number;
  orderStatusBuyer: string;
  orderStatusProvider: string;
  deliveryReceipt?: string;
  cargoPackingList?: string;
  deliveryCtrc?: string;
}

export class Order {
  constructor(private props: OrderProps) {}

  public get orderNfId() {
    return this.props.orderNfId;
  }

  public get orderNumber() {
    return this.props.orderNumber;
  }

  public get emitedTo() {
    return this.props.emitedTo;
  }

  public get createdAt() {
    return this.props.createdAt;
  }

  public get updatedAt() {
    return this.props.updatedAt;
  }

  public get userId() {
    return this.props.userId;
  }

  public get orderStatusBuyer() {
    return this.props.orderStatusBuyer;
  }

  public get orderStatusProvider() {
    return this.props.orderStatusProvider;
  }
}
