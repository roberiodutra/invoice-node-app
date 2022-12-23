import { makeBuyer } from '@tests/factories/buyer-factory';
import { Buyer } from './buyer';

describe('Buyers entity', () => {
  it('should sign the properties correctly', () => {
    const sut = new Buyer(makeBuyer())

    expect(sut).toBeInstanceOf(Buyer);
    expect(sut.name).toBe(makeBuyer().name);
    expect(sut.email).toBe(makeBuyer().email);
  });

  it('updated date cannot be less than creation date', () => {
    const updatedAt = new Date();

    updatedAt.setDate(updatedAt.getDate() + 1);

    const sut = new Buyer(makeBuyer({
      updatedAt,
    }))

    expect(sut.updatedAt >= sut.createdAt).toBeTruthy();
  });

  it('should throw an error', () => {
    const updatedAt = new Date();

    updatedAt.setDate(updatedAt.getDate() - 1);

    expect(() => {
      return new Buyer(makeBuyer({ updatedAt }));
    }).toThrow();
  });
})
