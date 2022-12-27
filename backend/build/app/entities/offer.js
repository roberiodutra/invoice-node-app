"use strict";Object.defineProperty(exports, "__esModule", {value: true});














 class Offer {
  constructor( props) {;this.props = props;}

   get tax() {
    return this.props.tax;
  }

   get tariff() {
    return this.props.tariff;
  }

   get adValorem() {
    return this.props.adValorem;
  }

   get float() {
    return this.props.float;
  }

   get iof() {
    return this.props.iof;
  }

   get expiresIn() {
    return this.props.expiresIn;
  }

   get paymentStatusSponsor() {
    return this.props.paymentStatusSponsor;
  }

   get paymentStatusProvider() {
    return this.props.paymentStatusProvider;
  }

   get createdAt() {
    return this.props.createdAt;
  }

   get updatedAt() {
    return this.props.updatedAt;
  }
} exports.Offer = Offer;
