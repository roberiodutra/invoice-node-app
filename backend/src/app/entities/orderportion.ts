export interface OrderPortionsProps {
  nDup: string;
  dVenc: string;
  vDup: string;
  availableToMarket: number;
  createdAt: Date;
  updatedAt: Date;
  orderId?: number;
}

export class OrderPortion {
  constructor(private props: OrderPortionsProps) {}

  public get nDup() {
    return this.props.nDup;
  }

  public get dVenc() {
    return this.props.dVenc;
  }

  public get vDup() {
    return this.props.vDup;
  }

  public get availableToMarket() {
    return this.props.availableToMarket;
  }

  public get createdAt() {
    return this.props.createdAt;
  }

  public get updatedAt() {
    return this.props.updatedAt;
  }
}
