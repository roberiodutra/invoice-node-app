export interface UserProps {
  name: string;
  email: string;
  phoneNumber?: string;
  mobile?: string;
  departament?: string;
  verificationCode?: string;
  emailChecked: number;
  createdAt: Date;
  updatedAt: Date;
  cashforceAdm: number;
}

export class User {
  constructor(private props: UserProps) {}

  public get name() {
    return this.props.name;
  }

  public get email() {
    return this.props.email;
  }

  public get emailChecked() {
    return this.props.emailChecked;
  }

  public get createdAt() {
    return this.props.createdAt;
  }

  public get updatedAt() {
    return this.props.updatedAt;
  }

  public get cashforceAdm() {
    return this.props.cashforceAdm;
  }
}
