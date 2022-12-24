import { CnpjValue } from '@app/types/cnpj/cnpj-value';

export interface CnpjProps {
  cnpj: CnpjValue;
  companyType: string;
  createdAt: Date;
  updatedAt: Date;
}

export class Cnpj {
  constructor(private props: CnpjProps) {}

  public get cnpj() {
    return this.props.cnpj;
  }

  public get companyType() {
    return this.props.companyType;
  }

  public get createdAt() {
    return this.props.createdAt;
  }

  public get updatedAt() {
    return this.props.updatedAt;
  }
}
