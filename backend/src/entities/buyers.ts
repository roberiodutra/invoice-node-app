export interface BuyersProps {
  id: number;
  name: string;
  tradingName: string;
  cashforceTax: string;
  responsibleName: string;
  responsibleEmail: string;
  responsiblePosition: string;
  responsiblePhone: string;
  responsibleMobile: string;
  website: string;
  postalCode: string;
  address: string;
  number: string;
  complement: string;
  neighborhood: string;
  city: string;
  state: string;
  phoneNumber: string;
  situation: string;
  situationDate: string;
  createdAt: Date;
  updatedAt: Date;
  cnpjId: number;
  confirm: number;
  email: string;
}

export class Buyers {
  private props: BuyersProps;

  constructor(props: BuyersProps) {
    this.props = props;
  }

  get id () {
    return this.props.id;
  }

  get name () {
    return this.props.name;
  }
}