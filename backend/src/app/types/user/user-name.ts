import { ErrorTypes } from '@helpers/error-catalog';

export class UserName {
  private readonly name: string;

  public get value(): string {
    return this.name;
  }

  private UserNameLengthValidate(name: string): boolean {
    return name.length >= 3;
  }

  constructor(name: string) {
    const lengthCheck = this.UserNameLengthValidate(name);

    if (!lengthCheck) {
      throw new Error(ErrorTypes.InvalidUserName);
    }

    this.name = name;
  }
}
