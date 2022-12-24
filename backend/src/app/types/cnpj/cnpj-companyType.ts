import { ErrorTypes } from '@helpers/error-catalog';

export class CnpjCompanyType {
  private readonly companyType: string;

  public get value(): string {
    return this.companyType;
  }

  private typeValidate(companyType: number): boolean {
    return companyType >= 1 && companyType <= 10;
  }

  constructor(companyType: string) {
    const typeCheck = this.typeValidate(+companyType);

    if (!typeCheck) {
      throw new Error(ErrorTypes.InvalidCnpjCompanyType);
    }

    this.companyType = companyType;
  }
}
