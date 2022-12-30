import { ErrorTypes } from '@helpers/error-catalog';

export class OrderValue {
  private readonly _value: string;

  public get value(): string {
    return this._value;
  }

  private orderValueValidate(value: number): boolean {
    return value > 0;
  }

  constructor(value: string) {
    const valueValidate = this.orderValueValidate(+value);

    if (!valueValidate) {
      throw new Error(ErrorTypes.InvalidOrderValue);
    }

    this._value = value;
  }
}
