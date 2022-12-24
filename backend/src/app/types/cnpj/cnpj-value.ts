import { ErrorTypes } from '@helpers/error-catalog';

export class CnpjValue {
  private readonly cnpj: string;

  public get value(): string {
    return this.cnpj;
  }

  private cnpjFormatValidate(cnpj: string): boolean {
    const cnpjRegex = /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/g;
    return cnpjRegex.test(cnpj);
  }

  constructor(cnpj: string) {
    const formatCheck = this.cnpjFormatValidate(cnpj);

    if (!formatCheck) {
      throw new Error(ErrorTypes.InvalidCnpjFormat);
    }

    this.cnpj = cnpj;
  }
}
