import { ErrorTypes } from '@helpers/error-catalog';

export class BuyerName {
  private readonly name: string;

  public get value(): string {
    return this.name;
  }

  private nameLengthValidate(name: string): boolean {
    return name.length >= 5;
  }

  constructor(name: string) {
    const lengthCheck = this.nameLengthValidate(name);

    if (!lengthCheck) {
      throw new Error(ErrorTypes.InvalidBuyerName);
    }

    this.name = name;
  }
}
