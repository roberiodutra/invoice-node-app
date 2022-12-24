import { ErrorTypes } from '@helpers/error-catalog';

export class BuyerName {
  private readonly name: string;

  public get value(): string {
    return this.name;
  }

  private validateNameLength(name: string): boolean {
    return name.length >= 5;
  }

  constructor(name: string) {
    const checkLength = this.validateNameLength(name);

    if (!checkLength) {
      throw new Error(ErrorTypes.InvalidBuyerName);
    }

    this.name = name;
  }
}
