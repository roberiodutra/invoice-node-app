export interface SponsorProps {
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
  bank?: string;
  bankAgency?: string;
  account?: string;
  phoneNumber?: string;
  situation?: string;
  situationDate?: string;
  createdAt: Date;
  updatedAt: Date;
  cnpjId?: number;
  email?: string;
}

export class Sponsor {
  constructor(private props: SponsorProps) {}

  public get name() {
    return this.props.name;
  }

  public get createdAt() {
    return this.props.createdAt;
  }

  public get updatedAt() {
    return this.props.updatedAt;
  }
}
