import { ErrorTypes } from '@helpers/error-catalog';

export class OrderNumber {
  private readonly orderNumber: string;

  public get value(): string {
    return this.orderNumber;
  }

  private orderNumberLengthValidate(orderNumber: string): boolean {
    return orderNumber.length >= 1;
  }

  constructor(orderNumber: string) {
    const lengthCheck = this.orderNumberLengthValidate(orderNumber);

    if (!lengthCheck) {
      throw new Error(ErrorTypes.InvalidOrderNumber);
    }

    this.orderNumber = orderNumber;
  }
}
