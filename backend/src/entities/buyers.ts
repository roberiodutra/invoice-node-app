export interface BuyersProps {
  name: string;
  tradingName: string | null;
  cashforceTax: string | null;
  responsibleName: string | null;
  responsibleEmail: string | null;
  responsiblePosition: string | null;
  responsiblePhone: string | null;
  responsibleMobile: string | null;
  website: string | null;
  postalCode: string | null;
  address: string | null;
  number: string | null;
  complement: string | null;
  neighborhood: string | null;
  city: string | null;
  state: string | null;
  phoneNumber: string | null;
  situation: string | null;
  situationDate: string | null;
  createdAt: Date;
  updatedAt: Date;
  cnpjId: number | null;
  confirm: number;
  email: string | null;
}

export class Buyers {
  constructor(private props: BuyersProps) {}

  get name () {
    return this.props.name;
  }

  get createdAt () {
    return this.props.createdAt;
  }

  get updatedAt () {
    return this.props.updatedAt;
  }

  get confirm () {
    return this.props.confirm;
  }
}
