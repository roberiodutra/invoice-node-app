import { describe, expect, it } from 'vitest';
import { Buyers } from './buyers';

describe('Buyers entity', () => {
  it('should sign the properties correctly', () => {
    const sut = new Buyers({
      name: 'John Doe',
      tradingName: null,
      cashforceTax: null,
      responsibleName: null,
      responsibleEmail: null,
      responsiblePosition: null,
      responsiblePhone: null,
      responsibleMobile: null,
      website: null,
      postalCode: null,
      address: null,
      number: null,
      complement: null,
      neighborhood: null,
      city: null,
      state: null,
      phoneNumber:  null,
      situation: null,
      situationDate: null,
      createdAt: new Date(),
      updatedAt: new Date(),
      cnpjId: null,
      confirm: 1,
      email: null
    })

    expect(sut).toBeInstanceOf(Buyers);
    expect(sut.name).toBe('John Doe');
  });
})
