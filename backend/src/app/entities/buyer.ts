import { ErrorTypes } from '@helpers/error-catalog';

export interface BuyerProps {
  name: string;
  tradingName?: string;
  cashforceTax?: string;
  responsibleName?: string;
  responsibleEmail?: string;
  responsiblePosition?: string;
  responsiblePhone?: string;
  responsibleMobile?: string;
  website?: string;
  postalCode?: string;
  address?: string;
  number?: string;
  complement?: string;
  neighborhood?: string;
  city?: string;
  state?: string;
  phoneNumber?: string;
  situation?: string;
  situationDate?: string;
  createdAt: Date;
  updatedAt: Date;
  cnpjId?: number;
  confirm?: number;
  email: string;
}

export class Buyer {
  constructor(private props: BuyerProps) {
    const { createdAt, updatedAt } = props;

    if (updatedAt < createdAt) {
      throw new Error(ErrorTypes.InvalidUpdatedDate);
    }
  }

  public get name() {
    return this.props.name;
  }

  public get email() {
    return this.props.email;
  }

  public get createdAt() {
    return this.props.createdAt;
  }

  public get updatedAt() {
    return this.props.updatedAt;
  }
}
