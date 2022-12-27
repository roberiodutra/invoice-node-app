"use strict";Object.defineProperty(exports, "__esModule", {value: true});
























 class Order {
  constructor( props) {;this.props = props;}

   get orderNfId() {
    return this.props.orderNfId;
  }

   get orderNumber() {
    return this.props.orderNumber;
  }

   get emitedTo() {
    return this.props.emitedTo;
  }

   get createdAt() {
    return this.props.createdAt;
  }

   get updatedAt() {
    return this.props.updatedAt;
  }

   get userId() {
    return this.props.userId;
  }

   get orderStatusBuyer() {
    return this.props.orderStatusBuyer;
  }

   get orderStatusProvider() {
    return this.props.orderStatusProvider;
  }
} exports.Order = Order;
