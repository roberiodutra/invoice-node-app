"use strict";Object.defineProperty(exports, "__esModule", {value: true});









 class Cnpj {
  constructor( props) {;this.props = props;}

   get cnpj() {
    return this.props.cnpj;
  }

   get companyType() {
    return this.props.companyType;
  }

   get createdAt() {
    return this.props.createdAt;
  }

   get updatedAt() {
    return this.props.updatedAt;
  }
} exports.Cnpj = Cnpj;
