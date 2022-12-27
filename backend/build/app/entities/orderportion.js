"use strict";Object.defineProperty(exports, "__esModule", {value: true});









 class OrderPortion {
  constructor( props) {;this.props = props;}

   get nDup() {
    return this.props.nDup;
  }

   get dVenc() {
    return this.props.dVenc;
  }

   get vDup() {
    return this.props.vDup;
  }

   get availableToMarket() {
    return this.props.availableToMarket;
  }

   get createdAt() {
    return this.props.createdAt;
  }

   get updatedAt() {
    return this.props.updatedAt;
  }
} exports.OrderPortion = OrderPortion;
