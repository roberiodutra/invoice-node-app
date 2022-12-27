"use strict";var _buyerfactory = require('@tests/factories/buyer-factory');
var _buyer = require('./buyer');

describe('Buyers entity', () => {
  it('should sign the properties correctly', () => {
    const sut = new (0, _buyer.Buyer)(_buyerfactory.makeBuyer.call(void 0, ));

    expect(sut).toBeInstanceOf(_buyer.Buyer);
    expect(sut.name.value).toBe(_buyerfactory.makeBuyer.call(void 0, ).name.value);
    expect(sut.email.value).toBe(_buyerfactory.makeBuyer.call(void 0, ).email.value);
  });

  it('updated date cannot be less than creation date', () => {
    const updatedAt = new Date();

    updatedAt.setDate(updatedAt.getDate() + 1);

    const sut = new (0, _buyer.Buyer)(
      _buyerfactory.makeBuyer.call(void 0, {
        updatedAt,
      })
    );

    expect(sut.updatedAt >= sut.createdAt).toBeTruthy();
  });

  it('should throw an error', () => {
    const updatedAt = new Date();

    updatedAt.setDate(updatedAt.getDate() - 1);

    expect(() => {
      return new (0, _buyer.Buyer)(_buyerfactory.makeBuyer.call(void 0, { updatedAt }));
    }).toThrow();
  });
});
