export interface OfferProps {
  tax: string;
  tariff: string;
  adValorem: string;
  float: string;
  iof: string;
  expiresIn: Date;
  paymentStatusSponsor: number;
  paymentStatusProvider: number;
  createdAt: Date;
  updatedAt: Date;
  orderId?: number;
  sponsorId?: number;
}

export class Offer {
  constructor(private props: OfferProps) {}

  public get tax() {
    return this.props.tax;
  }

  public get tariff() {
    return this.props.tariff;
  }

  public get adValorem() {
    return this.props.adValorem;
  }

  public get float() {
    return this.props.float;
  }

  public get iof() {
    return this.props.iof;
  }

  public get expiresIn() {
    return this.props.expiresIn;
  }

  public get paymentStatusSponsor() {
    return this.props.paymentStatusSponsor;
  }

  public get paymentStatusProvider() {
    return this.props.paymentStatusProvider;
  }

  public get createdAt() {
    return this.props.createdAt;
  }

  public get updatedAt() {
    return this.props.updatedAt;
  }
}
