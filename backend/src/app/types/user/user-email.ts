import { ErrorTypes } from '@helpers/error-catalog';

export class UserEmail {
  private readonly email: string;

  public get value(): string {
    return this.email;
  }

  private emailValidate(email: string): boolean {
    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    return emailRegex.test(email);
  }

  constructor(email: string) {
    const emailValidate = this.emailValidate(email);

    if (!emailValidate) {
      throw new Error(ErrorTypes.InvalidUserEmail);
    }

    this.email = email;
  }
}
