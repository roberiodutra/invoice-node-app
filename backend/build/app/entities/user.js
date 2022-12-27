"use strict";Object.defineProperty(exports, "__esModule", {value: true});












 class User {
  constructor( props) {;this.props = props;}

   get name() {
    return this.props.name;
  }

   get email() {
    return this.props.email;
  }

   get emailChecked() {
    return this.props.emailChecked;
  }

   get createdAt() {
    return this.props.createdAt;
  }

   get updatedAt() {
    return this.props.updatedAt;
  }

   get cashforceAdm() {
    return this.props.cashforceAdm;
  }
} exports.User = User;
