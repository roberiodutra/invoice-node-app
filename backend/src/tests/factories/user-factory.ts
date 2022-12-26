import { User, UserProps } from '@app/entities/user';

type Override = Partial<UserProps>;

export function makeUser(override: Override = {}) {
  return new User({
    name: 'John Doe',
    email: 'johndoe@email.com',
    phoneNumber: '25067191',
    mobile: '988889999',
    departament: 'example',
    verificationCode: '123456',
    emailChecked: 0,
    createdAt: new Date(),
    updatedAt: new Date(),
    cashforceAdm: 0,
    ...override,
  });
}
