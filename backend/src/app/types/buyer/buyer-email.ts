import { ErrorTypes } from '@helpers/error-catalog';

export class BuyerEmail {
  private readonly email: string;

  public get value(): string {
    return this.email;
  }

  private validateEmail(email: string): boolean {
    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    return emailRegex.test(email);
  }

  constructor(email: string) {
    const validate = this.validateEmail(email);

    if (!validate) {
      throw new Error(ErrorTypes.InvalidBuyerEmail);
    }

    this.email = email;
  }
}
